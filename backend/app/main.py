from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List
from bson import ObjectId

# Import from modular files
from .database import contacts_collection, admin_users_collection, volunteers_collection, internships_collection
from .models import ContactCreate, ContactResponse, AdminLogin, Token, VolunteerCreate, VolunteerResponse, InternshipCreate, InternshipResponse
from .auth import (
    verify_password, 
    create_access_token, 
    verify_token,
    get_admin_by_username,
    create_default_admin
)

# FastAPI app
app = FastAPI(
    title="Ankita Wellbeing Foundation API",
    description="Backend API for contact form submissions, volunteer applications, internship applications and admin panel",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create default admin on startup
@app.on_event("startup")
async def startup_event():
    await create_default_admin()

# Contact APIs
@app.post("/api/contact/", response_model=ContactResponse)
async def create_contact(contact: ContactCreate):
    # Basic email validation
    if "@" not in contact.email or "." not in contact.email:
        raise HTTPException(status_code=400, detail="Invalid email format")
    
    contact_data = contact.dict()
    contact_data["created_at"] = datetime.utcnow()
    
    result = await contacts_collection.insert_one(contact_data)
    created_contact = await contacts_collection.find_one({"_id": result.inserted_id})
    
    return {
        "id": str(created_contact["_id"]),
        "name": created_contact["name"],
        "email": created_contact["email"],
        "message": created_contact["message"],
        "created_at": created_contact["created_at"]
    }

@app.get("/api/contacts/", response_model=List[ContactResponse])
async def get_contacts(token: str, skip: int = 0, limit: int = 100):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    contacts = []
    cursor = contacts_collection.find().sort("created_at", -1).skip(skip).limit(limit)
    async for contact in cursor:
        contacts.append({
            "id": str(contact["_id"]),
            "name": contact["name"],
            "email": contact["email"],
            "message": contact["message"],
            "created_at": contact["created_at"]
        })
    return contacts

@app.delete("/api/contacts/{contact_id}")
async def delete_contact(contact_id: str, token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    try:
        result = await contacts_collection.delete_one({"_id": ObjectId(contact_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Contact not found")
        return {"message": "Contact deleted successfully"}
    except:
        raise HTTPException(status_code=400, detail="Invalid contact ID")

@app.get("/api/contacts/count")
async def get_contacts_count(token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    count = await contacts_collection.count_documents({})
    return {"total_contacts": count}

# Volunteer APIs
@app.post("/api/volunteer/", response_model=VolunteerResponse)
async def create_volunteer(volunteer: VolunteerCreate):
    # Basic email validation
    if "@" not in volunteer.email or "." not in volunteer.email:
        raise HTTPException(status_code=400, detail="Invalid email format")
    
    volunteer_data = volunteer.dict()
    volunteer_data["created_at"] = datetime.utcnow()
    
    result = await volunteers_collection.insert_one(volunteer_data)
    created_volunteer = await volunteers_collection.find_one({"_id": result.inserted_id})
    
    return {
        "id": str(created_volunteer["_id"]),
        "fullName": created_volunteer["fullName"],
        "email": created_volunteer["email"],
        "phone": created_volunteer["phone"],
        "volunteerType": created_volunteer["volunteerType"],
        "message": created_volunteer["message"],
        "created_at": created_volunteer["created_at"]
    }

@app.get("/api/volunteers/", response_model=List[VolunteerResponse])
async def get_volunteers(token: str, skip: int = 0, limit: int = 100):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    volunteers = []
    cursor = volunteers_collection.find().sort("created_at", -1).skip(skip).limit(limit)
    async for volunteer in cursor:
        volunteers.append({
            "id": str(volunteer["_id"]),
            "fullName": volunteer["fullName"],
            "email": volunteer["email"],
            "phone": volunteer["phone"],
            "volunteerType": volunteer["volunteerType"],
            "message": volunteer["message"],
            "created_at": volunteer["created_at"]
        })
    return volunteers

@app.delete("/api/volunteers/{volunteer_id}")
async def delete_volunteer(volunteer_id: str, token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    try:
        result = await volunteers_collection.delete_one({"_id": ObjectId(volunteer_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Volunteer not found")
        return {"message": "Volunteer application deleted successfully"}
    except:
        raise HTTPException(status_code=400, detail="Invalid volunteer ID")

@app.get("/api/volunteers/count")
async def get_volunteers_count(token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    count = await volunteers_collection.count_documents({})
    return {"total_volunteers": count}

# Internship APIs
@app.post("/api/internship/", response_model=InternshipResponse)
async def create_internship(internship: InternshipCreate):
    # Basic email validation
    if "@" not in internship.email or "." not in internship.email:
        raise HTTPException(status_code=400, detail="Invalid email format")
    
    # Phone validation - must be exactly 10 digits
    if not internship.phone.isdigit() or len(internship.phone) != 10:
        raise HTTPException(status_code=400, detail="Phone number must be exactly 10 digits")
    
    internship_data = internship.dict()
    internship_data["created_at"] = datetime.utcnow()
    
    result = await internships_collection.insert_one(internship_data)
    created_internship = await internships_collection.find_one({"_id": result.inserted_id})
    
    return {
        "id": str(created_internship["_id"]),
        "fullName": created_internship["fullName"],
        "email": created_internship["email"],
        "phone": created_internship["phone"],
        "internshipType": created_internship["internshipType"],
        "education": created_internship["education"],
        "skills": created_internship["skills"],
        "experience": created_internship["experience"],
        "motivation": created_internship["motivation"],
        "portfolio": created_internship["portfolio"],
        "created_at": created_internship["created_at"]
    }

@app.get("/api/internships/", response_model=List[InternshipResponse])
async def get_internships(token: str, skip: int = 0, limit: int = 100):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    internships = []
    cursor = internships_collection.find().sort("created_at", -1).skip(skip).limit(limit)
    async for internship in cursor:
        internships.append({
            "id": str(internship["_id"]),
            "fullName": internship["fullName"],
            "email": internship["email"],
            "phone": internship["phone"],
            "internshipType": internship["internshipType"],
            "education": internship["education"],
            "skills": internship["skills"],
            "experience": internship["experience"],
            "motivation": internship["motivation"],
            "portfolio": internship["portfolio"],
            "created_at": internship["created_at"]
        })
    return internships

@app.delete("/api/internships/{internship_id}")
async def delete_internship(internship_id: str, token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    try:
        result = await internships_collection.delete_one({"_id": ObjectId(internship_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Internship application not found")
        return {"message": "Internship application deleted successfully"}
    except:
        raise HTTPException(status_code=400, detail="Invalid internship ID")

@app.get("/api/internships/count")
async def get_internships_count(token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    count = await internships_collection.count_documents({})
    return {"total_internships": count}

# Admin Authentication APIs
@app.post("/api/admin/login", response_model=Token)
async def admin_login(admin_data: AdminLogin):
    admin = await get_admin_by_username(admin_data.username)
    
    if not admin or not verify_password(admin_data.password, admin["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )
    
    access_token = create_access_token(data={"sub": admin["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

# Health check and info endpoints
@app.get("/")
async def root():
    return {
        "message": "Ankita Wellbeing Foundation API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy", 
        "timestamp": datetime.utcnow(),
        "database": "connected"
    }

@app.get("/api/info")
async def get_organization_info():
    return {
        "organization": "Ankita Wellbeing Foundation",
        "address": "703-A, Rudra Sangam Apartment, Sarai Inayat, GT Road near Prayag Dhaba, Prayagraj – 211019, U.P., India",
        "phone": "+91 7905226299",
        "email": "help@ankitawellbeingfoundation.org"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)