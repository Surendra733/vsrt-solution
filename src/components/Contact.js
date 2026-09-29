import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert('Thank you for reaching out! Our enterprise team will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 500);
  };

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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '60px',
      alignItems: 'start',
    },
    infoColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
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
      textTransform: 'uppercase',
      letterSpacing: '1px',
      width: 'fit-content',
    },
    heading: {
      fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
      fontWeight: '800',
      lineHeight: '1.2',
    },
    paragraph: {
      color: '#94a3b8',
      lineHeight: '1.7',
      fontSize: '1.05rem',
    },
    contactCard: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '25px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    contactIcon: {
      fontSize: '1.8rem',
      background: 'rgba(250, 204, 21, 0.1)',
      padding: '12px',
      borderRadius: '12px',
    },
    formCard: {
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '40px',
      borderRadius: '24px',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginBottom: '8px',
      color: '#cbd5e1',
    },
    input: {
      width: '100%',
      padding: '14px 18px',
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: '#fff',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    textarea: {
      width: '100%',
      padding: '14px 18px',
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: '#fff',
      fontSize: '1rem',
      minHeight: '140px',
      outline: 'none',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      backgroundColor: '#facc15',
      color: '#0f172a',
      padding: '16px',
      borderRadius: '12px',
      fontWeight: '700',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(250, 204, 21, 0.4)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          
          {/* Info Column */}
          <div style={styles.infoColumn}>
            <div style={styles.badge}>Get In Touch</div>
            <h1 style={styles.heading}>Let’s Build Something Extraordinary Together</h1>
            <p style={styles.paragraph}>
              Ready to transform your digital infrastructure or scale your software product? 
              Contact our engineering consultants for a comprehensive discussion.
            </p>

            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📧</span>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Direct Email</div>
                <div style={{ fontWeight: '600', fontSize: '1.05rem' }}>vsrtinfo@gmail.com</div>
              </div>
            </div>

            <div style={styles.contactCard}>
              <span style={styles.contactIcon}>📞</span>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Enterprise Helpline</div>
                <div style={{ fontWeight: '600', fontSize: '1.05rem' }}>+91-8319428709</div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div style={styles.formCard}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '25px' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Business Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry / Consulting"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  required
                />
              </div>

              <button type="submit" style={styles.button}>
                {submitted ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;