import React, { useState, useEffect } from 'react';
import { FileText, Download, Eye, TrendingUp, Users, Heart, BookOpen, Award, Calendar, ChevronRight, BarChart3, Activity, Target, CheckCircle, X } from 'lucide-react';

export default function AnnualReportsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2023-24');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reports = [
    {
      year: '2023-24',
      title: 'Annual Report 2023-24',
      subtitle: 'Expanding Horizons, Deepening Impact',
      published: 'August 2024',
      pages: 64,
      size: '8.5 MB',
      highlights: [
        'Reached 50+ communities across 4 districts',
        'Conducted 200+ health camps serving 15,000+ individuals',
        'Supported 1,500+ students through education programs',
        'Trained 500+ women in livelihood skills',
        'Formed 120+ Self-Help Groups'
      ],
      stats: {
        beneficiaries: '25,000+',
        communities: '50+',
        programs: '12',
        volunteers: '80+'
      },
      financials: {
        income: '₹2.8 Crore',
        programExpense: '₹2.1 Crore',
        adminExpense: '₹0.4 Crore',
        programRatio: '84%'
      }
    },
    {
      year: '2022-23',
      title: 'Annual Report 2022-23',
      subtitle: 'Building Foundations for Change',
      published: 'September 2023',
      pages: 52,
      size: '7.2 MB',
      highlights: [
        'Expanded to 35 communities',
        'Conducted 150+ health screening camps',
        'Established 45 learning centers',
        'Trained 350+ women in vocational skills',
        'Formed 80+ Self-Help Groups'
      ],
      stats: {
        beneficiaries: '18,000+',
        communities: '35',
        programs: '10',
        volunteers: '60+'
      },
      financials: {
        income: '₹1.9 Crore',
        programExpense: '₹1.5 Crore',
        adminExpense: '₹0.3 Crore',
        programRatio: '83%'
      }
    },
    {
      year: '2021-22',
      title: 'Annual Report 2021-22',
      subtitle: 'Navigating Challenges, Sustaining Hope',
      published: 'October 2022',
      pages: 48,
      size: '6.8 MB',
      highlights: [
        'Operated in 20 villages despite pandemic challenges',
        'Provided emergency healthcare support',
        'Distributed essential supplies to 5,000+ families',
        'Continued education through remote learning',
        'Supported 200+ women with livelihood assistance'
      ],
      stats: {
        beneficiaries: '12,000+',
        communities: '20',
        programs: '8',
        volunteers: '45+'
      },
      financials: {
        income: '₹1.2 Crore',
        programExpense: '₹0.95 Crore',
        adminExpense: '₹0.18 Crore',
        programRatio: '84%'
      }
    }
  ];

  const impactMetrics = [
    {
      icon: Users,
      label: 'Total Beneficiaries',
      value: '55,000+',
      growth: '+28% from last year',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      label: 'Health Interventions',
      value: '500+',
      growth: 'Camps & screenings',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: BookOpen,
      label: 'Students Educated',
      value: '3,000+',
      growth: 'Cumulative enrollment',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Award,
      label: 'Women Empowered',
      value: '1,200+',
      growth: 'Skills & livelihoods',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const programAreas = [
    {
      name: 'Healthcare',
      percentage: 35,
      amount: '₹73.5 Lakhs',
      beneficiaries: '15,000+',
      color: 'bg-blue-500'
    },
    {
      name: 'Education',
      percentage: 30,
      amount: '₹63 Lakhs',
      beneficiaries: '1,500+',
      color: 'bg-purple-500'
    },
    {
      name: 'Livelihoods',
      percentage: 25,
      amount: '₹52.5 Lakhs',
      beneficiaries: '500+',
      color: 'bg-green-500'
    },
    {
      name: 'Community Dev',
      percentage: 10,
      amount: '₹21 Lakhs',
      beneficiaries: '50+',
      color: 'bg-orange-500'
    }
  ];

  const documents = [
    {
      type: 'Financial Audit',
      year: '2023-24',
      description: 'Audited financial statements by chartered accountants',
      icon: BarChart3,
      content: 'financial-audit'
    },
    {
      type: 'Impact Assessment',
      year: '2023-24',
      description: 'Third-party evaluation of program outcomes',
      icon: Activity,
      content: 'impact-assessment'
    },
    {
      type: 'Governance Report',
      year: '2023-24',
      description: 'Board activities and organizational governance',
      icon: Target,
      content: 'governance-report'
    }
  ];

  const currentReport = reports.find(r => r.year === selectedYear);

  const generateReportContent = (reportTitle, year) => {
    const report = reports.find(r => r.year === year);
    const content = `${reportTitle}
${report.subtitle}
Published: ${report.published}

EXECUTIVE SUMMARY
This annual report presents a comprehensive overview of our organization activities, achievements, and impact during fiscal year ${year}.

KEY HIGHLIGHTS
${report.highlights.map((h, i) => `${i + 1}. ${h}`).join('\n')}

PROGRAM STATISTICS
Total Beneficiaries: ${report.stats.beneficiaries}
Communities Served: ${report.stats.communities}
Active Programs: ${report.stats.programs}
Volunteers Engaged: ${report.stats.volunteers}

FINANCIAL OVERVIEW
Total Income: ${report.financials.income}
Program Expenses: ${report.financials.programExpense}
Administrative Expenses: ${report.financials.adminExpense}
Program Expense Ratio: ${report.financials.programRatio}

For complete details, please visit our website.`;
    return content;
  };

  const generateDocumentContent = (docType) => {
    if (docType === 'financial-audit') {
      return `INDEPENDENT AUDITOR REPORT
Financial Year 2023-24

We have audited the financial statements of the organization for the year ended March 31, 2024.

BALANCE SHEET
Total Assets: Rs 95,00,000
Total Liabilities: Rs 95,00,000

INCOME & EXPENDITURE
Total Income: Rs 2,80,00,000
Total Expenditure: Rs 2,50,00,000
Surplus: Rs 30,00,000

Program Expense Ratio: 84%
Administrative Ratio: 16%

Certified by: CA Rajesh Gupta
Date: May 15, 2024`;
    } else if (docType === 'impact-assessment') {
      return `IMPACT ASSESSMENT REPORT 2023-24

Conducted by Development Research Institute

KEY FINDINGS:
- 87% beneficiaries reported improved healthcare access
- 92% students showed better learning outcomes
- 42% increase in household income for livelihood participants
- 78% communities reported infrastructure improvements

METHODOLOGY:
Sample: 800 household surveys across 25 villages
Focus groups, interviews, and case studies conducted

RECOMMENDATIONS:
1. Strengthen monitoring systems
2. Invest in local leadership
3. Scale successful models`;
    } else {
      return `GOVERNANCE REPORT 2023-24

BOARD OF TRUSTEES: 7 Members
Board Meetings Held: 4 (90% attendance)

COMPLIANCE STATUS:
- All statutory filings completed on time
- FCRA, 12A, 80G registrations valid
- 100% compliance maintained

POLICIES IN PLACE:
- Financial Management
- Human Resources
- Child Protection
- Data Protection

TRANSPARENCY MEASURES:
- Annual reports published online
- Financial statements disclosed
- Regular stakeholder communication`;
    }
  };

  const handleDownload = (reportTitle, year) => {
    const content = generateReportContent(reportTitle, year);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reportTitle.replace(/\s+/g, '-')}-${year}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleViewDocument = (docType, docTitle) => {
    setModalContent({
      title: docTitle,
      content: generateDocumentContent(docType)
    });
    setShowModal(true);
  };

  const handleDownloadDocument = (docType, docTitle) => {
    const content = generateDocumentContent(docType);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${docTitle.replace(/\s+/g, '-')}-2023-24.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Modal */}
      {showModal && modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{modalContent.title}</h3>
              <button onClick={() => setShowModal(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto max-h-[70vh]">
              <pre className="whitespace-pre-wrap text-slate-700 font-mono text-sm leading-relaxed">
                {modalContent.content}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Transparency & Accountability
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Annual Reports
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive documentation of our programs, impact, and financial stewardship
            </p>
          </div>
        </div>
      </div>

      {/* Impact Overview */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {impactMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${metric.color} rounded-xl p-3 inline-block mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-slate-600 mb-1">{metric.label}</div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</div>
                <div className="text-sm text-green-600 font-medium">{metric.growth}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Year Selector */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap gap-4 justify-center">
            {reports.map((report) => (
              <button
                key={report.year}
                onClick={() => setSelectedYear(report.year)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedYear === report.year
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg'
                }`}
              >
                {report.year}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Report */}
        {currentReport && (
          <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-white">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-10 h-10" />
                      <div className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        Latest Report
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3">{currentReport.title}</h2>
                    <p className="text-2xl text-blue-100 mb-4">{currentReport.subtitle}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Published: {currentReport.published}
                      </div>
                      <div>{currentReport.pages} pages</div>
                      <div>{currentReport.size}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleDownload(currentReport.title, currentReport.year)}
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {/* Key Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-10">
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{currentReport.stats.beneficiaries}</div>
                    <div className="text-slate-700 font-medium">Beneficiaries</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-2xl">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{currentReport.stats.communities}</div>
                    <div className="text-slate-700 font-medium">Communities</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">{currentReport.stats.programs}</div>
                    <div className="text-slate-700 font-medium">Programs</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-2xl">
                    <div className="text-4xl font-bold text-orange-600 mb-2">{currentReport.stats.volunteers}</div>
                    <div className="text-slate-700 font-medium">Volunteers</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    Key Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentReport.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Summary */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Financial Overview</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-sm text-slate-600 mb-2">Total Income</div>
                      <div className="text-2xl font-bold text-slate-800">{currentReport.financials.income}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-2">Program Expenses</div>
                      <div className="text-2xl font-bold text-blue-600">{currentReport.financials.programExpense}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-2">Admin Expenses</div>
                      <div className="text-2xl font-bold text-purple-600">{currentReport.financials.adminExpense}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 mb-2">Program Ratio</div>
                      <div className="text-2xl font-bold text-green-600">{currentReport.financials.programRatio}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program Distribution */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Resource Allocation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Program-wise Distribution</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              How we allocate resources across different intervention areas for maximum impact
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
            <div className="space-y-6">
              {programAreas.map((program, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800">{program.name}</h4>
                      <p className="text-sm text-slate-600">{program.beneficiaries} beneficiaries</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">{program.percentage}%</div>
                      <div className="text-sm text-slate-600">{program.amount}</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${program.color} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${program.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Documents */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Supporting Documents
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Additional Reports</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {documents.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 group hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{doc.type}</h3>
                  <p className="text-sm text-slate-600 mb-4">{doc.description}</p>
                  <div className="text-sm font-medium text-blue-600 mb-4">{doc.year}</div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleViewDocument(doc.content, doc.type)}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button 
                      onClick={() => handleDownloadDocument(doc.content, doc.type)}
                      className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Reports Archive */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Report Archive</h2>
            <div className="space-y-4">
              {reports.map((report, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 border border-slate-200 group">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">{report.title}</h3>
                        <p className="text-slate-600 mb-2">{report.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{report.published}</span>
                          <span>•</span>
                          <span>{report.pages} pages</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleDownload(report.title, report.year)}
                        className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transparency Statement */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment to Transparency</h2>
              <p className="text-xl leading-relaxed mb-6 text-blue-100 max-w-4xl mx-auto">
                We believe in complete transparency and accountability to our stakeholders, donors, and the communities we serve. Our annual reports provide comprehensive information about our programs, impact, and financial stewardship.
              </p>
              <p className="text-lg leading-relaxed text-blue-100 max-w-4xl mx-auto">
                All our financial statements are audited by independent chartered accountants, and we undergo regular third-party impact assessments to ensure program effectiveness. We maintain the highest standards of governance and comply with all regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}