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
      backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brand: {
      fontSize: '1.4rem',
      fontWeight: '800',
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    brandHighlight: {
      color: '#facc15',
    },
    links: {
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
    },
    link: (isActive) => ({
      color: isActive ? '#facc15' : '#cbd5e1',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: 'color 0.2s',
    }),
    ctaButton: {
      backgroundColor: '#facc15',
      color: '#0f172a',
      padding: '10px 22px',
      borderRadius: '30px',
      fontWeight: '700',
      fontSize: '0.9rem',
      textDecoration: 'none',
      boxShadow: '0 4px 15px rgba(250, 204, 21, 0.3)',
      transition: 'transform 0.2s',
    },
    hamburger: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '1.8rem',
      cursor: 'pointer',
    },
    mobileMenu: {
      position: 'fixed',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: '#0f172a',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 999,
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>
          ⚡ VSR <span style={styles.brandHighlight}>Tech</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', '@media (max-width: 768px)': { display: 'none' } }} className="desktop-nav">
          <div style={styles.links}>
            <Link to="/" style={styles.link(location.pathname === '/')}>Home</Link>
            <Link to="/about" style={styles.link(location.pathname === '/about')}>About</Link>
            <Link to="/services" style={styles.link(location.pathname === '/services')}>Services</Link>
            <Link to="/contact" style={styles.link(location.pathname === '/contact')}>Contact</Link>
          </div>
          <Link to="/contact" style={styles.ctaButton}>Get a Quote</Link>
        </div>

        {/* Hamburger Toggle */}
        <button style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div style={styles.mobileMenu}>
        <Link to="/" style={styles.link(location.pathname === '/')} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" style={styles.link(location.pathname === '/about')} onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" style={styles.link(location.pathname === '/services')} onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" style={styles.link(location.pathname === '/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;