import React from 'react';

const About = () => {
  const styles = {
    section: {
      backgroundColor: '#fff',
      padding: '80px 0',
      fontFamily: '"Poppins", sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      alignItems: 'center',
      gap: '50px',
    },
    image: {
      width: '100%',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      transition: 'transform 0.3s ease',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1f2937',
      borderLeft: '5px solid #2563eb',
      paddingLeft: '12px',
      marginBottom: '20px',
    },
    highlight: {
      color: '#2563eb',
    },
    paragraph: {
      color: '#4b5563',
      lineHeight: '1.7',
      marginBottom: '20px',
      fontSize: '1rem',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      textAlign: 'center',
      gap: '20px',
      marginTop: '30px',
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#2563eb',
      marginBottom: '5px',
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#6b7280',
    },
    button: {
      display: 'inline-block',
      marginTop: '30px',
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '12px 30px',
      borderRadius: '50px',
      fontWeight: '600',
      textDecoration: 'none',
      boxShadow: '0 6px 15px rgba(37,99,235,0.3)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Left Image */}
        <div style={{ textAlign: 'center' }}>
          <img
            src="./about.jpg"
            alt="VSR Tech Solution team working"
            style={styles.image}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 style={styles.heading}>
            About <span style={styles.highlight}>VSR Tech Solution</span>
          </h2>

          <p style={styles.paragraph}>
            At <strong>VSR Tech Solution</strong>, we are passionate about building smart, scalable,
            and future-ready digital products. Our focus is on delivering value-driven IT services
            that empower businesses to grow in a fast-changing technological world.
          </p>

          <p style={styles.paragraph}>
            With expertise in <span style={styles.highlight}>Web Development, Mobile Apps,
            Cloud Integration, and Enterprise Solutions</span>, our mission is to bring your
            ideas to life through innovation and code excellence.
          </p>

          {/* Stats Section */}
          <div style={styles.statsContainer}>
            <div>
              <h3 style={styles.statNumber}>50+</h3>
              <p style={styles.statLabel}>Projects Completed</p>
            </div>
            <div>
              <h3 style={styles.statNumber}>20+</h3>
              <p style={styles.statLabel}>Happy Clients</p>
            </div>
            <div>
              <h3 style={styles.statNumber}>8+</h3>
              <p style={styles.statLabel}>Tech Experts</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="#services"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
