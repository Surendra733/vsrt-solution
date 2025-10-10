import React from 'react';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Custom websites and e-commerce solutions using modern technologies like React, Node.js, and more.' },
    { title: 'Software Development', description: 'Full-cycle software engineering for desktop and enterprise applications.' },
    { title: 'App Development', description: 'Native and cross-platform mobile apps for iOS and Android.' },
    { title: 'Cloud Services', description: 'Migration, deployment, and management on AWS, Azure, and Google Cloud.' },
    { title: 'IT Consulting', description: 'Strategic advice to optimize your tech infrastructure and digital transformation.' },
    { title: 'Cybersecurity', description: 'Protecting your data with robust security audits and solutions.' },
  ];

  return (
    <section className="section services">
      <div className="container">
        <h2>Our IT Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;