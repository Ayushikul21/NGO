import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Award, Users, Calendar, Briefcase, Star, Target, Heart, Globe, MapPin, CheckCircle, ArrowRight, X, Send } from "react-feather";

const Page = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #1e293b;
  font-family: "Inter", sans-serif;
  padding-bottom: 4rem;
  min-height: 100vh;
`;

/* Header with gradient matching PastCampaign */
const Header = styled.header`
  text-align: center;
  padding: 4rem 1rem 2.5rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 1rem;
    position: relative;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    position: relative;
    color: #cbd5e1;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  background: rgba(34, 197, 94, 0.9);
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  position: relative;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  color: #0f172a;
  font-weight: 800;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
  }
`;

// Updated CardGrid for smaller cards - 4 columns
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Smaller card dimensions
const Card = styled(motion.div)`
  background: #ffffff;
  padding: 1.8rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  border: 1px solid #f1f5f9;
  position: relative;
  overflow: hidden;
  height: fit-content;
  min-height: 320px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || "linear-gradient(90deg, #3b82f6, #8b5cf6)"};
  }

  svg {
    color: ${props => props.iconColor || "#3b82f6"};
    margin-bottom: 0.3rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #0f172a;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: #475569;
    line-height: 1.5;
  }

  span {
    font-weight: 600;
    color: #dc2626;
    font-size: 0.9rem;
    background: #fef2f2;
    padding: 0.3rem 0.7rem;
    border-radius: 6px;
    line-height: 1.4;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  }
`;

const LeadershipSection = styled(Section)`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  margin: 2rem auto;
  padding: 3rem 2rem;
`;

// Updated for smaller leadership cards
const LeadershipCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LeadershipCard = styled(Card)`
  text-align: center;
  align-items: center;
  padding: 2rem 1.5rem;
  min-height: 280px;
  
  svg {
    color: #dc2626;
    margin: 0 auto 0.8rem;
    background: #fef2f2;
    padding: 0.8rem;
    border-radius: 50%;
  }

  small {
    display: block;
    margin-top: 0.5rem;
    color: #6b7280;
    font-size: 0.85rem;
    background: #f8fafc;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    line-height: 1.4;
  }
`;

const StatsSection = styled(Section)`
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  border-radius: 16px;
  color: white;
  text-align: center;
  margin: 2rem auto;
  padding: 3rem 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const StatCard = styled.div`
  padding: 1.5rem 1rem;
  
  h3 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: #cbd5e1;
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

const ContactSection = styled(Section)`
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  border-radius: 16px;
  text-align: center;
  margin-top: 2rem;
  padding: 2.5rem 2rem;

  h2 {
    color: #1e3a8a;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
  }

  a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }
  }

  p {
    margin: 0.6rem 0;
    font-weight: 500;
    color: #374151;
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  margin-top: 1.2rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  
  &:hover {
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.6);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  color: #64748b;
  background: #f1f5f9;
  margin-top: 3rem;
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f1f5f9;
    color: #374151;
  }
`;

const FormTitle = styled.h2`
  color: #0f172a;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  ${props => props.error && `
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  `}
`;

const Select = styled.select`
  padding: 0.8rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  ${props => props.error && `
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  `}
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  ${props => props.error && `
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  `}
`;

const ErrorMessage = styled.span`
  color: #dc2626;
  font-size: 0.8rem;
  font-weight: 500;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
`;

const SuccessMessage = styled.div`
  background: #d1fae5;
  color: #065f46;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
  border: 1px solid #a7f3d0;
`;

