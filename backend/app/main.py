from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List, Optional
from bson import ObjectId
from pydantic import BaseModel

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

# New Pydantic models for status update
class StatusUpdate(BaseModel):
    status: str
    notes: Optional[str] = None

class ContactResponseWithStatus(ContactResponse):
    status: str = "pending"
    reviewed_at: Optional[datetime] = None
    notes: Optional[str] = None

class VolunteerResponseWithStatus(VolunteerResponse):
    status: str = "pending"
    reviewed_at: Optional[datetime] = None
    notes: Optional[str] = None

class InternshipResponseWithStatus(InternshipResponse):
    status: str = "pending"
    reviewed_at: Optional[datetime] = None
    notes: Optional[str] = None

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
    contact_data["status"] = "pending"  # Default status
    contact_data["reviewed_at"] = None
    contact_data["notes"] = None
    
    result = await contacts_collection.insert_one(contact_data)
    created_contact = await contacts_collection.find_one({"_id": result.inserted_id})
    
    return {
        "id": str(created_contact["_id"]),
        "name": created_contact["name"],
        "email": created_contact["email"],
        "message": created_contact["message"],
        "created_at": created_contact["created_at"]
    }

@app.get("/api/contacts/", response_model=List[ContactResponseWithStatus])
async def get_contacts(token: str, skip: int = 0, limit: int = 100, status: Optional[str] = None):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    contacts = []
    query = {}
    if status:
        query["status"] = status
    
    cursor = contacts_collection.find(query).sort("created_at", -1).skip(skip).limit(limit)
    async for contact in cursor:
        contacts.append({
            "id": str(contact["_id"]),
            "name": contact["name"],
            "email": contact["email"],
            "message": contact["message"],
            "created_at": contact["created_at"],
            "status": contact.get("status", "pending"),
            "reviewed_at": contact.get("reviewed_at"),
            "notes": contact.get("notes")
        })
    return contacts

