import React from 'react';

const ProgramCard = ({ image, title, description, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      image: '/programs1.jpg',
      title: 'Education & Literacy',
      description: 'Providing quality education and literacy programs to children and adults in underserved communities.',
      features: [
        'School infrastructure development',
        'Teacher training programs',
        'Adult literacy classes',
        'Scholarship programs'
      ]
    },
    {
      image: '/programs2.jpg',
      title: 'Healthcare Access',
      description: 'Ensuring accessible healthcare services and promoting health awareness in rural and urban areas.',
      features: [
        'Mobile health clinics',
        'Vaccination drives',
        'Health education programs',
        'Medical equipment support'
      ]
    },
    {
      image: '/programs3.png',
      title: 'Economic Empowerment',
      description: 'Creating sustainable livelihood opportunities through skill development and microfinance programs.',
      features: [
        'Vocational training',
        'Microfinance initiatives',
        'Women\'s self-help groups',
        'Small business support'
      ]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to address the root causes of poverty and inequality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
              features={program.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;