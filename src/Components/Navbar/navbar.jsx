import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import HeroImage from "../../Assets/hero_image.png";

const navLinks = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <style>
        {` 
          .banner{
          background-color:dodgerblue;
          color:#f9fafb;
          padding:10px 10px;
          font-size:1.5rem;
          }
          .app-container {
              min-height: 100vh;
              background-color: #f9fafb;
              font-family: sans-serif;
              color: #1f2937;
            }
            
            .navbar {
              background-color:  #e0f2fe;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              padding: 1rem;
              position: sticky;
              top: 0;
              z-index: 50;
            }
            
            .container-fluid {
              margin-left: auto;
              margin-right: auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .logo {
              font-size: 1.5rem;
              font-weight: bold;
              color: #111827;
            }
            
            .nav-links-desktop {
              display: none;
              gap: 2.5rem;
              align-items: center;
              font-size:1.5rem;
            }
            
            @media (min-width: 1024px) {
              .nav-links-desktop {
                display: flex;
              }
            }
            
            .nav-link {
              font-size: 1rem;
              font-weight: 500;
              color: #4b5563;
              transition-property: color;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 200ms;
            }
            
            .nav-link:hover {
              color:  rgba(2,168,255,1);;
            }
            
            .booking-btn {
              padding: 0.5rem 1.5rem;
              background-color: rgba(2,168,255,1);;
              color: #ffffff;
              font-weight: 600;
              border-radius: 20px;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 200ms;
            }
            
            .booking-btn:hover {
              background-color: rgba(2,168,255,1);;
              transform: scale(1.05);
            }
            
            .mobile-menu-btn {
              display: flex;
            }
            
            @media (min-width: 1024px) {
              .mobile-menu-btn {
                display: none;
              }
            }
            
            .menu-toggle {
              color: #4b5563;
              transition-property: color;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 200ms;
            }
            
            .menu-toggle:hover {
              color: #111827;
            }
            
            .mobile-menu {
              background-color: #ffffff;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              position: fixed;
              top: 68px;
              left: 0;
              width: 100%;
              transform: translateX(-100%);
              transition-property: transform;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 300ms;
              z-index: 40;
            }
            
            .mobile-menu.open {
              transform: translateX(0);
            }
            
            .mobile-menu-items {
              display: flex;
              flex-direction: column;
              padding: 1rem;
              gap: 1rem;
            }
            
            .mobile-nav-link {
              display: block;
              color: #1f2937;
              font-weight: 500;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              transition-property: color;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 200ms;
            }
            
            .mobile-nav-link:hover {
              color: #2563eb;
            }
            
            .booking-btn-mobile {
              display: block;
              width: 100%;
              text-align: center;
              padding: 0.5rem 1rem;
              background-color: rgba(2,168,255,1);;
              color: #ffffff;
              font-weight: 600;
              border-radius: 9999px;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 200ms;
              margin-top: 1rem;
            }
            
            .booking-btn-mobile:hover {
              background-color: rgba(2,168,255,1);;
            }

            .hero-section {
              background-color: #e0f2fe;
              padding: 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              border-radius: 12px;
              gap: 2rem;
            }

            @media (min-width: 768px) {
              .hero-section {
                flex-direction: row;
                text-align: left;
                padding: 4rem;
                justify-content: space-between;
              }
          }
            .hero-heading {
              font-size: 3rem;
              font-weight: 700;
              line-height: 1.2;
              color: #1f2937;
              
            }
               .hero-Heading {
              font-size: 4.25rem;
              font-weight: 700;
              line-height: 1.2;
              color: #1f2937;
              
            }

            .hero-subheading {
              font-size: 1.85rem;
              color: #4b5563;
              margin-top: 1rem;
              line-height: 1.5;
            }

            .hero-button {
              margin-top: 2rem;
              padding: 1.5rem 4rem;
              background-color: rgba(2,168,255,1);
              color: #ffffff;
              font-weight: 600;
              font-size:1.5rem;
              border-radius: 7px;
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 200ms;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .hero-button:hover {
              background-color: #1d4ed8;
              transform: translateY(-2px);
            }

            .hero-image-container {
              flex-shrink: 0;
              margin-top: 2rem;
            }

            @media (min-width: 768px) {
              .hero-image-container {
                margin-top: 0;
                margin-left: 2rem;
              }
            }
          `}
      </style>

      <div className="banner">
        <p>
          <center>
            The health and weel-being of our patient and their health-care team
            will always be our priority, so we follow the best  practices for
            cleanliness .
          </center>
        </p>
      </div>
      <div className="app-container">
        {/* The style block is moved here to be a child of a React component, which is required for it to be rendered correctly */}

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="container-fluid">
            {/* Logo or App Name */}
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Medify"></img>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="nav-links-desktop">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="nav-link"
                >
                  {link}
                </Link>
              ))}
              <Link to="/my-bookings" className="booking-btn">
                My Bookings
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
              >
                <svg
                  className="w-8 h-8"
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
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-items">
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
              to="/my-bookings"
              className="booking-btn-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              My Bookings
            </Link>
          </div>
        </div>

        {/* Router Routes */}
        <main className="main-content">
          <HeroSection />
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="main-heading">Welcome to the Landing Page!</h1>
              }
            />
            <Route
              path="/my-bookings"
              element={<h1 className="main-heading">My Bookings Page</h1>}
            />
            <Route
              path="/find-doctors"
              element={<h1 className="main-heading">Find Doctors Section</h1>}
            />
            <Route
              path="/hospitals"
              element={<h1 className="main-heading">Hospitals Section</h1>}
            />
            <Route
              path="/medicines"
              element={<h1 className="main-heading">Medicines Section</h1>}
            />
            <Route
              path="/surgeries"
              element={<h1 className="main-heading">Surgeries Section</h1>}
            />
            <Route
              path="/software-for-provider"
              element={
                <h1 className="main-heading">Software for Provider Section</h1>
              }
            />
            <Route
              path="/facilities"
              element={<h1 className="main-heading">Facilities Section</h1>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Defining the HeroSection component with standard CSS
const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <section className="hero-content">
          <h1 className="hero-heading">Skip the travel! Find Online</h1>
          <h1 className="hero-Heading">Medical Centers</h1>
          <p className="hero-subheading">
            Connect instantly with a 24x7 specialist or choose to <br />
            video visit a particular doctor.
          </p>
          <button className="hero-button">Find Centers</button>
        </section>
        <div className="hero-image-container">
          <img src={HeroImage} alt="Doctors" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
