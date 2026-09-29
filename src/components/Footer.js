import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      position: 'relative',
      backgroundColor: '#020617',
      color: '#fff',
      padding: '100px 20px 40px',
      borderTop: '1px solid rgba(250, 204, 21, 0.15)',
      overflow: 'hidden',
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    glowOrb: {
      position: 'absolute',
      bottom: '-100px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '600px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, rgba(109, 40, 217, 0.05) 50%, transparent 80%)',
      zIndex: 0,
      pointerEvents: 'none',
    },
    container: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1280px',
      margin: '0 auto',
    },
    topBanner: {
      background: 'rgba(30, 41, 59, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      padding: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      marginBottom: '80px',
      backdropFilter: 'blur(16px)',
    },
    bannerText: {
      maxWidth: '600px',
    },
    bannerTitle: {
      fontSize: '1.8rem',
      fontWeight: '800',
      marginBottom: '10px',
    },
    bannerDesc: {
      color: '#94a3b8',
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    newsletterForm: {
      display: 'flex',
      gap: '12px',
      width: '100%',
      maxWidth: '400px',
    },
    input: {
      flex: 1,
      padding: '14px 18px',
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '12px',
      color: '#fff',
      outline: 'none',
      fontSize: '0.95rem',
    },
    subscribeBtn: {
      backgroundColor: '#facc15',
      color: '#0f172a',
      padding: '0 24px',
      borderRadius: '12px',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(250, 204, 21, 0.3)',
      transition: 'transform 0.2s',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '50px',
      marginBottom: '60px',
    },
    brandCol: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    brandTitle: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    highlight: {
      background: 'linear-gradient(135deg, #facc15 0%, #f97316 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    text: {
      color: '#94a3b8',
      fontSize: '0.95rem',
      lineHeight: '1.7',
    },
    socialBadges: {
      display: 'flex',
      gap: '10px',
    },
    socialIcon: {
      width: '38px',
      height: '38px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#cbd5e1',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.3s',
    },
    columnTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#fff',
      letterSpacing: '0.02em',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.2s',
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '10px',
    },
    tag: {
      backgroundColor: 'rgba(250, 204, 21, 0.06)',
      border: '1px solid rgba(250, 204, 21, 0.2)',
      color: '#facc15',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    bottomBar: {
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      color: '#64748b',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.glowOrb}></div>

      <div style={styles.container}>
        {/* Top Newsletter / CTA Banner */}
        <div style={styles.topBanner}>
          <div style={styles.bannerText}>
            <h3 style={styles.bannerTitle}>Ready to Accelerate Your Enterprise?</h3>
            <p style={styles.bannerDesc}>Subscribe to our tech newsletter for expert architectural insights, cloud updates, and software engineering breakthroughs.</p>
          </div>
          <form style={styles.newsletterForm} onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
            <input type="email" placeholder="Enter your work email" style={styles.input} required />
            <button 
              type="submit" 
              style={styles.subscribeBtn}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Join
            </button>
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div style={styles.grid}>
          {/* Brand Col */}
          <div style={styles.brandCol}>
            <div style={styles.brandTitle}>
              <span>⚡</span> VSR <span style={styles.highlight}>Tech Solution</span>
            </div>
            <p style={styles.text}>
              Engineering high-performance web applications, scalable mobile ecosystems, and bank-grade cloud infrastructure for global visionaries.
            </p>
            <div style={styles.socialBadges}>
              <a href="#github" style={styles.socialIcon} title="GitHub">GH</a>
              <a href="#linkedin" style={styles.socialIcon} title="LinkedIn">IN</a>
              <a href="#twitter" style={styles.socialIcon} title="Twitter">X</a>
              <a href="#discord" style={styles.socialIcon} title="Discord">DS</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={styles.columnTitle}>Navigation</h4>
            <div style={styles.linkList}>
              <Link to="/" style={styles.link}>Home Dashboard</Link>
              <Link to="/about" style={styles.link}>About Our Firm</Link>
              <Link to="/services" style={styles.link}>Core Services</Link>
              <Link to="/contact" style={styles.link}>Enterprise Contact</Link>
            </div>
          </div>

          {/* Tech Ecosystem Tags */}
          <div>
            <h4 style={styles.columnTitle}>Tech Ecosystem</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>Built with state-of-the-art frameworks:</p>
            <div style={styles.techTags}>
              <span style={styles.tag}>React 19</span>
              <span style={styles.tag}>Next.js</span>
              <span style={styles.tag}>Node.js</span>
              <span style={styles.tag}>Spring Boot</span>
              <span style={styles.tag}>Firebase</span>
              <span style={styles.tag}>Supabase</span>
              <span style={styles.tag}>AWS Cloud</span>
              <span style={styles.tag}>Docker</span>
            </div>
          </div>

          {/* Direct HQ Info */}
          <div>
            <h4 style={styles.columnTitle}>Global Headquarters</h4>
            <div style={styles.linkList}>
              <span style={{ color: '#fff', fontWeight: '600' }}>VSR Tech Solution HQ</span>
              <span style={styles.link}>Rewa, Madhya Pradesh, India</span>
              <span style={styles.link}>Email: vsrtinfo@gmail.com</span>
              <span style={styles.link}>Phone: +91-8319428709</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} VSR Tech Solution. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={styles.link}>Privacy Policy</span>
            <span style={styles.link}>Terms of Service</span>
            <span style={styles.link}>Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;