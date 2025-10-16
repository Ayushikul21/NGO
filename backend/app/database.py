from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# MongoDB connection
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DATABASE_NAME = "ngo_contact_app"

client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]

# Collections
contacts_collection = db.contacts
admin_users_collection = db.admin_users
volunteers_collection = db.volunteers
internships_collection = db.internships  # New collection for internships

def get_database():
    return db