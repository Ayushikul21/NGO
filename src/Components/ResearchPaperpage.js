import React, { useState } from 'react';
import { Search, Download, Calendar, Users, BookOpen, FileText, Award, ExternalLink, Globe } from 'lucide-react';

export default function ResearchPaperPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', label: 'All Research' },
    { id: 'child-development', label: 'Child Development' },
    { id: 'gender-studies', label: 'Gender & Women Studies' },
    { id: 'community', label: 'Community Development' },
    { id: 'policy', label: 'Policy & Advocacy' }
  ];

  const years = ['all', '2024', '2023', '2022'];

  const [researchPapers] = useState([
    {
      id: 1,
      title: 'Bridging the Educational Gap: A Longitudinal Study of Rural Primary Education in Northern India',
      authors: ['Dr. Anjali Sharma', 'Prof. Rajesh Kumar', 'Dr. Priya Malhotra'],
      institution: 'Institute of Social Research & Development',
      date: 'February 2024',
      category: 'child-development',
      year: '2024',
      abstract: 'This comprehensive longitudinal study examines the impact of targeted educational interventions in rural primary schools across 15 districts in Uttar Pradesh and Bihar. Over a period of three years (2022-2025), we tracked 8,500 students from grades 1-5 to assess improvements in literacy, numeracy, and cognitive development outcomes.',
      methodology: 'Mixed-methods approach combining quantitative assessment and qualitative interviews',
      sampleSize: '8,500 students across 150 schools',
      duration: '36 months',
      keyFindings: [
        'Literacy rates improved by 34% in intervention schools',
        'Student attendance increased from 67% to 89%',
        'Parent engagement in education rose by 52%',
        'Significant reduction in gender-based educational disparities'
      ],
      doi: '10.1234/isr.2024.001',
      citation: 'Sharma, A., Kumar, R., & Malhotra, P. (2024). Bridging the Educational Gap: A Longitudinal Study of Rural Primary Education in Northern India. Journal of Social Development Research, 45(2), 112-145.',
      pages: 34,
      downloads: 2847
    },
    {
      id: 2,
      title: 'Economic Empowerment Through Skill Development: A Case Study of Women Self-Help Groups',
      authors: ['Dr. Meera Patel', 'Dr. Sunita Rao'],
      institution: 'Centre for Women Studies',
      date: 'November 2023',
      category: 'gender-studies',
      year: '2023',
      abstract: 'This research investigates the socio-economic impact of skill development programs on women participants in Self-Help Groups (SHGs) across urban slums and rural villages in Maharashtra and Gujarat. The study analyzes income generation, financial independence, and social empowerment indicators among 3,200 women over 24 months.',
      methodology: 'Participatory action research with pre-post intervention analysis',
      sampleSize: '3,200 women from 180 SHGs',
      duration: '24 months',
      keyFindings: [
        'Average household income increased by ₹4,500 per month',
        '78% of participants achieved financial independence',
        'Significant improvement in household decision-making power',
        '45% of participants started micro-enterprises'
      ],
      doi: '10.1234/cws.2023.089',
      citation: 'Patel, M., & Rao, S. (2023). Economic Empowerment Through Skill Development: A Case Study of Women Self-Help Groups. Gender and Development Studies, 18(4), 67-95.',
      pages: 29,
      downloads: 3421
    },
    {
      id: 3,
      title: 'Community-Based Child Protection Mechanisms: Efficacy and Sustainability Assessment',
      authors: ['Dr. Vikram Singh', 'Dr. Kavita Desai', 'Dr. Amit Joshi'],
      institution: 'National Institute of Child Welfare',
      date: 'August 2023',
      category: 'child-development',
      year: '2023',
      abstract: 'An extensive evaluation of community-based child protection committees (CPCs) established across 85 villages in Madhya Pradesh and Rajasthan. This study assesses the effectiveness of local protection mechanisms in identifying, reporting, and addressing child abuse, exploitation, and neglect cases.',
      methodology: 'Quasi-experimental design with control group comparison',
      sampleSize: '85 villages (45 intervention, 40 control)',
      duration: '30 months',
      keyFindings: [
        'Child abuse reporting increased by 127% in intervention areas',
        'Response time to incidents reduced from 72 hours to 8 hours',
        '92% sustainability rate of CPCs after funding period',
        'Community awareness of child rights increased by 68%'
      ],
      doi: '10.1234/nicw.2023.045',
      citation: 'Singh, V., Desai, K., & Joshi, A. (2023). Community-Based Child Protection Mechanisms: Efficacy and Sustainability Assessment. Child Protection Quarterly, 31(3), 201-234.',
      pages: 42,
      downloads: 2156
    },
    {
      id: 4,
      title: 'Nutrition Security and Maternal Health: A Multi-State Analysis of Government Program Effectiveness',
      authors: ['Dr. Lakshmi Iyer', 'Dr. Ramesh Gupta'],
      institution: 'Public Health Research Foundation',
      date: 'June 2023',
      category: 'community',
      year: '2023',
      abstract: 'This multi-state study evaluates the implementation and outcomes of integrated nutrition and maternal health programs across Uttar Pradesh, Bihar, Jharkhand, and Odisha. Analyzing data from 12,000 beneficiary households, the research identifies critical gaps and best practices in service delivery.',
      methodology: 'Cross-sectional survey with comparative state analysis',
      sampleSize: '12,000 households across 4 states',
      duration: '18 months',
      keyFindings: [
        'Maternal anemia reduced by 31% in intervention districts',
        'Child malnutrition rates decreased from 42% to 28%',
        'Program awareness reached 84% of target population',
        'Service utilization improved with integrated delivery models'
      ],
      doi: '10.1234/phrf.2023.078',
      citation: 'Iyer, L., & Gupta, R. (2023). Nutrition Security and Maternal Health: A Multi-State Analysis of Government Program Effectiveness. Indian Journal of Public Health, 67(2), 145-178.',
      pages: 38,
      downloads: 4102
    },
    {
      id: 5,
      title: 'Policy Analysis: Implementation Challenges of the Right to Education Act in Remote Rural Areas',
      authors: ['Prof. Deepak Mehta', 'Dr. Nisha Verma'],
      institution: 'Institute for Policy Research',
      date: 'March 2023',
      category: 'policy',
      year: '2023',
      abstract: 'A critical policy analysis examining the implementation challenges and gaps in the Right to Education (RTE) Act across remote and tribal regions of six Indian states. The study identifies systemic barriers to universal education access and proposes evidence-based policy recommendations.',
      methodology: 'Policy document analysis, stakeholder interviews, and field observations',
      sampleSize: '200 schools across 6 states',
      duration: '20 months',
      keyFindings: [
        'Infrastructure deficit affects 67% of remote schools',
        'Teacher absenteeism averages 28% in surveyed areas',
        'Significant disparity in quality between urban and rural schools',
        'Community participation mechanisms remain underutilized'
      ],
      doi: '10.1234/ipr.2023.034',
      citation: 'Mehta, D., & Verma, N. (2023). Policy Analysis: Implementation Challenges of the Right to Education Act in Remote Rural Areas. Policy Studies Journal, 21(1), 89-118.',
      pages: 31,
      downloads: 1876
    },
    {
      id: 6,
      title: 'Gender-Based Violence Prevention: Community Intervention Program Outcomes',
      authors: ['Dr. Seema Khanna', 'Dr. Pooja Rani', 'Dr. Arun Kumar'],
      institution: 'Gender Studies Research Centre',
      date: 'December 2022',
      category: 'gender-studies',
      year: '2022',
      abstract: 'This study evaluates a comprehensive community-based intervention program designed to prevent gender-based violence through awareness campaigns, legal literacy, and support services across 60 villages in Haryana and Punjab. The research measures changes in attitudes, reporting behaviors, and support service utilization.',
      methodology: 'Pre-post intervention design with mixed-methods evaluation',
      sampleSize: '60 villages with 15,000 participants',
      duration: '36 months',
      keyFindings: [
        'Reported incidents increased by 156% (indicating improved reporting)',
        'Community attitudes toward GBV shifted positively by 43%',
        'Legal literacy among women improved by 71%',
        'Support service access increased from 12% to 58%'
      ],
      doi: '10.1234/gsrc.2022.067',
      citation: 'Khanna, S., Rani, P., & Kumar, A. (2022). Gender-Based Violence Prevention: Community Intervention Program Outcomes. Journal of Gender and Social Justice, 15(4), 234-267.',
      pages: 45,
      downloads: 3567
    }
  ]);

  const stats = [
    { label: 'Published Papers', value: '67', icon: FileText },
    { label: 'Research Projects', value: '24', icon: BookOpen },
    { label: 'Partner Institutions', value: '18', icon: Globe },
    { label: 'Total Citations', value: '1,200+', icon: Award }
  ];

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || paper.year === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const createPDFContent = (paper) => {
    return `
╔════════════════════════════════════════════════════════════════════════════╗
║                         RESEARCH PUBLICATION                                ║
╚════════════════════════════════════════════════════════════════════════════╝

${paper.title}

═══════════════════════════════════════════════════════════════════════════════

AUTHORS
${paper.authors.map((author, i) => `${i + 1}. ${author}`).join('\n')}

INSTITUTION
${paper.institution}

PUBLICATION DATE
${paper.date}

CATEGORY
${categories.find(c => c.id === paper.category)?.label}

DOI: ${paper.doi}

═══════════════════════════════════════════════════════════════════════════════

ABSTRACT

${paper.abstract}

═══════════════════════════════════════════════════════════════════════════════

RESEARCH METHODOLOGY

Approach: ${paper.methodology}
Sample Size: ${paper.sampleSize}
Study Duration: ${paper.duration}

═══════════════════════════════════════════════════════════════════════════════

KEY FINDINGS

${paper.keyFindings.map((finding, i) => `${i + 1}. ${finding}`).join('\n\n')}

═══════════════════════════════════════════════════════════════════════════════

CITATION

${paper.citation}

═══════════════════════════════════════════════════════════════════════════════

PUBLICATION DETAILS

Total Pages: ${paper.pages}
Downloads: ${paper.downloads.toLocaleString()}
Year: ${paper.year}

═══════════════════════════════════════════════════════════════════════════════

This is a summary document of the research paper. The complete paper with detailed 
methodology, data analysis, results, discussion, and references is available in 
the full PDF version.

For the complete research paper, please contact our research team or visit our
institutional repository.

───────────────────────────────────────────────────────────────────────────────
Generated on: ${new Date().toLocaleString()}
Research Publications Portal
───────────────────────────────────────────────────────────────────────────────
    `.trim();
  };

  const handleDownload = (paper) => {
    const content = createPDFContent(paper);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const filename = paper.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .substring(0, 50);
    
    link.href = url;
    link.download = `${filename}_research_paper.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleViewDetails = (paper) => {
    const newWindow = window.open('', '_blank');
    if (!newWindow) {
      alert('Please allow popups to view research details');
      return;
    }

    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${paper.title}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Georgia', 'Times New Roman', serif;
            line-height: 1.8;
            color: #1a1a1a;
            background: #f5f5f5;
            padding: 20px;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 40px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
            color: white;
            padding: 50px 40px;
            text-align: center;
          }
          .category-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }
          .title {
            font-size: 32px;
            font-weight: bold;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .authors {
            font-size: 16px;
            color: rgba(255,255,255,0.9);
            margin-bottom: 10px;
          }
          .institution {
            font-size: 14px;
            color: rgba(255,255,255,0.8);
            font-style: italic;
          }
          .content {
            padding: 40px;
          }
          .meta-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
            padding: 30px;
            background: #f8fafc;
            border-radius: 10px;
          }
          .meta-item {
            text-align: center;
          }
          .meta-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            margin-bottom: 5px;
          }
          .meta-value {
            font-size: 16px;
            color: #1e40af;
            font-weight: bold;
          }
          .section {
            margin-bottom: 40px;
          }
          .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 3px solid #e2e8f0;
          }
          .abstract {
            font-size: 15px;
            text-align: justify;
            color: #334155;
            background: #f1f5f9;
            padding: 25px;
            border-radius: 10px;
            border-left: 4px solid #1e40af;
          }
          .methodology-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 15px;
          }
          .method-card {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 3px solid #3b82f6;
          }
          .method-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .method-value {
            font-size: 14px;
            color: #1e293b;
          }
          .findings-list {
            list-style: none;
            counter-reset: findings;
          }
          .findings-list li {
            counter-increment: findings;
            position: relative;
            padding-left: 45px;
            margin-bottom: 20px;
            font-size: 15px;
            color: #334155;
          }
          .findings-list li:before {
            content: counter(findings);
            position: absolute;
            left: 0;
            top: 0;
            background: #1e40af;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
          }
          .citation-box {
            background: #fffbeb;
            border: 2px solid #fbbf24;
            border-radius: 10px;
            padding: 25px;
            margin-top: 15px;
          }
          .citation-text {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            color: #1e293b;
            line-height: 1.8;
            margin-bottom: 10px;
          }
          .doi {
            font-size: 12px;
            color: #0369a1;
            font-weight: 600;
            margin-top: 10px;
          }
          .action-bar {
            background: #1e3a8a;
            padding: 30px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
          }
          .stat {
            color: white;
            text-align: center;
          }
          .stat-value {
            font-size: 24px;
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }
          .stat-label {
            font-size: 12px;
            color: rgba(255,255,255,0.8);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .download-btn {
            background: white;
            color: #1e40af;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
          }
          .download-btn:hover {
            background: #f1f5f9;
          }
          @media print {
            body { background: white; padding: 0; }
            .action-bar { display: none; }
          }
          @media (max-width: 768px) {
            .title { font-size: 24px; }
            .content { padding: 20px; }
            .header { padding: 30px 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="category-badge">${categories.find(c => c.id === paper.category)?.label}</div>
            <h1 class="title">${paper.title}</h1>
            <p class="authors">${paper.authors.join(', ')}</p>
            <p class="institution">${paper.institution}</p>
          </div>

          <div class="content">
            <div class="meta-grid">
              <div class="meta-item">
                <div class="meta-label">Publication Date</div>
                <div class="meta-value">${paper.date}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Pages</div>
                <div class="meta-value">${paper.pages} Pages</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Downloads</div>
                <div class="meta-value">${paper.downloads.toLocaleString()}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Year</div>
                <div class="meta-value">${paper.year}</div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Abstract</h2>
              <div class="abstract">${paper.abstract}</div>
            </div>

            <div class="section">
              <h2 class="section-title">Research Methodology</h2>
              <div class="methodology-grid">
                <div class="method-card">
                  <div class="method-label">Approach</div>
                  <div class="method-value">${paper.methodology}</div>
                </div>
                <div class="method-card">
                  <div class="method-label">Sample Size</div>
                  <div class="method-value">${paper.sampleSize}</div>
                </div>
                <div class="method-card">
                  <div class="method-label">Study Duration</div>
                  <div class="method-value">${paper.duration}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Key Findings</h2>
              <ul class="findings-list">
                ${paper.keyFindings.map(finding => `<li>${finding}</li>`).join('')}
              </ul>
            </div>

            <div class="section">
              <h2 class="section-title">How to Cite This Work</h2>
              <div class="citation-box">
                <div class="citation-text">${paper.citation}</div>
                <div class="doi">DOI: ${paper.doi}</div>
              </div>
            </div>
          </div>

          <div class="action-bar">
            <div style="display: flex; gap: 40px; flex-wrap: wrap;">
              <div class="stat">
                <span class="stat-value">${paper.pages}</span>
                <span class="stat-label">Pages</span>
              </div>
              <div class="stat">
                <span class="stat-value">${paper.downloads.toLocaleString()}</span>
                <span class="stat-label">Downloads</span>
              </div>
              <div class="stat">
                <span class="stat-value">${paper.year}</span>
                <span class="stat-label">Published</span>
              </div>
            </div>
            <button class="download-btn" onclick="window.print()">
              📄 Download / Print
            </button>
          </div>
        </div>
      </body>
      </html>
    `);
    newWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-600 rounded-full text-sm font-bold">
            <BookOpen className="w-5 h-5" />
            Research & Evidence
          </div>
          <h1 className="text-5xl font-bold mb-4">Research Publications</h1>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            Evidence-based research documenting our impact on child welfare, women's empowerment, and community development across India. Our peer-reviewed publications contribute to policy discourse and program effectiveness.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Peer-Reviewed Research</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>International Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Open Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-3">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Research Area</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Publication Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-600"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === 'all' ? 'All Years' : year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-gray-600 text-sm">
          Showing {filteredPapers.length} of {researchPapers.length} publications
        </div>

        {/* Research Papers List */}
        <div className="space-y-6">
          {filteredPapers.map(paper => (
            <article key={paper.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-8">
              {/* Header */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                    {categories.find(c => c.id === paper.category)?.label}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
                    {paper.year}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-900 transition">
                  {paper.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{paper.authors.join(', ')}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    <span>{paper.institution}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{paper.date}</span>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Abstract</h3>
                <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
              </div>

              {/* Research Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Methodology</p>
                  <p className="text-sm text-gray-800">{paper.methodology}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Sample Size</p>
                  <p className="text-sm text-gray-800">{paper.sampleSize}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-1">Duration</p>
                  <p className="text-sm text-gray-800">{paper.duration}</p>
                </div>
              </div>

              {/* Key Findings */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Findings</h3>
                <ul className="space-y-1">
                  {paper.keyFindings.map((finding, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citation */}
              <div className="mb-4 p-3 bg-blue-50 rounded border-l-4 border-blue-600">
                <p className="text-xs font-semibold text-gray-600 mb-1">Citation</p>
                <p className="text-xs text-gray-700 font-mono">{paper.citation}</p>
                <p className="text-xs text-gray-500 mt-1">DOI: {paper.doi}</p>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{paper.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDownload(paper)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleViewDetails(paper)}
                    className="px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Publications Found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}