const Internship = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    internshipType: "",
    education: "",
    skills: "",
    experience: "",
    motivation: "",
    portfolio: ""
  });

  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    internshipType: "",
    education: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear field-specific error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    // Phone number validation - only allow numbers and limit to 10 digits
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, '');
      const limitedNumbers = numbersOnly.slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: limitedNumbers }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters long";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address (e.g., example@email.com)";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
      isValid = false;
    }

    // Internship Type validation
    if (!formData.internshipType) {
      errors.internshipType = "Please select an internship type";
      isValid = false;
    }

    // Education validation
    if (!formData.education.trim()) {
      errors.education = "Education background is required";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  if (!validateForm()) {
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("http://localhost:8000/api/internship/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setSuccess("Thank you for your internship application! We will review your application and contact you soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        internshipType: "",
        education: "",
        skills: "",
        experience: "",
        motivation: "",
        portfolio: ""
      });
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
        setSuccess("");
      }, 3000);
      
    } else {
      const errorData = await response.json();
      setError(errorData.detail || "Failed to submit application. Please try again.");
    }
  } catch (err) {
    setError("Network error. Please check your connection and try again.");
    console.error("Error submitting internship application:", err);
  } finally {
    setLoading(false);
  }
};

  const handleOpenModal = () => {
    setShowModal(true);
    setError("");
    setSuccess("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError("");
    setSuccess("");
    setFieldErrors({
      fullName: "",
      email: "",
      phone: "",
      internshipType: "",
      education: ""
    });
  };

  const internships = [
    {
      title: "Technical Internship (3 Months)",
      description: "Gain hands-on experience in web development, data analysis, and technical project management. Work on real-world projects with mentorship.",
      extra: "Verified Certificate • Project Portfolio • LinkedIn Recommendation",
      icon: <Award size={24} />,
      gradient: "linear-gradient(90deg, #3b82f6, #60a5fa)",
      iconColor: "#3b82f6"
    },
    {
      title: "Functional Internship (3 Months)",
      description: "Develop skills in marketing, content creation, event management, and community outreach. Perfect for NGO operations and social impact.",
      extra: "Verified Certificate • Skill Development • Networking Opportunities",
      icon: <Briefcase size={24} />,
      gradient: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
      iconColor: "#8b5cf6"
    },
    {
      title: "Technical Internship (6 Months)",
      description: "Deep dive into technical roles with extended projects. Ideal for students seeking comprehensive experience and long-term engagement.",
      extra: "Certificate + Contribution Report • Performance-based Stipend • Leadership Opportunities",
      icon: <Calendar size={24} />,
      gradient: "linear-gradient(90deg, #059669, #10b981)",
      iconColor: "#059669"
    },
    {
      title: "Functional Internship (6 Months)",
      description: "Extended functional internship with greater responsibility. Work on strategic initiatives and develop specialized domain skills.",
      extra: "Certificate + Contribution Report • Performance-based Stipend • Specialized Training",
      icon: <Calendar size={24} />,
      gradient: "linear-gradient(90deg, #dc2626, #ef4444)",
      iconColor: "#dc2626"
    },
  ];

  const leadership = [
    {
      title: "Technical Leadership Program",
      subtitle: "Technical Core Team",
      eligibility: "6 months proactive involvement • Leadership potential • Technical proficiency",
      icon: <Star size={24} />,
    },
    {
      title: "Functional Leadership Program",
      subtitle: "Functional Core Team",
      eligibility: "6 months proactive involvement • Initiative • Team management skills",
      icon: <Target size={24} />,
    },
  ];

  const infoCards = [
    {
      title: "Professional Development",
      description: "Gain valuable experience, build your portfolio, and develop both technical and soft skills that employers value.",
      icon: <Users size={24} />,
      gradient: "linear-gradient(90deg, #3b82f6, #60a5fa)"
    },
    {
      title: "Certificate Recognition",
      description: "All certificates are verified with unique ID numbers and recognized by educational institutions and corporate partners.",
      icon: <Award size={24} />,
      gradient: "linear-gradient(90deg, #8b5cf6, #a78bfa)"
    },
    {
      title: "Social Impact",
      description: "Contribute to meaningful projects that create positive change in communities while building your professional profile.",
      icon: <Heart size={24} />,
      gradient: "linear-gradient(90deg, #dc2626, #ef4444)"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals, mentors, and like-minded peers passionate about technology and social change.",
      icon: <Globe size={24} />,
      gradient: "linear-gradient(90deg, #059669, #10b981)"
    },
  ];

  const stats = [
    { number: "500+", label: "Interns Trained" },
    { number: "85%", label: "Completion Rate" },
    { number: "40%", label: "Receive Stipends" },
    { number: "60%", label: "Leadership Opportunities" },
  ];

  return (
    <Page>
      <Header>
        <Badge>
          <CheckCircle size={16} />
          Verified Internship Programs
        </Badge>
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}>
          Internship Programs
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Launch your career with hands-on experience in technical and functional roles. 
          Join our mission-driven team and create impact while building your professional portfolio.
        </motion.p>
      </Header>

      <Section>
        <SectionTitle>Internship Opportunities</SectionTitle>
        <CardGrid>
          {internships.map((item, index) => (
            <Card
              key={index}
              gradient={item.gradient}
              iconColor={item.iconColor}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.extra}</span>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <StatsSection>
        <SectionTitle style={{color: 'white'}}>Our Impact</SectionTitle>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      <LeadershipSection>
        <SectionTitle>Leadership Programs</SectionTitle>
        <LeadershipCards>
          {leadership.map((prog, index) => (
            <LeadershipCard
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {prog.icon}
              <h3>{prog.title}</h3>
              <p>{prog.subtitle}</p>
              <small>{prog.eligibility}</small>
            </LeadershipCard>
          ))}
        </LeadershipCards>
      </LeadershipSection>

      <Section>
        <SectionTitle>Why Join Our Internship Program?</SectionTitle>
        <CardGrid>
          {infoCards.map((item, index) => (
            <Card
              key={index}
              gradient={item.gradient}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <ContactSection>
        <h2>Ready to Get Started?</h2>
        <p>
          Send your resume to{" "}
          <a href="mailto:help@ankitawellbeingfoundation.org">help@ankitawellbeingfoundation.org</a>
        </p>
        <p>
          <MapPin size={16} style={{display: 'inline', marginRight: '5px'}} />
          703-A, Rudra Sangam Apartment, Sarai Inayat, GT Road near Prayag Dhaba,
          Prayagraj – 211019, U.P., India
        </p>
        <p>Mobile: (+91) 7905226299</p>
        
        <CTAButton
          onClick={handleOpenModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now <ArrowRight size={16} />
        </CTAButton>
      </ContactSection>

      {/* Application Modal */}
      {showModal && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleCloseModal}>
              <X size={20} />
            </CloseButton>

            <FormTitle>Internship Application</FormTitle>

            {success && (
              <SuccessMessage>
                <CheckCircle size={20} style={{ marginRight: '0.5rem' }} />
                {success}
              </SuccessMessage>
            )}

            {error && (
              <div style={{ 
                background: '#fef2f2', 
                color: '#dc2626', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem',
                border: '1px solid #fecaca'
              }}>
                {error}
              </div>
            )}

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Full Name *</Label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  error={fieldErrors.fullName}
                  disabled={loading}
                />
                {fieldErrors.fullName && <ErrorMessage>{fieldErrors.fullName}</ErrorMessage>}
              </FormGroup>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    error={fieldErrors.email}
                    disabled={loading}
                  />
                  {fieldErrors.email && <ErrorMessage>{fieldErrors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Phone *</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    maxLength={10}
                    error={fieldErrors.phone}
                    disabled={loading}
                  />
                  {fieldErrors.phone ? (
                    <ErrorMessage>{fieldErrors.phone}</ErrorMessage>
                  ) : (
                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {formData.phone.length}/10 digits
                    </div>
                  )}
                </FormGroup>
              </div>

              <FormGroup>
                <Label>Internship Type *</Label>
                <Select
                  name="internshipType"
                  value={formData.internshipType}
                  onChange={handleChange}
                  error={fieldErrors.internshipType}
                  disabled={loading}
                >
                  <option value="">Select internship type</option>
                  <option value="Technical Internship (3 Months)">Technical Internship (3 Months)</option>
                  <option value="Functional Internship (3 Months)">Functional Internship (3 Months)</option>
                  <option value="Technical Internship (6 Months)">Technical Internship (6 Months)</option>
                  <option value="Functional Internship (6 Months)">Functional Internship (6 Months)</option>
                </Select>
                {fieldErrors.internshipType && <ErrorMessage>{fieldErrors.internshipType}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>Education Background *</Label>
                <Input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder="e.g., B.Tech Computer Science, MBA Marketing, etc."
                  error={fieldErrors.education}
                  disabled={loading}
                />
                {fieldErrors.education && <ErrorMessage>{fieldErrors.education}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>Skills & Technologies</Label>
                <Input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., React, Python, Digital Marketing, Content Writing"
                  disabled={loading}
                />
              </FormGroup>

              <FormGroup>
                <Label>Previous Experience (if any)</Label>
                <TextArea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Describe your previous work experience, projects, or internships"
                  disabled={loading}
                />
              </FormGroup>

              <FormGroup>
                <Label>Why do you want to join this internship? *</Label>
                <TextArea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Share your motivation and what you hope to achieve"
                  disabled={loading}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Portfolio/LinkedIn/GitHub (Optional)</Label>
                <Input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://"
                  disabled={loading}
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <>
                    <div style={{ 
                      width: '16px', 
                      height: '16px', 
                      border: '2px solid transparent', 
                      borderTop: '2px solid white', 
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Application
                  </>
                )}
              </SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Page>
  );
};

export default Internship;