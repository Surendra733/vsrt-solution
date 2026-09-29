import React, { useEffect, useRef } from 'react';

const Hero = () => {
  // Canvas Particle Background Effect
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(250, 204, 21, 0.15)';
      ctx.strokeStyle = 'rgba(250, 204, 21, 0.08)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 20%, #1e1b4b 0%, #0f172a 70%, #020617 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '120px 20px 80px',
      overflow: 'hidden',
      fontFamily: "'Inter', 'Poppins', sans-serif",
    },
    canvas: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(250, 204, 21, 0.1)',
      border: '1px solid rgba(250, 204, 21, 0.3)',
      color: '#facc15',
      padding: '6px 16px',
      borderRadius: '30px',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginBottom: '25px',
      backdropFilter: 'blur(8px)',
    },
    container: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: 'auto',
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: '800',
      marginBottom: '20px',
      letterSpacing: '-0.02em',
      lineHeight: '1.2',
    },
    highlight: {
      background: 'linear-gradient(135deg, #facc15 0%, #f97316 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    paragraph: {
      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
      maxWidth: '800px',
      margin: '0 auto 40px',
      color: '#94a3b8',
      lineHeight: '1.7',
    },
    ctaGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      marginBottom: '60px',
    },
    primaryButton: {
      backgroundColor: '#facc15',
      color: '#0f172a',
      padding: '15px 36px',
      border: 'none',
      borderRadius: '50px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(250, 204, 21, 0.4)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '1rem',
    },
    secondaryButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: '#fff',
      padding: '15px 36px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '50px',
      fontWeight: '600',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '1rem',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      maxWidth: '900px',
      margin: '0 auto 80px',
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '25px',
      borderRadius: '20px',
      backdropFilter: 'blur(12px)',
    },
    statBox: {
      textAlign: 'center',
    },
    statNum: {
      fontSize: '2.2rem',
      fontWeight: '800',
      color: '#facc15',
      marginBottom: '5px',
    },
    statDesc: {
      fontSize: '0.9rem',
      color: '#94a3b8',
    },
    sectionHeading: {
      fontSize: 'clamp(2rem, 3vw, 2.8rem)',
      fontWeight: '700',
      marginBottom: '16px',
      letterSpacing: '-0.01em',
    },
    sectionDesc: {
      fontSize: '1.1rem',
      color: '#94a3b8',
      maxWidth: '700px',
      margin: '0 auto 50px',
      lineHeight: '1.6',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '30px',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '35px 30px',
      borderRadius: '20px',
      backdropFilter: 'blur(12px)',
      textAlign: 'left',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    },
    cardIcon: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      display: 'inline-block',
    },
    cardTitle: {
      color: '#fff',
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '12px',
    },
    cardText: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      lineHeight: '1.7',
    },
    techTicker: {
      marginTop: '80px',
      padding: '30px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    },
    techTitle: {
      fontSize: '0.85rem',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#64748b',
      marginBottom: '20px',
      fontWeight: '600',
    },
    techBadges: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '12px',
    },
    techBadge: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '8px 20px',
      borderRadius: '30px',
      fontSize: '0.9rem',
      color: '#cbd5e1',
      fontWeight: '500',
    },
    testimonialSection: {
      marginTop: '100px',
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '25px',
      marginTop: '40px',
    },
    testimonialCard: {
      background: 'rgba(15, 23, 42, 0.7)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '30px',
      borderRadius: '20px',
      textAlign: 'left',
    },
    clientInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginTop: '20px',
    },
    clientAvatar: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      backgroundColor: '#facc15',
      color: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
    clientName: {
      fontWeight: '600',
      fontSize: '1rem',
      color: '#fff',
    },
    clientRole: {
      fontSize: '0.85rem',
      color: '#64748b',
    },
    ctaBox: {
      marginTop: '120px',
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(109, 40, 217, 0.4))',
      border: '1px solid rgba(250, 204, 21, 0.2)',
      borderRadius: '30px',
      padding: '60px 40px',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
    }
  };

  // Hover Handlers
  const handlePrimaryHover = (e, enter) => {
    e.target.style.transform = enter ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)';
    e.target.style.boxShadow = enter
      ? '0 8px 30px rgba(250, 204, 21, 0.6)'
      : '0 4px 20px rgba(250, 204, 21, 0.4)';
  };

  const handleSecondaryHover = (e, enter) => {
    e.target.style.transform = enter ? 'translateY(-3px)' : 'translateY(0)';
    e.target.style.background = enter ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)';
    e.target.style.borderColor = enter ? 'rgba(250, 204, 21, 0.5)' : 'rgba(255, 255, 255, 0.15)';
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter ? 'translateY(-8px)' : 'translateY(0)';
    e.currentTarget.style.borderColor = enter ? 'rgba(250, 204, 21, 0.4)' : 'rgba(255, 255, 255, 0.08)';
    e.currentTarget.style.background = enter ? 'rgba(30, 41, 59, 0.8)' : 'rgba(30, 41, 59, 0.5)';
  };

  return (
    <section style={styles.section}>
      {/* Interactive Particle Network */}
      <canvas ref={canvasRef} style={styles.canvas}></canvas>

      <div style={styles.container}>
        {/* Top Badge */}
        <div style={styles.badge}>
          <span>🚀</span> Next-Gen Software & Digital Engineering
        </div>

        {/* Main Header */}
        <h1 style={styles.title}>
          Engineering Excellence for <br />
          <span style={styles.highlight}>Modern Enterprises</span>
        </h1>
        <p style={styles.paragraph}>
          We architect high-performance <b>Web Applications</b>, scalable <b>Mobile Ecosystems</b>, 
          and robust <b>Cloud Solutions</b> designed to accelerate growth, secure data, and dominate industries.
        </p>

        {/* CTA Group */}
        <div style={styles.ctaGroup}>
          <button
            style={styles.primaryButton}
            onMouseEnter={(e) => handlePrimaryHover(e, true)}
            onMouseLeave={(e) => handlePrimaryHover(e, false)}
          >
            Start Your Project
          </button>
          <button
            style={styles.secondaryButton}
            onMouseEnter={(e) => handleSecondaryHover(e, true)}
            onMouseLeave={(e) => handleSecondaryHover(e, false)}
          >
            Explore Services
          </button>
        </div>

        {/* Statistics Bar */}
        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <div style={styles.statNum}>150+</div>
            <div style={styles.statDesc}>Projects Delivered</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNum}>99.9%</div>
            <div style={styles.statDesc}>System Reliability</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNum}>15+</div>
            <div style={styles.statDesc}>Countries Served</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNum}>24/7</div>
            <div style={styles.statDesc}>Engineering Support</div>
          </div>
        </div>

        {/* Core Services / Features */}
        <div style={{ marginTop: '100px' }}>
          <h2 style={styles.sectionHeading}>Core Engineering Capabilities</h2>
          <p style={styles.sectionDesc}>
            From concept to deployment, we build production-grade architectures tailored to your business goals.
          </p>

          <div style={styles.grid}>
            {[
              {
                icon: '💻',
                title: 'Full-Stack Web Development',
                text: 'High-speed, SEO-optimized, and responsive web applications built with React, Next.js, and Node.js.',
              },
              {
                icon: '📱',
                title: 'Mobile App Ecosystems',
                text: 'Cross-platform mobile apps for iOS and Android delivering native-like performance and intuitive UX.',
              },
              {
                icon: '☁️',
                title: 'Cloud & DevOps Architecture',
                text: 'Secure, scalable backend databases, Firebase/Supabase setups, and automated CI/CD pipelines.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <span style={styles.cardIcon}>{item.icon}</span>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee / Badges */}
        <div style={styles.techTicker}>
          <div style={styles.techTitle}>Powered By Enterprise-Grade Technology</div>
          <div style={styles.techBadges}>
            {['React / Next.js', 'Node.js', 'Spring Boot', 'Firebase', 'Supabase', 'AWS Cloud', 'Docker', 'TypeScript', 'GraphQL', 'Tailwind CSS'].map((tech, i) => (
              <div key={i} style={styles.techBadge}>{tech}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginTop: '120px' }}>
          <h2 style={styles.sectionHeading}>Why Industry Leaders Partner With Us</h2>
          <p style={styles.sectionDesc}>
            We combine rigorous technical discipline with agile execution to turn complex challenges into digital assets.
          </p>

          <div style={styles.grid}>
            {[
              { icon: '🎯', title: 'Precision Architecture', text: 'Clean, maintainable codebases built following enterprise best practices and design patterns.' },
              { icon: '⚡', title: 'Lightning Fast Performance', text: 'Optimized load times and high throughput engineered for heavy global traffic.' },
              { icon: '🛡️', title: 'Bank-Grade Security', text: 'Comprehensive security audits, encrypted databases, and robust authentication mechanisms.' },
              { icon: '🔄', title: 'Agile & Transparent', text: 'Sprint-based delivery cycles keeping you in total control of milestones and features.' },
              { icon: '📈', title: 'Scalable Growth', text: 'Architectures designed from day one to scale seamlessly as your user base multiplies.' },
              { icon: '🤝', title: 'Dedicated Partnerships', text: 'Long-term maintenance, monitoring, and iterative enhancements post-launch.' },
            ].map((item, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <span style={styles.cardIcon}>{item.icon}</span>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={styles.testimonialSection}>
          <h2 style={styles.sectionHeading}>Trusted By Visionary Founders</h2>
          <p style={styles.sectionDesc}>See how we helped businesses scale their technological infrastructure.</p>
          
          <div style={styles.testimonialGrid}>
            {[
              {
                quote: "The engineering depth and delivery speed blew us away. They completely revamped our core platform with zero downtime.",
                name: "Rahul Sharma",
                role: "CTO, Fintech Startup",
                initial: "R"
              },
              {
                quote: "Professional, extremely knowledgeable in modern stacks, and delivered our enterprise application two weeks ahead of schedule.",
                name: "Ananya Verma",
                role: "Product Director",
                initial: "A"
              }
            ].map((t, idx) => (
              <div key={idx} style={styles.testimonialCard}>
                <p style={{ color: '#cbd5e1', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>"{t.quote}"</p>
                <div style={styles.clientInfo}>
                  <div style={styles.clientAvatar}>{t.initial}</div>
                  <div>
                    <div style={styles.clientName}>{t.name}</div>
                    <div style={styles.clientRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div style={styles.ctaBox}>
          <h3 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: '700', marginBottom: '15px' }}>
            Ready to Scale Your Digital Infrastructure?
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            Let’s discuss how our engineering team can bring your product vision to life with precision and speed.
          </p>
          <button
            style={styles.primaryButton}
            onMouseEnter={(e) => handlePrimaryHover(e, true)}
            onMouseLeave={(e) => handlePrimaryHover(e, false)}
          >
            Schedule a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;