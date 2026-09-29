import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#020617',
      color: '#fff',
      padding: '80px 20px 40px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '40px',
      marginBottom: '60px',
    },
    brandCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    brandTitle: {
      fontSize: '1.4rem',
      fontWeight: '800',
      color: '#fff',
    },
    highlight: {
      color: '#facc15',
    },
    text: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.6',
    },
    columnTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#fff',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.2s',
    },
    bottomBar: {
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      color: '#64748b',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Info */}
          <div style={styles.brandCol}>
            <div style={styles.brandTitle}>
              ⚡ VSR <span style={styles.highlight}>Tech Solution</span>
            </div>
            <p style={styles.text}>
              Empowering global enterprises with next-gen web architectures, mobile ecosystems, and secure cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={styles.columnTitle}>Navigation</h4>
            <div style={styles.linkList}>
              <Link to="/" style={styles.link}>Home</Link>
              <Link to="/about" style={styles.link}>About Us</Link>
              <Link to="/services" style={styles.link}>Services</Link>
              <Link to="/contact" style={styles.link}>Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={styles.columnTitle}>Expertise</h4>
            <div style={styles.linkList}>
              <span style={styles.link}>Web Development</span>
              <span style={styles.link}>Mobile Apps</span>
              <span style={styles.link}>Cloud Architecture</span>
              <span style={styles.link}>Cybersecurity</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={styles.columnTitle}>Legal & Policy</h4>
            <div style={styles.linkList}>
              <span style={styles.link}>Privacy Policy</span>
              <span style={styles.link}>Terms of Service</span>
              <span style={styles.link}>Security Compliance</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} VSR Tech Solution. All rights reserved.</p>
          <p>Engineered for Global Excellence 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;