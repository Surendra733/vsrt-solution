import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    {
      path: "/industrial-practice",
      label: "Industrial Practice",
    },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* LEFT SIDE */}
          <div className="navbar-left">
            <Link to="/" className="brand">
              <div className="logo-box">⚡</div>

              {/* <div className="brand-name">
                VSR <span>TECH</span>
              </div> */}
              <div className="brand-name">
  VSRTSolution
</div>
            </Link>

            <div className="status-badge desktop-status">
              <span className="pulse-dot"></span>
              Systems Operational
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="desktop-navigation">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">
            <Link to="/contact" className="deploy-button">
              Inquery
            </Link>

            <button
              className="hamburger-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>

          <div className="mobile-menu-header">
            <span>Navigation</span>

            <div className="status-badge">
              <span className="pulse-dot"></span>
              Live
            </div>
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={
                location.pathname === item.path
                  ? "mobile-nav-link mobile-active"
                  : "mobile-nav-link"
              }
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mobile-deploy-button"
          >
            Deploy Project
          </Link>
        </div>
      </nav>

      {/* NAVBAR CSS */}
      <style>{`

        /* =========================
           NAVBAR
        ========================= */

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;

          background: rgba(3, 7, 18, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          border-bottom: 1px solid rgba(255, 255, 255, 0.08);

          transition:
            background 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(3, 7, 18, 0.95);

          border-bottom: 1px solid rgba(250, 204, 21, 0.25);

          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;

          min-height: 76px;

          padding: 12px 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;
        }

        /* =========================
           BRAND
        ========================= */

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;

          text-decoration: none;
        }

        .logo-box {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            linear-gradient(
              135deg,
              #facc15,
              #f97316
            );

          border-radius: 10px;

          font-size: 20px;

          box-shadow:
            0 0 20px rgba(250, 204, 21, 0.4);
        }

        .brand-name {
          color: white;

          font-size: 21px;
          font-weight: 800;

          letter-spacing: -0.5px;
        }

        .brand-name span {
          background:
            linear-gradient(
              135deg,
              #facc15,
              #f97316
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =========================
           STATUS
        ========================= */

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 5px 10px;

          border-radius: 20px;

          background: rgba(34, 197, 94, 0.08);

          border: 1px solid rgba(34, 197, 94, 0.25);

          color: #4ade80;

          font-size: 12px;
          font-weight: 600;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #4ade80;

          box-shadow:
            0 0 10px #4ade80;
        }

        /* =========================
           DESKTOP NAVIGATION
        ========================= */

        .desktop-navigation {
          display: flex;
          align-items: center;
          gap: 5px;

          padding: 5px;

          background: rgba(255, 255, 255, 0.04);

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 40px;

          backdrop-filter: blur(10px);
        }

        .nav-link {
          color: #cbd5e1;

          text-decoration: none;

          font-size: 14px;
          font-weight: 600;

          padding: 9px 16px;

          border-radius: 30px;

          transition: all 0.25s ease;
        }

        .nav-link:hover {
          color: white;

          background: rgba(255, 255, 255, 0.08);
        }

        .nav-link.active {
          color: #0f172a;

          background: #facc15;

          box-shadow:
            0 4px 15px rgba(250, 204, 21, 0.25);
        }

        /* =========================
           RIGHT ACTIONS
        ========================= */

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .deploy-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 10px 20px;

          color: #0f172a;

          text-decoration: none;

          font-size: 14px;
          font-weight: 700;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #facc15,
              #f97316
            );

          box-shadow:
            0 4px 20px rgba(250, 204, 21, 0.3);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .deploy-button:hover {
          transform: translateY(-2px) scale(1.03);

          box-shadow:
            0 8px 25px rgba(250, 204, 21, 0.45);
        }

        /* =========================
           HAMBURGER
        ========================= */

        .hamburger-button {
          display: none;

          width: 42px;
          height: 42px;

          align-items: center;
          justify-content: center;

          color: white;

          background: rgba(255, 255, 255, 0.05);

          border: 1px solid rgba(255, 255, 255, 0.1);

          border-radius: 10px;

          font-size: 20px;

          cursor: pointer;
        }

        /* =========================
           MOBILE MENU
        ========================= */

        .mobile-menu {
          position: absolute;

          top: 86px;
          left: 20px;
          right: 20px;

          padding: 22px;

          display: flex;
          flex-direction: column;
          gap: 10px;

          background: rgba(15, 23, 42, 0.98);

          border:
            1px solid rgba(250, 204, 21, 0.2);

          border-radius: 20px;

          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.7);

          opacity: 0;
          visibility: hidden;

          transform:
            translateY(-15px)
            scale(0.98);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;
        }

        .mobile-menu-open {
          opacity: 1;
          visibility: visible;

          transform:
            translateY(0)
            scale(1);
        }

        .mobile-menu-header {
          display: flex;

          justify-content: space-between;
          align-items: center;

          margin-bottom: 8px;

          color: #94a3b8;

          font-size: 12px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        .mobile-nav-link {
          color: white;

          text-decoration: none;

          font-size: 16px;
          font-weight: 600;

          padding: 12px 15px;

          border-radius: 10px;

          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .mobile-active {
          color: #facc15;

          background:
            rgba(250, 204, 21, 0.1);
        }

        .mobile-deploy-button {
          margin-top: 8px;

          text-align: center;

          padding: 12px;

          color: #0f172a;

          text-decoration: none;

          font-weight: 700;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #facc15,
              #f97316
            );
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1100px) {

          .desktop-navigation {
            gap: 2px;
          }

          .nav-link {
            padding: 8px 11px;
            font-size: 13px;
          }

          .desktop-status {
            display: none;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 900px) {

          .desktop-navigation {
            display: none;
          }

          .hamburger-button {
            display: flex;
          }

          .deploy-button {
            display: none;
          }

          .navbar-container {
            padding:
              12px 18px;
          }

        }

        @media (max-width: 500px) {

          .brand-name {
            font-size: 18px;
          }

          .logo-box {
            width: 36px;
            height: 36px;
            font-size: 17px;
          }

          .navbar-left {
            gap: 0;
          }

        }

      `}</style>
    </>
  );
};

export default Navbar;