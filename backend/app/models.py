from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Optional

# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    message: str
    created_at: datetime

# Volunteer Models
class VolunteerCreate(BaseModel):
    fullName: str
    email: EmailStr
    phone: str
    volunteerType: str
    message: str

class VolunteerResponse(BaseModel):
    id: str
    fullName: str
    email: str
    phone: str
    volunteerType: str
    message: str
    created_at: datetime

# Internship Models
class InternshipCreate(BaseModel):
    fullName: str
    email: EmailStr
    phone: str
    internshipType: str
    education: str
    skills: Optional[str] = ""
    experience: Optional[str] = ""
    motivation: str
    portfolio: Optional[str] = ""

class InternshipResponse(BaseModel):
    id: str
    fullName: str
    email: str
    phone: str
    internshipType: str
    education: str
    skills: str
    experience: str
    motivation: str
    portfolio: str
    created_at: datetime

# Admin Models
class AdminLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class AdminResponse(BaseModel):
    username: str
    email: str