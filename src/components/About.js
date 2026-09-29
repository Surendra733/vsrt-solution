import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
    gridTop: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      alignItems: 'center',
      gap: '60px',
      marginBottom: '100px',
    },
    imageWrapper: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.5s ease',
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
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    heading: {
      fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
      fontWeight: '800',
      marginBottom: '20px',
      lineHeight: '1.2',
    },
    highlight: {
      color: '#facc15',
    },
    paragraph: {
      color: '#94a3b8',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontSize: '1.05rem',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '20px',
      marginTop: '40px',
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '30px',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#facc15',
      marginBottom: '5px',
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#94a3b8',
    },
    valuesSection: {
      marginTop: '60px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '40px',
    },
    valueCard: {
      background: 'rgba(30, 41, 59, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '35px 30px',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
    },
    valueIcon: {
      fontSize: '2.2rem',
      marginBottom: '20px',
      display: 'block',
    },
    valueTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#fff',
    },
    valueText: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      lineHeight: '1.6',
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Top Story Section */}
        <div style={styles.gridTop}>
          <div style={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="VSR Tech Solution team working"
              style={styles.image}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          <div>
            <div style={styles.badge}>Enterprise Heritage</div>
            <h2 style={styles.heading}>
              Architecting Digital Futures at <span style={styles.highlight}>VSR Tech Solution</span>
            </h2>

            <p style={styles.paragraph}>
              Founded on the pillars of innovation, precision engineering, and absolute reliability, 
              <strong> VSR Tech Solution</strong> delivers enterprise-grade software products that scale seamlessly across global markets.
            </p>

            <p style={styles.paragraph}>
              Our multidisciplinary team specializes in <span style={styles.highlight}>Full-Stack Web Architecture, Mobile Ecosystems, Cloud DevOps, and AI-Driven Software</span>, helping corporations turn complex bottlenecks into digital milestones.
            </p>

            {/* Stats */}
            <div style={styles.statsContainer}>
              <div>
                <div style={styles.statNumber}>150+</div>
                <div style={styles.statLabel}>Projects Deployed</div>
              </div>
              <div>
                <div style={styles.statNumber}>99.9%</div>
                <div style={styles.statLabel}>Client Satisfaction</div>
              </div>
              <div>
                <div style={styles.statNumber}>15+</div>
                <div style={styles.statLabel}>Global Experts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={styles.valuesSection}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px' }}>Our Core Principles</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>The engineering philosophy that drives our daily execution.</p>
          </div>

          <div style={styles.valuesGrid}>
            {[
              { icon: '🎯', title: 'Uncompromising Quality', text: 'Rigorous automated testing and code reviews guarantee rock-solid enterprise stability.' },
              { icon: '⚡', title: 'Agile Velocity', text: 'Rapid deployment cycles ensuring your product reaches the market ahead of competitors.' },
              { icon: '🔒', title: 'Security First', text: 'End-to-end data encryption and compliance frameworks built directly into the core architecture.' },
            ].map((val, idx) => (
              <div 
                key={idx} 
                style={styles.valueCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(250, 204, 21, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={styles.valueIcon}>{val.icon}</span>
                <h3 style={styles.valueTitle}>{val.title}</h3>
                <p style={styles.valueText}>{val.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;