@app.patch("/api/contacts/{contact_id}/status")
async def update_contact_status(contact_id: str, status_update: StatusUpdate, token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    try:
        update_data = {"status": status_update.status}
        if status_update.status != "pending":
            update_data["reviewed_at"] = datetime.utcnow()
        if status_update.notes:
            update_data["notes"] = status_update.notes
            
        result = await contacts_collection.update_one(
            {"_id": ObjectId(contact_id)},
            {"$set": update_data}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Contact not found")
        
        return {"message": f"Contact status updated to {status_update.status}"}
    except:
        raise HTTPException(status_code=400, detail="Invalid contact ID")

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
    
    total = await contacts_collection.count_documents({})
    pending = await contacts_collection.count_documents({"status": "pending"})
    completed = await contacts_collection.count_documents({"status": "completed"})
    
    return {
        "total_contacts": total,
        "pending_contacts": pending,
        "completed_contacts": completed
    }

# Volunteer APIs
@app.post("/api/volunteer/", response_model=VolunteerResponse)
async def create_volunteer(volunteer: VolunteerCreate):
    # Basic email validation
    if "@" not in volunteer.email or "." not in volunteer.email:
        raise HTTPException(status_code=400, detail="Invalid email format")
    
    volunteer_data = volunteer.dict()
    volunteer_data["created_at"] = datetime.utcnow()
    volunteer_data["status"] = "pending"  # Default status
    volunteer_data["reviewed_at"] = None
    volunteer_data["notes"] = None
    
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

@app.get("/api/volunteers/", response_model=List[VolunteerResponseWithStatus])
async def get_volunteers(token: str, skip: int = 0, limit: int = 100, status: Optional[str] = None):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    volunteers = []
    query = {}
    if status:
        query["status"] = status
    
    cursor = volunteers_collection.find(query).sort("created_at", -1).skip(skip).limit(limit)
    async for volunteer in cursor:
        volunteers.append({
            "id": str(volunteer["_id"]),
            "fullName": volunteer["fullName"],
            "email": volunteer["email"],
            "phone": volunteer["phone"],
            "volunteerType": volunteer["volunteerType"],
            "message": volunteer["message"],
            "created_at": volunteer["created_at"],
            "status": volunteer.get("status", "pending"),
            "reviewed_at": volunteer.get("reviewed_at"),
            "notes": volunteer.get("notes")
        })
    return volunteers

@app.patch("/api/volunteers/{volunteer_id}/status")
async def update_volunteer_status(volunteer_id: str, status_update: StatusUpdate, token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    try:
        update_data = {"status": status_update.status}
        if status_update.status != "pending":
            update_data["reviewed_at"] = datetime.utcnow()
        if status_update.notes:
            update_data["notes"] = status_update.notes
            
        result = await volunteers_collection.update_one(
            {"_id": ObjectId(volunteer_id)},
            {"$set": update_data}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Volunteer not found")
        
        return {"message": f"Volunteer status updated to {status_update.status}"}
    except:
        raise HTTPException(status_code=400, detail="Invalid volunteer ID")

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
    
    total = await volunteers_collection.count_documents({})
    pending = await volunteers_collection.count_documents({"status": "pending"})
    completed = await volunteers_collection.count_documents({"status": "completed"})
    
    return {
        "total_volunteers": total,
        "pending_volunteers": pending,
        "completed_volunteers": completed
    }

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
    internship_data["status"] = "pending"  # Default status
    internship_data["reviewed_at"] = None
    internship_data["notes"] = None
    
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

@app.get("/api/internships/", response_model=List[InternshipResponseWithStatus])
async def get_internships(token: str, skip: int = 0, limit: int = 100, status: Optional[str] = None):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    internships = []
    query = {}
    if status:
        query["status"] = status
    
    cursor = internships_collection.find(query).sort("created_at", -1).skip(skip).limit(limit)
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
            "created_at": internship["created_at"],
            "status": internship.get("status", "pending"),
            "reviewed_at": internship.get("reviewed_at"),
            "notes": internship.get("notes")
        })
    return internships

@app.patch("/api/internships/{internship_id}/status")
async def update_internship_status(internship_id: str, status_update: StatusUpdate, token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    try:
        update_data = {"status": status_update.status}
        if status_update.status != "pending":
            update_data["reviewed_at"] = datetime.utcnow()
        if status_update.notes:
            update_data["notes"] = status_update.notes
            
        result = await internships_collection.update_one(
            {"_id": ObjectId(internship_id)},
            {"$set": update_data}
        )
        
        if result.modified_count == 0:
            raise HTTPException(status_code=404, detail="Internship application not found")
        
        return {"message": f"Internship status updated to {status_update.status}"}
    except:
        raise HTTPException(status_code=400, detail="Invalid internship ID")

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
    
    total = await internships_collection.count_documents({})
    pending = await internships_collection.count_documents({"status": "pending"})
    completed = await internships_collection.count_documents({"status": "completed"})
    
    return {
        "total_internships": total,
        "pending_internships": pending,
        "completed_internships": completed
    }

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

# Dashboard Statistics
@app.get("/api/dashboard/stats")
async def get_dashboard_stats(token: str):
    if not await verify_token(token):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    
    # Contact stats
    total_contacts = await contacts_collection.count_documents({})
    pending_contacts = await contacts_collection.count_documents({"status": "pending"})
    completed_contacts = await contacts_collection.count_documents({"status": "completed"})
    
    # Volunteer stats
    total_volunteers = await volunteers_collection.count_documents({})
    pending_volunteers = await volunteers_collection.count_documents({"status": "pending"})
    completed_volunteers = await volunteers_collection.count_documents({"status": "completed"})
    
    # Internship stats
    total_internships = await internships_collection.count_documents({})
    pending_internships = await internships_collection.count_documents({"status": "pending"})
    completed_internships = await internships_collection.count_documents({"status": "completed"})
    
    return {
        "contacts": {
            "total": total_contacts,
            "pending": pending_contacts,
            "completed": completed_contacts
        },
        "volunteers": {
            "total": total_volunteers,
            "pending": pending_volunteers,
            "completed": completed_volunteers
        },
        "internships": {
            "total": total_internships,
            "pending": pending_internships,
            "completed": completed_internships
        }
    }

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