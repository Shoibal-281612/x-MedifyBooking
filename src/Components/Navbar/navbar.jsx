// src/components/Navbar/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
  ];

  const styles = `
    .navbar-container {
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #1f2937;
    }

    .top-bar {
      background-color: #3b82f6;
      color: #f9fafb;
      padding: 0.5rem;
      font-size: 0.875rem;
      text-align: center;
    }

    .main-nav-wrapper {
      background-color: #dbeafe;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .nav-content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: 700;
      color: #111827;
      text-decoration: none;
    }

    .desktop-links {
      display: none;
      align-items: center;
      gap: 2rem;
      font-size: 0.875rem;
    }
    
    @media (min-width: 1024px) {
      .desktop-links {
        display: flex;
      }
    }

    .nav-link {
      color: #4b5563;
      text-decoration: none;
      transition: color 200ms ease-in-out;
    }
    
    .nav-link:hover {
      color: #2563eb;
    }

    .bookings-btn {
      background-color: #3b82f6;
      color: white;
      font-weight: 600;
      padding: 0.5rem 1.5rem;
      border-radius: 9999px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transition: all 200ms ease-in-out;
      text-decoration: none;
    }

    .bookings-btn:hover {
      background-color: #2563eb;
      transform: scale(1.05);
    }
    
    .mobile-menu-button {
      display: flex;
      align-items: center;
    }

    @media (min-width: 1024px) {
      .mobile-menu-button {
        display: none;
      }
    }

    .mobile-menu-button button {
      color: #4b5563;
      background: none;
      border: none;
      cursor: pointer;
    }

    .mobile-menu-button button:focus {
      outline: none;
    }

    .mobile-menu-svg {
      width: 2rem;
      height: 2rem;
      transition: color 200ms ease-in-out;
    }

    .mobile-menu-svg:hover {
      color: #111827;
    }

    .mobile-menu-panel {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: white;
      transition: transform 300ms ease-in-out;
      z-index: 40;
      transform: translateX(-100%);
    }

    .mobile-menu-panel.open {
      transform: translateX(0);
    }

    .mobile-menu-items {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .close-button-container {
      text-align: right;
    }

    .mobile-nav-link {
      display: block;
      color: #1f2937;
      text-decoration: none;
      font-size: 1.125rem;
      transition: color 200ms;
      padding: 0.5rem 0;
    }

    .mobile-nav-link:hover {
      color: #2563eb;
    }

    .bookings-btn-mobile {
      display: block;
      text-align: center;
      background-color: #3b82f6;
      color: white;
      font-weight: 600;
      padding: 0.5rem 1.5rem;
      border-radius: 9999px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transition: background-color 200ms;
      text-decoration: none;
      margin-top: 1rem;
    }

    .bookings-btn-mobile:hover {
      background-color: #2563eb;
    }
  `;

  return (
    <nav className="navbar-container">
      <style>{styles}</style>
      <div className="top-bar">
        <p>The health and well-being of our patient and their health-care team will always be our priority, so we follow the best practices for cleanliness.</p>
      </div>

      <div className="main-nav-wrapper">
        <div className="nav-content">
          {/* Logo or App Name */}
          <Link to="/" className="logo">
            Medify Booking
          </Link>

          {/* Desktop Navigation Links */}
          <div className="desktop-links">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                className="nav-link"
              >
                {link}
              </Link>
            ))}
            <Link
              to="/bookings"
              className="bookings-btn"
            >
              My Bookings
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="mobile-menu-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-panel ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-items">
          <div className="close-button-container">
            <button
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="mobile-menu-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(/\s/g, "-")}`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            to="/bookings"
            className="bookings-btn-mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            My Bookings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
