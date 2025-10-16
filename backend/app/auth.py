import hashlib
import jwt as pyjwt
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
from .database import admin_users_collection

# Load environment variables
load_dotenv()

# JWT Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "ankita-foundation-secret-2024")
ALGORITHM = "HS256"

# Password hashing using SHA-256 (for development)
def get_password_hash(password):
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(plain_password, hashed_password):
    return get_password_hash(plain_password) == hashed_password

# Token functions
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=1)
    to_encode.update({"exp": expire})
    encoded_jwt = pyjwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def verify_token(token: str):
    try:
        payload = pyjwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            return False
        admin = await admin_users_collection.find_one({"username": username})
        return admin is not None
    except:
        return False

async def get_admin_by_username(username: str):
    return await admin_users_collection.find_one({"username": username})

# Create default admin on startup
async def create_default_admin():
    admin_exists = await admin_users_collection.find_one({"username": "spider"})
    if not admin_exists:
        from .auth import get_password_hash
        admin_user = {
            "username": "spider",
            "password": get_password_hash("i_am_groot"),
            "email": "help@ankitawellbeingfoundation.org",
            "created_at": datetime.utcnow()
        }
        await admin_users_collection.insert_one(admin_user)
        print("Default admin user created: username='spider', password='i_am_groot'")