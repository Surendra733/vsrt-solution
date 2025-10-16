import React from 'react';

const Hero = () => {
  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a, #4338ca, #6d28d9)',
      color: '#fff',
      textAlign: 'center',
      padding: '100px 20px',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif',
    },
    overlay: {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
      opacity: 0.1,
      zIndex: 0,
    },
    container: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: 'auto',
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '20px',
    },
    highlight: {
      color: '#facc15',
    },
    paragraph: {
      fontSize: '1.2rem',
      maxWidth: '850px',
      margin: '0 auto 40px',
      color: '#d1d5db',
      lineHeight: '1.7',
    },
    button: {
      backgroundColor: '#facc15',
      color: '#000',
      padding: '14px 36px',
      border: 'none',
      borderRadius: '50px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(255, 255, 0, 0.3)',
      transition: 'all 0.3s ease',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '25px',
      marginTop: '80px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '30px 25px',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s ease',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    },
    cardTitle: {
      color: '#facc15',
      fontSize: '1.6rem',
      marginBottom: '15px',
    },
    cardText: {
      fontSize: '1rem',
      color: '#e5e7eb',
      lineHeight: '1.6',
    },
    whyChoose: {
      marginTop: '100px',
      maxWidth: '1000px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    whyTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '20px',
    },
    whyText: {
      fontSize: '1.1rem',
      color: '#e5e7eb',
      marginBottom: '50px',
    },
    whyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '25px',
    },
    whyBox: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '25px',
      borderRadius: '12px',
      transition: '0.3s',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    whyBoxTitle: {
      color: '#facc15',
      marginBottom: '10px',
      fontSize: '1.3rem',
    },
    cta: {
      marginTop: '100px',
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '15px',
    },
    ctaText: {
      fontSize: '1.1rem',
      color: '#d1d5db',
      marginBottom: '25px',
    },
    ctaButton: {
      backgroundColor: '#facc15',
      color: '#000',
      fontWeight: '700',
      padding: '14px 40px',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      transition: '0.3s',
    },
  };

  // Button Hover Effects
  const handleHover = (e, enter) => {
    e.target.style.transform = enter ? 'scale(1.05)' : 'scale(1)';
    e.target.style.boxShadow = enter
      ? '0 6px 25px rgba(255, 255, 0, 0.5)'
      : '0 4px 15px rgba(255, 255, 0, 0.3)';
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? 'translateY(-8px)' : 'translateY(0)';
    e.currentTarget.style.background = enter
      ? 'rgba(255,255,255,0.15)'
      : 'rgba(255,255,255,0.1)';
  };

  const handleWhyHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? 'scale(1.03)' : 'scale(1)';
    e.currentTarget.style.background = enter
      ? 'rgba(255,255,255,0.2)'
      : 'rgba(255,255,255,0.1)';
  };

  return (
    <section style={styles.section}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.highlight}>VSR Tech Solution</span>
        </h1>
        <p style={styles.paragraph}>
          Empowering Businesses with Smart, Scalable, and Secure Technology Solutions.
          We specialize in <b>Web Development</b>, <b>App Development</b>, and <b>Software Solutions</b> —
          building reliable systems that drive innovation and growth.
        </p>

        <button
          style={styles.button}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Get Started
        </button>

        {/* Features */}
        <div style={styles.features}>
          {[
            {
              title: 'Web Development',
              text: 'We create fast, responsive, and user-friendly websites using modern technologies.',
            },
            {
              title: 'App Development',
              text: 'Custom mobile apps for Android and iOS designed to enhance user engagement.',
            },
            {
              title: 'Software Solutions',
              text: 'Tailored software to automate and optimize your business processes efficiently.',
            },
          ].map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div style={styles.whyChoose}>
          <h2 style={styles.whyTitle}>Why Choose VSR Tech Solution?</h2>
          <p style={styles.whyText}>
            We’re passionate about building digital products that make an impact. Our mission is to
            help businesses embrace innovation and digital transformation through cutting-edge tech.
          </p>

          <div style={styles.whyGrid}>
            {[
              { title: '💡 Innovative Design', text: 'Beautiful, intuitive, and modern interfaces.' },
              { title: '⚙️ Latest Technology', text: 'React, Spring Boot, Node.js, Firebase & more.' },
              { title: '🔒 Secure & Reliable', text: 'We prioritize scalability, performance, and security.' },
              { title: '🌍 Global Reach', text: 'Serving clients across industries worldwide.' },
              { title: '🤝 Dedicated Support', text: '24/7 customer assistance for seamless experience.' },
              { title: '🚀 Growth-Oriented', text: 'We focus on delivering measurable business growth.' },
            ].map((item, index) => (
              <div
                key={index}
                style={styles.whyBox}
                onMouseEnter={(e) => handleWhyHover(e, true)}
                onMouseLeave={(e) => handleWhyHover(e, false)}
              >
                <h4 style={styles.whyBoxTitle}>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={styles.cta}>
          <h3 style={styles.ctaTitle}>Ready to Build Something Amazing?</h3>
          <p style={styles.ctaText}>
            Let’s transform your ideas into reality with creativity, technology, and dedication.
          </p>
          <button
            style={styles.ctaButton}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
