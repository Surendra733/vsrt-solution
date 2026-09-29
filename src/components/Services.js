import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { 
      icon: '💻', 
      title: 'Full-Stack Web Engineering', 
      description: 'High-performance, SEO-optimized web apps and enterprise portals built using React, Next.js, and Node.js.' 
    },
    { 
      icon: '⚙️', 
      title: 'Custom Software Solutions', 
      description: 'End-to-end desktop and cloud-native software tailored to automate your core business workflows securely.' 
    },
    { 
      icon: '📱', 
      title: 'Mobile App Ecosystems', 
      description: 'Cross-platform mobile applications for iOS and Android delivering lightning-fast, native user experiences.' 
    },
    { 
      icon: '☁️', 
      title: 'Cloud & DevOps Architecture', 
      description: 'Seamless migration, infrastructure scaling, and automated CI/CD pipelines on AWS, Firebase, and Supabase.' 
    },
    { 
      icon: '📊', 
      title: 'Strategic IT Consulting', 
      description: 'Expert digital transformation roadmaps and technical audits to maximize your ROI on technology investments.' 
    },
    { 
      icon: '🛡️', 
      title: 'Enterprise Cybersecurity', 
      description: 'Advanced threat protection, penetration testing, and secure identity authentication frameworks.' 
    },
  ];

  const styles = {
    section: {
      backgroundColor: '#0f172a',
      color: '#fff',
      padding: '140px 20px 100px',
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '70px',
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(250, 204, 21, 0.1)',
      border: '1px solid rgba(250, 204, 21, 0.3)',
      color: '#facc15',
      padding: '6px 16px',
      borderRadius: '30px',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 4vw, 3.2rem)',
      fontWeight: '800',
      marginBottom: '15px',
    },
    subtitle: {
      color: '#94a3b8',
      fontSize: '1.1rem',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '40px 30px',
      borderRadius: '20px',
      backdropFilter: 'blur(12px)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    cardIcon: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      display: 'inline-block',
    },
    cardTitle: {
      color: '#fff',
      fontSize: '1.4rem',
      fontWeight: '700',
      marginBottom: '15px',
    },
    cardText: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      lineHeight: '1.7',
      marginBottom: '25px',
    },
    linkBtn: {
      color: '#facc15',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.95rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.badge}>Enterprise Solutions</div>
          <h2 style={styles.title}>Comprehensive IT Services</h2>
          <p style={styles.subtitle}>
            We engineer high-impact digital solutions designed to scale your operations, secure your data, and drive rapid growth.
          </p>
        </div>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(250, 204, 21, 0.4)';
                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
              }}
            >
              <div>
                <span style={styles.cardIcon}>{service.icon}</span>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardText}>{service.description}</p>
              </div>
              <Link to="/contact" style={styles.linkBtn}>
                Inquire Now &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;