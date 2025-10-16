import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Award, TrendingUp, Globe, Search, Filter, ChevronRight, CheckCircle, Calendar, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const navigate = useNavigate();

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'program', label: 'Program Management' },
    { id: 'research', label: 'Research & Development' },
    { id: 'field', label: 'Field Operations' },
    { id: 'communications', label: 'Communications' },
    { id: 'hr', label: 'Human Resources' },
    { id: 'finance', label: 'Finance & Administration' }
  ];

  const jobTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'full-time', label: 'Full-Time' },
    { id: 'contract', label: 'Contract' },
    { id: 'internship', label: 'Internship' },
    { id: 'volunteer', label: 'Volunteer' }
  ];

  const locations = [
    { id: 'all', label: 'All Locations' },
    { id: 'delhi', label: 'New Delhi' },
    { id: 'mumbai', label: 'Mumbai' },
    { id: 'bangalore', label: 'Bangalore' },
    { id: 'lucknow', label: 'Lucknow' },
    { id: 'field', label: 'Field Locations' },
    { id: 'remote', label: 'Remote' }
  ];

  const [jobListings] = useState([
    {
      id: 1,
      title: 'Senior Program Manager - Child Education',
      department: 'program',
      type: 'full-time',
      location: 'New Delhi',
      locationId: 'delhi',
      salary: '₹8-12 LPA',
      experience: '5-7 years',
      postedDate: '2 days ago',
      deadline: 'March 30, 2025',
      description: 'Lead and manage educational programs for underprivileged children across multiple districts. Develop program strategies, monitor implementation, and ensure quality outcomes.',
      responsibilities: [
        'Design and implement educational intervention programs',
        'Manage team of 15+ field coordinators',
        'Develop partnerships with schools and local authorities',
        'Monitor program budgets and ensure effective resource utilization',
        'Prepare reports and documentation for stakeholders'
      ],
      requirements: [
        'Master\'s degree in Education, Social Work, or Development Studies',
        '5+ years in program management in education/development sector',
        'Strong leadership and team management skills',
        'Excellent written and verbal communication',
        'Experience with donor reporting and compliance'
      ],
      benefits: ['Health Insurance', 'Professional Development', 'Travel Allowance', 'Performance Bonus'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Research Associate - Women Empowerment',
      department: 'research',
      type: 'full-time',
      location: 'Bangalore',
      locationId: 'bangalore',
      salary: '₹5-7 LPA',
      experience: '3-5 years',
      postedDate: '5 days ago',
      deadline: 'April 5, 2025',
      description: 'Conduct research and impact assessment studies on women empowerment programs. Design research methodologies, collect and analyze data, and publish findings.',
      responsibilities: [
        'Design and conduct research studies on gender and development',
        'Develop data collection tools and methodologies',
        'Analyze quantitative and qualitative data',
        'Prepare research reports and academic publications',
        'Present findings to stakeholders and partners'
      ],
      requirements: [
        'Master\'s or PhD in Gender Studies, Sociology, or related field',
        '3+ years of research experience in development sector',
        'Proficiency in statistical software (SPSS, STATA, R)',
        'Strong analytical and writing skills',
        'Published research work preferred'
      ],
      benefits: ['Health Insurance', 'Research Budget', 'Conference Travel', 'Publication Support'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Field Coordinator - Community Development',
      department: 'field',
      type: 'full-time',
      location: 'Lucknow (Rural Districts)',
      locationId: 'lucknow',
      salary: '₹3.5-5 LPA',
      experience: '2-4 years',
      postedDate: '1 week ago',
      deadline: 'March 28, 2025',
      description: 'Coordinate and implement community development programs in rural areas. Work directly with communities to identify needs, mobilize resources, and facilitate development initiatives.',
      responsibilities: [
        'Implement community development projects in assigned villages',
        'Build relationships with community leaders and local government',
        'Organize community meetings and awareness campaigns',
        'Monitor program activities and collect field data',
        'Train and supervise community volunteers'
      ],
      requirements: [
        'Bachelor\'s degree in Social Work, Rural Development, or related field',
        '2+ years of grassroots field experience',
        'Fluency in Hindi and local languages',
        'Strong interpersonal and community mobilization skills',
        'Willingness to travel extensively and work in rural areas'
      ],
      benefits: ['Health Insurance', 'Travel Allowance', 'Mobile Allowance', 'Accommodation Support'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'Communications Officer',
      department: 'communications',
      type: 'full-time',
      location: 'Mumbai',
      locationId: 'mumbai',
      salary: '₹4-6 LPA',
      experience: '2-4 years',
      postedDate: '3 days ago',
      deadline: 'April 10, 2025',
      description: 'Develop and execute communication strategies to amplify our impact stories. Manage social media, create content, and coordinate with media for advocacy campaigns.',
      responsibilities: [
        'Develop communication strategies and content calendar',
        'Manage social media platforms and website content',
        'Create compelling stories, blogs, and newsletters',
        'Coordinate with media for press releases and coverage',
        'Design advocacy and awareness campaign materials'
      ],
      requirements: [
        'Bachelor\'s degree in Communications, Journalism, or Mass Media',
        '3+ years in communications/content creation role',
        'Excellent writing and editing skills in English and Hindi',
        'Experience with social media management and analytics',
        'Graphic design skills (Canva, Adobe Suite) preferred'
      ],
      benefits: ['Health Insurance', 'Creative Freedom', 'Flexible Hours', 'Professional Development'],
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Finance & Compliance Manager',
      department: 'finance',
      type: 'full-time',
      location: 'New Delhi',
      locationId: 'delhi',
      salary: '₹7-10 LPA',
      experience: '5-8 years',
      postedDate: '4 days ago',
      deadline: 'April 2, 2025',
      description: 'Oversee financial operations, budgeting, and compliance for all programs. Ensure adherence to donor requirements, audit standards, and regulatory frameworks.',
      responsibilities: [
        'Manage organizational budgets and financial planning',
        'Ensure compliance with donor regulations and statutory requirements',
        'Prepare financial reports for management and donors',
        'Coordinate annual audits and tax filings',
        'Develop and implement financial policies and procedures'
      ],
      requirements: [
        'CA/ICWA or MBA in Finance',
        '5+ years in NGO finance and compliance management',
        'Strong knowledge of FCRA, Income Tax, and donor compliance',
        'Experience with accounting software and ERP systems',
        'Excellent analytical and reporting skills'
      ],
      benefits: ['Health Insurance', 'Professional Certification Support', 'Performance Bonus', 'Retirement Benefits'],
      color: 'from-indigo-400 to-blue-500'
    },
    {
      id: 6,
      title: 'Monitoring & Evaluation Specialist',
      department: 'program',
      type: 'contract',
      location: 'Remote',
      locationId: 'remote',
      salary: '₹6-8 LPA',
      experience: '4-6 years',
      postedDate: '1 week ago',
      deadline: 'March 25, 2025',
      description: 'Design and implement M&E frameworks for all programs. Track indicators, conduct assessments, and provide data-driven insights for program improvement.',
      responsibilities: [
        'Develop M&E frameworks and logical frameworks',
        'Design data collection tools and databases',
        'Conduct baseline, midline, and endline assessments',
        'Analyze program data and prepare impact reports',
        'Train field teams on data collection and quality assurance'
      ],
      requirements: [
        'Master\'s degree in Statistics, Development Studies, or related field',
        '4+ years in M&E in development sector',
        'Expertise in quantitative and qualitative methods',
        'Proficiency in data analysis software',
        'Experience with donor M&E requirements'
      ],
      benefits: ['Flexible Work', 'Health Insurance', 'Performance Incentives', 'Learning Opportunities'],
      color: 'from-teal-400 to-cyan-500'
    },
    {
      id: 7,
      title: 'Social Work Intern - Child Protection',
      department: 'field',
      type: 'internship',
      location: 'Delhi/Mumbai/Bangalore',
      locationId: 'delhi',
      salary: '₹15,000/month stipend',
      experience: 'Fresh graduates',
      postedDate: '2 days ago',
      deadline: 'April 15, 2025',
      description: 'Gain hands-on experience in child protection programs. Assist in case management, community outreach, and awareness activities under supervision.',
      responsibilities: [
        'Support field team in child protection activities',
        'Assist in case documentation and follow-ups',
        'Participate in community awareness sessions',
        'Help organize children\'s activities and workshops',
        'Learn and apply child safeguarding protocols'
      ],
      requirements: [
        'Bachelor\'s or Master\'s in Social Work (ongoing or completed)',
        'Passion for child welfare and protection',
        'Good communication and interpersonal skills',
        'Basic computer skills',
        'Commitment for 6-month internship period'
      ],
      benefits: ['Stipend', 'Certificate', 'Mentorship', 'Learning Experience', 'Letter of Recommendation'],
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 8,
      title: 'Human Resources Manager',
      department: 'hr',
      type: 'full-time',
      location: 'New Delhi',
      locationId: 'delhi',
      salary: '₹6-9 LPA',
      experience: '5-7 years',
      postedDate: '6 days ago',
      deadline: 'March 31, 2025',
      description: 'Lead all HR functions including recruitment, performance management, employee engagement, and organizational development for 200+ team members.',
      responsibilities: [
        'Manage end-to-end recruitment processes',
        'Develop and implement HR policies and procedures',
        'Coordinate performance management and appraisal systems',
        'Design employee engagement and welfare programs',
        'Handle employee relations and grievance management'
      ],
      requirements: [
        'Master\'s degree in HR/Personnel Management or MBA-HR',
        '5+ years in HR management, preferably in NGO sector',
        'Strong knowledge of labor laws and compliance',
        'Experience with HRIS and payroll management',
        'Excellent interpersonal and conflict resolution skills'
      ],
      benefits: ['Health Insurance', 'Professional Development', 'Work-Life Balance', 'Performance Bonus'],
      color: 'from-rose-400 to-pink-500'
    }
  ]);

  const stats = [
    { label: 'Team Members', value: '200+', icon: Users },
    { label: 'Open Positions', value: '15', icon: Briefcase },
    { label: 'Office Locations', value: '8', icon: MapPin },
    { label: 'Employee Satisfaction', value: '92%', icon: Heart }
  ];

  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance for you and family' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Professional development and learning opportunities' },
    { icon: Award, title: 'Recognition', description: 'Performance-based rewards and appreciation' },
    { icon: Globe, title: 'Work-Life Balance', description: 'Flexible hours and supportive work culture' }
  ];

  const values = [
    { title: 'Impact-Driven', description: 'Every role contributes to meaningful social change' },
    { title: 'Inclusive Culture', description: 'Diversity and equal opportunity for all' },
    { title: 'Collaborative', description: 'Work with passionate, talented professionals' },
    { title: 'Innovation', description: 'Encouraged to bring creative solutions' }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || job.locationId === selectedLocation;
    return matchesSearch && matchesDepartment && matchesType && matchesLocation;
  });

  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    alert(`Application form for:\n${job.title}\n\nIn production, this would open an application form or redirect to an application portal.`);
  };

  const viewJobDetails = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContact = () => {
    navigate('/get-in-touch');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-600 rounded-full text-sm font-bold">
            <Briefcase className="w-5 h-5" />
            Join Our Mission
          </div>
          <h1 className="text-5xl font-bold mb-4">Careers at Our NGO</h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            Join a passionate team dedicated to creating lasting impact in the lives of children, women, and communities across India. Make your career meaningful.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              View Open Positions
            </button>
            <button onClick={()=>navigate('/our-story')} className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
              Life at NGO
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-center">
                <Icon className="h-12 w-12 text-blue-900 mx-auto mb-3" />
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of an organization that values your growth and contribution to social change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div id="openings" className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
          <p className="text-lg text-gray-600">Find your next meaningful career opportunity</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                {jobTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          Showing {filteredJobs.length} of {jobListings.length} positions
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        {departments.find(d => d.id === job.department)?.label}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        {jobTypes.find(t => t.id === job.type)?.label}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-900" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4 text-blue-900" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="w-4 h-4 text-blue-900" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-blue-900" />
                    <span>{job.postedDate}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <button
                    onClick={() => viewJobDetails(job)}
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleApply(job)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg">
            <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Positions Found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`bg-gradient-to-r ${selectedJob.color} p-8 text-white`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                      {departments.find(d => d.id === selectedJob.department)?.label}
                    </span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
                      {jobTypes.find(t => t.id === selectedJob.type)?.label}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div>
                  <p className="text-sm opacity-80">Location</p>
                  <p className="font-semibold">{selectedJob.location}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Salary</p>
                  <p className="font-semibold">{selectedJob.salary}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Experience</p>
                  <p className="font-semibold">{selectedJob.experience}</p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Deadline</p>
                  <p className="font-semibold">{selectedJob.deadline}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">About the Role</h3>
                <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm font-semibold">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleApply(selectedJob)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  Apply for this Position
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-16 mb-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-gray-300 text-lg mb-8">
            We're always looking for talented and passionate individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openContact} className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
              Contact HR Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}