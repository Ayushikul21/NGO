import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState('contacts');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // New states for enhanced functionality
  const [sortConfig, setSortConfig] = useState({ key: 'created_at', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [notes, setNotes] = useState("");

  const [stats, setStats] = useState({
    totalContacts: 0,
    todayContacts: 0,
    pendingContacts: 0,
    totalVolunteers: 0,
    todayVolunteers: 0,
    pendingVolunteers: 0,
    totalInternships: 0,
    todayInternships: 0,
    pendingInternships: 0
  });

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchAllData(token);
  }, [navigate]);

  const fetchAllData = async (token) => {
    setLoading(true);
    try {
      await Promise.all([
        fetchContacts(token),
        fetchVolunteers(token),
        fetchInternships(token),
        fetchDashboardStats(token)
      ]);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboardStats = async (token) => {
    try {
      const response = await fetch(`http://localhost:8000/api/dashboard/stats?token=${token}`);
      if (response.ok) {
        const data = await response.json();
        setStats({
          totalContacts: data.contacts.total,
          todayContacts: data.contacts.pending, // Using pending for today for demo
          pendingContacts: data.contacts.pending,
          totalVolunteers: data.volunteers.total,
          todayVolunteers: data.volunteers.pending,
          pendingVolunteers: data.volunteers.pending,
          totalInternships: data.internships.total,
          todayInternships: data.internships.pending,
          pendingInternships: data.internships.pending
        });
      }
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
    }
  };

  const fetchContacts = async (token, status = 'all') => {
    try {
      let url = `http://localhost:8000/api/contacts/?token=${token}`;
      if (status !== 'all') {
        url += `&status=${status}`;
      }

      const response = await fetch(url);
      if (response.status === 401) {
        handleLogout();
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }

      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  const fetchVolunteers = async (token, status = 'all') => {
    try {
      let url = `http://localhost:8000/api/volunteers/?token=${token}`;
      if (status !== 'all') {
        url += `&status=${status}`;
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setVolunteers(data);
      }
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    }
  };

  const fetchInternships = async (token, status = 'all') => {
    try {
      let url = `http://localhost:8000/api/internships/?token=${token}`;
      if (status !== 'all') {
        url += `&status=${status}`;
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setInternships(data);
      }
    } catch (err) {
      console.error("Error fetching internships:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const updateStatus = async (type, id, status, notes = "") => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:8000/api/${type}/${id}/status?token=${token}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, notes }),
      });

      if (response.ok) {
        // Refresh the data
        refreshData();
        setSelectedItem(null);
        setNotes("");
      } else {
        throw new Error(`Failed to update ${type} status`);
      }
    } catch (err) {
      setError(`Failed to update status`);
      console.error(`Error updating ${type} status:`, err);
    }
  };

  const deleteContact = async (contactId) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:8000/api/contacts/${contactId}?token=${token}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== contactId));
        setStats(prev => ({ 
          ...prev, 
          totalContacts: prev.totalContacts - 1,
          todayContacts: prev.todayContacts - 1
        }));
      } else {
        throw new Error("Failed to delete contact");
      }
    } catch (err) {
      setError("Failed to delete contact");
      console.error("Error deleting contact:", err);
    }
  };

  const deleteVolunteer = async (volunteerId) => {
    if (!window.confirm("Are you sure you want to delete this volunteer application?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:8000/api/volunteers/${volunteerId}?token=${token}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setVolunteers(volunteers.filter(volunteer => volunteer.id !== volunteerId));
        setStats(prev => ({ 
          ...prev, 
          totalVolunteers: prev.totalVolunteers - 1,
          todayVolunteers: prev.todayVolunteers - 1
        }));
      } else {
        throw new Error("Failed to delete volunteer application");
      }
    } catch (err) {
      setError("Failed to delete volunteer application");
      console.error("Error deleting volunteer:", err);
    }
  };

  const deleteInternship = async (internshipId) => {
    if (!window.confirm("Are you sure you want to delete this internship application?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`http://localhost:8000/api/internships/${internshipId}?token=${token}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setInternships(internships.filter(internship => internship.id !== internshipId));
        setStats(prev => ({ 
          ...prev, 
          totalInternships: prev.totalInternships - 1,
          todayInternships: prev.todayInternships - 1
        }));
      } else {
        throw new Error("Failed to delete internship application");
      }
    } catch (err) {
      setError("Failed to delete internship application");
      console.error("Error deleting internship:", err);
    }
  };

  const refreshData = () => {
    const token = localStorage.getItem("adminToken");
    setLoading(true);
    setError("");
    setCurrentPage(1);
    fetchAllData(token);
  };

  const handleSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
    const token = localStorage.getItem("adminToken");
    
    switch (activeTab) {
      case 'contacts':
        fetchContacts(token, status);
        break;
      case 'volunteers':
        fetchVolunteers(token, status);
        break;
      case 'internships':
        fetchInternships(token, status);
        break;
      default:
        break;
    }
  };

  const getCurrentData = () => {
    let data = [];
    switch (activeTab) {
      case 'contacts':
        data = contacts;
        break;
      case 'volunteers':
        data = volunteers;
        break;
      case 'internships':
        data = internships;
        break;
      default:
        data = [];
    }

    // Sort data
    const sortedData = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    // Paginate data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return sortedData.slice(indexOfFirstItem, indexOfLastItem);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTotalPages = () => {
    let totalItems = 0;
    switch (activeTab) {
      case 'contacts':
        totalItems = contacts.length;
        break;
      case 'volunteers':
        totalItems = volunteers.length;
        break;
      case 'internships':
        totalItems = internships.length;
        break;
      default:
        totalItems = 0;
    }
    return Math.ceil(totalItems / itemsPerPage);
  };

  const getStatusBadge = (status) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  const currentData = getCurrentData();
  const totalPages = getTotalPages();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AWF</span>
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeTab === 'contacts'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contacts
            <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {stats.totalContacts}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('volunteers')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeTab === 'volunteers'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Volunteers
            <span className="ml-auto bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              {stats.totalVolunteers}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('internships')}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeTab === 'internships'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Internships
            <span className="ml-auto bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
              {stats.totalInternships}
            </span>
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">A</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">Ankita Wellbeing Foundation</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage contact forms, volunteer and internship applications</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={refreshData}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {/* Contacts Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex space-x-4 text-xs">
                <span className="text-green-600">Today: {stats.todayContacts}</span>
                <span className="text-yellow-600">Pending: {stats.pendingContacts}</span>
              </div>
            </div>

            {/* Volunteers Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Volunteers</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalVolunteers}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex space-x-4 text-xs">
                <span className="text-green-600">Today: {stats.todayVolunteers}</span>
                <span className="text-yellow-600">Pending: {stats.pendingVolunteers}</span>
              </div>
            </div>

            {/* Internships Stats */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Internships</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalInternships}</p>
                </div>
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex space-x-4 text-xs">
                <span className="text-green-600">Today: {stats.todayInternships}</span>
                <span className="text-yellow-600">Pending: {stats.pendingInternships}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Quick Actions</p>
                  <p className="text-lg font-semibold text-gray-900">Manage Data</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={refreshData}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Refresh All Data
                </button>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700">{error}</span>
                </div>
                <button
                  onClick={() => setError("")}
                  className="text-red-400 hover:text-red-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-semibold text-gray-900 capitalize">
                  {activeTab} Management
                </h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  activeTab === 'contacts' ? 'bg-blue-100 text-blue-800' :
                  activeTab === 'volunteers' ? 'bg-purple-100 text-purple-800' :
                  'bg-indigo-100 text-indigo-800'
                }`}>
                  {currentData.length} items
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => handleStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>

                {/* Sort Options */}
                <select
                  value={`${sortConfig.key}-${sortConfig.direction}`}
                  onChange={(e) => {
                    const [key, direction] = e.target.value.split('-');
                    setSortConfig({ key, direction });
                  }}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="created_at-desc">Newest First</option>
                  <option value="created_at-asc">Oldest First</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Tables */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {/* Contacts Table */}
            {activeTab === 'contacts' && (
              <>
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Submissions</h3>
                  <p className="text-sm text-gray-600">Manage all contact form submissions</p>
                </div>

                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts yet</h3>
                    <p className="text-gray-500">Contact form submissions will appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentData.map((contact) => (
                          <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-blue-600 hover:text-blue-800">
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div 
                                className="text-sm text-gray-900 max-w-xs truncate cursor-help" 
                                title={contact.message}
                              >
                                {contact.message}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={getStatusBadge(contact.status)}>
                                {contact.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{formatDate(contact.created_at)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <button
                                onClick={() => setSelectedItem({ type: 'contacts', id: contact.id, currentStatus: contact.status })}
                                className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                              >
                                Update Status
                              </button>
                              <button
                                onClick={() => deleteContact(contact.id)}
                                className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {/* Volunteers Table */}
            {activeTab === 'volunteers' && (
              <>
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Volunteer Applications</h3>
                  <p className="text-sm text-gray-600">Manage all volunteer applications</p>
                </div>

                {volunteers.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No volunteer applications yet</h3>
                    <p className="text-gray-500">Volunteer applications will appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentData.map((volunteer) => (
                          <tr key={volunteer.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{volunteer.fullName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-blue-600 hover:text-blue-800">
                                <a href={`mailto:${volunteer.email}`}>{volunteer.email}</a>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{volunteer.phone}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                volunteer.volunteerType === 'Green Volunteer' ? 'bg-green-100 text-green-800' :
                                volunteer.volunteerType === 'Yellow Volunteer' ? 'bg-yellow-100 text-yellow-800' :
                                volunteer.volunteerType === 'Grey Volunteer' ? 'bg-gray-100 text-gray-800' :
                                'bg-white text-gray-800 border'
                              }`}>
                                {volunteer.volunteerType}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={getStatusBadge(volunteer.status)}>
                                {volunteer.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{formatDate(volunteer.created_at)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <button
                                onClick={() => setSelectedItem({ type: 'volunteers', id: volunteer.id, currentStatus: volunteer.status })}
                                className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                              >
                                Update Status
                              </button>
                              <button
                                onClick={() => deleteVolunteer(volunteer.id)}
                                className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {/* Internships Table */}
            {activeTab === 'internships' && (
              <>
                <div className="px-6 py-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Internship Applications</h3>
                  <p className="text-sm text-gray-600">Manage all internship applications</p>
                </div>

                {internships.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No internship applications yet</h3>
                    <p className="text-gray-500">Internship applications will appear here.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentData.map((internship) => (
                          <tr key={internship.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{internship.fullName}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-blue-600 hover:text-blue-800">
                                <a href={`mailto:${internship.email}`}>{internship.email}</a>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{internship.phone}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{internship.education}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{internship.fieldOfInterest}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={getStatusBadge(internship.status)}>
                                {internship.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{formatDate(internship.created_at)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                              <button
                                onClick={() => setSelectedItem({ type: 'internships', id: internship.id, currentStatus: internship.status })}
                                className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                              >
                                Update Status
                              </button>
                              <button
                                onClick={() => deleteInternship(internship.id)}
                                className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                    <span className="font-medium">
                      {Math.min(currentPage * itemsPerPage, currentData.length * currentPage)}
                    </span>{" "}
                    of <span className="font-medium">{currentData.length * totalPages}</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Update Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Update Status</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={selectedItem.currentStatus}
                    onChange={(e) => setSelectedItem(prev => ({ ...prev, currentStatus: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add any notes about this application..."
                  />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t bg-gray-50 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setNotes("");
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => updateStatus(selectedItem.type, selectedItem.id, selectedItem.currentStatus, notes)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}