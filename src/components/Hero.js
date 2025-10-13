import React from 'react';
import './styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to <span>VSR Tech Solution</span></h1>
        <p>
          Empowering Businesses with Smart, Scalable, and Secure Technology Solutions.
          We specialize in <b>Web Development</b>, <b>App Development</b>, and <b>Software Solutions</b>.
        </p>
        <button className="hero-button">Get Started</button>

        {/* Features */}
        <div className="features">
          <div className="feature-card">
            <h3>Web Development</h3>
            <p>Build responsive, beautiful, and high-performance websites for your business.</p>
          </div>
          <div className="feature-card">
            <h3>App Development</h3>
            <p>Custom mobile apps for Android & iOS with modern UI and top performance.</p>
          </div>
          <div className="feature-card">
            <h3>Software Solutions</h3>
            <p>Powerful software tools tailored to automate and optimize business processes.</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose">
          <h2>Why Choose VSR Tech Solution?</h2>
          <p>
            We’re passionate about turning ideas into impactful digital products. Our goal is to
            empower startups and businesses through technology and innovation.
          </p>

          <div className="why-grid">
            <div className="why-box">
              <h4>💡 Innovative Design</h4>
              <p>Beautiful, user-friendly interfaces that make your brand shine.</p>
            </div>
            <div className="why-box">
              <h4>⚙️ Latest Technology</h4>
              <p>We use React, Spring Boot, Node.js, Firebase, and more.</p>
            </div>
            <div className="why-box">
              <h4>🔒 Secure & Reliable</h4>
              <p>Built with security, scalability, and performance in mind.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta">
          <h3>Ready to Build Something Amazing?</h3>
          <p>Let’s transform your ideas into success with cutting-edge technology.</p>
          <button className="cta-button">Contact Us Today</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
