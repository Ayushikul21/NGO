import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Download, ExternalLink, ChevronRight, FileText, BarChart3, Users, Award, Calendar, Tag, CheckCircle, Globe } from 'lucide-react';

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const learnMore = () => {
    navigate('/learn-more');
  };

  const [publications, setPublications] = useState([
    {
      id: 1,
      title: 'Annual Report 2024: Impact and Achievements',
      category: 'reports',
      description: 'Comprehensive overview of our programs, beneficiaries, and impact across all regions.',
      date: 'January 2025',
      author: 'Research Team',
      downloads: 1240,
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      highlights: ['1000+ Beneficiaries', '50+ Programs', '95% Success Rate']
    },
    {
      id: 2,
      title: 'Children Education Initiative: Baseline Study',
      category: 'research',
      description: 'Research on educational outcomes and access barriers in rural communities.',
      date: 'December 2024',
      author: 'Education Department',
      downloads: 892,
      icon: BarChart3,
      color: 'from-green-400 to-emerald-500',
      highlights: ['10,000 Children', '500 Schools', '85% Enrollment']
    },
    {
      id: 3,
      title: 'Women Empowerment Through Skills Training',
      category: 'case-studies',
      description: 'Case studies highlighting success stories of women entrepreneurs.',
      date: 'November 2024',
      author: 'Women Welfare Division',
      downloads: 1567,
      icon: Users,
      color: 'from-purple-400 to-pink-500',
      highlights: ['5000+ Women', '200+ Entrepreneurs', '₹50L Generated']
    },
    {
      id: 4,
      title: 'Health and Nutrition Program Report',
      category: 'reports',
      description: 'Detailed analysis of health initiatives and nutrition outcomes.',
      date: 'October 2024',
      author: 'Health Department',
      downloads: 945,
      icon: Award,
      color: 'from-red-400 to-orange-500',
      highlights: ['15,000 Served', '2M Meals', '70% Health Improvement']
    },
    {
      id: 5,
      title: 'Impact Assessment: Community Development',
      category: 'research',
      description: 'Evaluation of sustainable development initiatives in partner communities.',
      date: 'September 2024',
      author: 'Development Team',
      downloads: 756,
      icon: BarChart3,
      color: 'from-yellow-400 to-amber-500',
      highlights: ['50+ Villages', '35,000 Villagers', '90% Infrastructure']
    },
    {
      id: 6,
      title: 'Policy Brief: Education Access for Marginalized Groups',
      category: 'policy',
      description: 'Recommendations for improving educational equity and access.',
      date: 'August 2024',
      author: 'Policy Unit',
      downloads: 2103,
      icon: FileText,
      color: 'from-indigo-400 to-blue-500',
      highlights: ['8 States', '120 Schools', '5000 Girls']
    },
    {
      id: 7,
      title: 'Micro-Finance Success Stories',
      category: 'case-studies',
      description: 'Inspiring stories of financial independence through our programs.',
      date: 'July 2024',
      author: 'Finance Division',
      downloads: 1834,
      icon: Users,
      color: 'from-teal-400 to-cyan-500',
      highlights: ['3500+ Families', '₹10Cr Disbursed', '60% Growth']
    },
    {
      id: 8,
      title: 'Mental Health Support Program Findings',
      category: 'research',
      description: 'Research on mental health awareness and support mechanisms.',
      date: 'June 2024',
      author: 'Wellness Team',
      downloads: 1456,
      icon: Award,
      color: 'from-pink-400 to-rose-500',
      highlights: ['8000+ Counseled', '500+ Awareness', '80% Support']
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'reports', label: 'Reports' },
    { id: 'research', label: 'Research' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'policy', label: 'Policy Briefs' }
  ];

  const stats = [
    { label: 'Total Publications', value: '48', icon: FileText },
    { label: 'Total Downloads', value: '12.5K', icon: Download },
    { label: 'Research Papers', value: '23', icon: BarChart3 },
    { label: 'Case Studies', value: '15', icon: Users }
  ];

  // Function to create a simple text file with publication details
  const createPublicationSummary = (publication) => {
    return `
PUBLICATION SUMMARY
===================

Title: ${publication.title}
Category: ${publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}
Publication Date: ${publication.date}
Author: ${publication.author}
Total Downloads: ${publication.downloads + 1}

DESCRIPTION
-----------
${publication.description}

KEY HIGHLIGHTS
--------------
${publication.highlights.map((highlight, index) => `${index + 1}. ${highlight}`).join('\n')}

---
This is a summary of the publication. 
In a production environment, this would be the actual PDF document.

Generated on: ${new Date().toLocaleDateString()}
Publications Portal - Demo Version
    `.trim();
  };

  // Function to handle download - using text files instead of fake PDFs
  const handleDownload = async (publication) => {
    try {
      // Update download count
      setPublications(prevPublications => 
        prevPublications.map(pub => 
          pub.id === publication.id 
            ? { ...pub, downloads: pub.downloads + 1 }
            : pub
        )
      );

      // Create text content
      const fileContent = createPublicationSummary(publication);
      
      // Create and download as .txt file (honest approach)
      const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = url;
      link.download = `${publication.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_summary.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      setTimeout(() => URL.revokeObjectURL(url), 100);

    } catch (error) {
      console.error('Error downloading publication:', error);
      // Fallback: Show content in new window
      handleView(publication);
    }
  };

  // Function to handle view - shows detailed preview
  const handleView = (publication) => {
    const newWindow = window.open();
    if (!newWindow) {
      alert('Please allow popups to view publications');
      return;
    }

    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${publication.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
          }
          .publication-container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .publication-header {
            background: linear-gradient(135deg, #1e40af, #0369a1);
            color: white;
            padding: 40px;
            text-align: center;
          }
          .publication-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .publication-meta {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
            flex-wrap: wrap;
          }
          .meta-item {
            background: rgba(255,255,255,0.2);
            padding: 10px 20px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
          }
          .publication-content {
            padding: 40px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 1.5rem;
            color: #1e40af;
            margin-bottom: 15px;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 5px;
          }
          .description {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #4b5563;
          }
          .highlights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 15px;
          }
          .highlight-card {
            background: #f0f9ff;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #1e40af;
          }
          .demo-notice {
            background: #fffbeb;
            border: 1px solid #f59e0b;
            border-radius: 10px;
            padding: 20px;
            margin-top: 30px;
            text-align: center;
          }
          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
          }
          .stat-card {
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #e2e8f0;
          }
          .stat-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e40af;
          }
          .stat-label {
            color: #64748b;
            font-size: 0.9rem;
          }
          @media (max-width: 768px) {
            .publication-title { font-size: 2rem; }
            .publication-header { padding: 30px 20px; }
            .publication-content { padding: 30px 20px; }
          }
        </style>
      </head>
      <body>
        <div class="publication-container">
          <div class="publication-header">
            <h1 class="publication-title">${publication.title}</h1>
            <p class="description" style="color: rgba(255,255,255,0.9); margin-top: 10px;">${publication.description}</p>
            <div class="publication-meta">
              <div class="meta-item">
                <strong>Published:</strong> ${publication.date}
              </div>
              <div class="meta-item">
                <strong>Author:</strong> ${publication.author}
              </div>
              <div class="meta-item">
                <strong>Category:</strong> ${publication.category.toUpperCase()}
              </div>
            </div>
          </div>
          
          <div class="publication-content">
            <div class="section">
              <h2 class="section-title">Key Highlights</h2>
              <div class="highlights-grid">
                ${publication.highlights.map(highlight => `
                  <div class="highlight-card">
                    <div class="stat-value">${highlight.split(' ')[0]}</div>
                    <div class="stat-label">${highlight.split(' ').slice(1).join(' ')}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">Publication Statistics</h2>
              <div class="stats">
                <div class="stat-card">
                  <div class="stat-value">${publication.downloads + 1}</div>
                  <div class="stat-label">Total Downloads</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}</div>
                  <div class="stat-label">Document Type</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value">${publication.date.split(' ')[0]}</div>
                  <div class="stat-label">Publication Month</div>
                </div>
              </div>
            </div>
            
            <div class="demo-notice">
              <h3>📚 Demo Publication</h3>
              <p>This is a preview of the publication content. In a production environment, this would display the actual PDF document or full publication content.</p>
              <p><small>Generated on ${new Date().toLocaleDateString()}</small></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    newWindow.document.close();
  };

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate total downloads for stats
  const totalDownloads = publications.reduce((sum, pub) => sum + pub.downloads, 0);
  const formattedTotalDownloads = totalDownloads > 1000 
    ? `${(totalDownloads / 1000).toFixed(1)}K` 
    : totalDownloads.toString();

  return (
    <div className="min-h-screen bg-gray-50 mb-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-600 rounded-full text-sm font-bold">
            <Award className="w-5 h-5" />
            Knowledge & Impact
          </div>
          <h1 className="text-5xl font-bold mb-4">Publications & Research</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Discover our comprehensive collection of reports, research findings, and impact stories from our work with children, women, and communities across India.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const value = stat.label === 'Total Downloads' ? formattedTotalDownloads : stat.value;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-3">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900">{value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPublications.length > 0 ? (
            filteredPublications.map(pub => {
              const Icon = pub.icon;
              return (
                <div key={pub.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${pub.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 text-xs bg-white bg-opacity-20 rounded-full font-bold">
                        {pub.category.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{pub.title}</h3>
                    <p className="text-sm text-gray-100">{pub.description}</p>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {pub.highlights.map((highlight, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-lg p-2 text-center">
                          <p className="text-xs font-semibold text-blue-900">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-2 gap-3 text-sm mb-4 text-gray-600 border-t border-b border-gray-200 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-900" />
                        <span>{pub.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-blue-900" />
                        <span>{pub.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-blue-900" />
                        <span>{pub.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Published</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <button 
                        onClick={() => handleDownload(pub)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Summary
                      </button>
                      <button 
                        onClick={() => handleView(pub)}
                        className="flex-1 border border-blue-600 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-16">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Transparency Through Knowledge</h2>
          <p className="text-gray-300 text-lg mb-8">
            We believe in sharing our insights, research, and impact stories. Our publications document our journey in creating meaningful change for children, women, and communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={learnMore} className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition inline-flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
