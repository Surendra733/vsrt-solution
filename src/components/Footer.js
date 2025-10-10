import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 VSR Tech Solution. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;