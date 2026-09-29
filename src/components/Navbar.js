import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      // Fixed transparent / glass background with smooth scroll transition
      backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(250, 204, 21, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brandWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
    },
    logoBox: {
      width: '38px',
      height: '38px',
      background: 'linear-gradient(135deg, #facc15 0%, #f97316 100%)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
      boxShadow: '0 0 15px rgba(250, 204, 21, 0.4)',
    },
    brandText: {
      fontSize: '1.25rem',
      fontWeight: '800',
      color: '#fff',
      letterSpacing: '-0.02em',
    },
    brandHighlight: {
      background: 'linear-gradient(135deg, #facc15 0%, #f97316 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    statusBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.3)',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      color: '#4ade80',
      fontWeight: '600',
    },
    pulseDot: {
      width: '6px',
      height: '6px',
      backgroundColor: '#4ade80',
      borderRadius: '50%',
      boxShadow: '0 0 8px #4ade80',
    },
    linksContainer: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '5px',
      borderRadius: '40px',
      backdropFilter: 'blur(10px)',
    },
    link: (isActive) => ({
      color: isActive ? '#0f172a' : '#cbd5e1',
      backgroundColor: isActive ? '#facc15' : 'transparent',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      padding: '8px 20px',
      borderRadius: '30px',
      transition: 'all 0.3s ease',
    }),
    rightActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #facc15 0%, #f97316 100%)',
      color: '#0f172a',
      padding: '10px 22px',
      borderRadius: '30px',
      fontWeight: '700',
      fontSize: '0.9rem',
      textDecoration: 'none',
      boxShadow: '0 4px 20px rgba(250, 204, 21, 0.4)',
      transition: 'all 0.3s ease',
    },
    hamburger: {
      display: 'none',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#fff',
      fontSize: '1.4rem',
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mobileMenu: {
      position: 'fixed',
      top: '75px',
      left: '20px',
      right: '20px',
      backgroundColor: 'rgba(15, 23, 42, 0.98)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(250, 204, 21, 0.2)',
      borderRadius: '20px',
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 999,
      boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
    },
    mobileLink: (isActive) => ({
      color: isActive ? '#facc15' : '#fff',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.1rem',
      padding: '10px 15px',
      borderRadius: '10px',
      backgroundColor: isActive ? 'rgba(250, 204, 21, 0.1)' : 'transparent',
    }),
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Brand Logo & Live Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/" style={styles.brandWrapper}>
            <div style={styles.logoBox}>⚡</div>
            <div style={styles.brandText}>
              VSR <span style={styles.brandHighlight}>TECH</span>
            </div>
          </Link>
          <div style={styles.statusBadge} className="hide-on-mobile">
            <span style={styles.pulseDot}></span> Systems Operational
          </div>
        </div>

        {/* Desktop Nav Pills */}
        <div style={styles.linksContainer} className="desktop-links">
          <Link to="/" style={styles.link(location.pathname === '/')}>Home</Link>
          <Link to="/about" style={styles.link(location.pathname === '/about')}>About</Link>
          <Link to="/services" style={styles.link(location.pathname === '/services')}>Services</Link>
          <Link to="/contact" style={styles.link(location.pathname === '/contact')}>Contact</Link>
        </div>

        {/* CTA & Mobile Hamburger */}
        <div style={styles.rightActions}>
          <Link 
            to="/contact" 
            style={styles.ctaButton}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Deploy Project
          </Link>

          <button 
            style={styles.hamburger} 
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-btn"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Futuristic Mobile Drawer */}
      <div style={styles.mobileMenu}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Navigation</span>
          <div style={styles.statusBadge}>
            <span style={styles.pulseDot}></span> Live
          </div>
        </div>
        <Link to="/" style={styles.mobileLink(location.pathname === '/')} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" style={styles.mobileLink(location.pathname === '/about')} onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/services" style={styles.mobileLink(location.pathname === '/services')} onClick={() => setIsOpen(false)}>Our Services</Link>
        <Link to="/contact" style={styles.mobileLink(location.pathname === '/contact')} onClick={() => setIsOpen(false)}>Contact Enterprise</Link>
      </div>

      {/* Responsive Media Query Helper */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 500px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;