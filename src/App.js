// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage/home";
import HeroSection from "./Components/Hero/herosection"; // Assuming this is also a separate component
import Navbar from "./Components/Navbar/navbar"; // Import Navbar here to use on all pages if needed

// Placeholder components for other pages
const FindDoctors = () => <div>Find Doctors Page</div>;
const Hospitals = () => <div>Hospitals Page</div>;
const Medicines = () => <div>Medicines Page</div>;
const Surgeries = () => <div>Surgeries Page</div>;
const SoftwareForProvider = () => <div>Software for Provider Page</div>;
const Facilities = () => <div>Facilities Page</div>;
const MyBookings = () => <div>My Bookings Page</div>;

function App() {
  return (
    // The BrowserRouter must wrap your entire application
    <BrowserRouter>
      {/* You can render a Navbar outside of Routes if you want it on every page */}
      <Navbar /> 
      <Routes>
        {/* The Homepage component is rendered when the path is exactly "/" */}
        <Route path="/" element={<Homepage />} />
        
        {/* Render a specific component for each link */}
        <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/surgeries" element={<Surgeries />} />
        <Route path="/software-for-provider" element={<SoftwareForProvider />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
