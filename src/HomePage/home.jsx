// src/components/Homepage/Homepage.jsx

import React from "react";
 // Correct path
import HeroSection from "../Components/Hero/herosection"; 
import SearchSection from "../Components/SearchBar/searchbar"// Correct path
import HeroSlider from "../Components/Heroslider/Heroslider";
import Specialization from "../Components/specialization/specialization";
import Specialists from "../Components/specialists/specialists";
import PatientCaring from "../Components/patientCaring/patientCaring";
import BlogSection from "../Components/blogSection/blogection";
import Team from "../Components/theTeam/theTeam";
import FAQsec from "../Components/FAQ/faq";
import DownloadSection from "../Components/DownloadSection/download";
import Footer from "../Components/Footer/footer";

const Homepage = () => {

  return (
    <>
    <div>
      <HeroSection />
       <div style={{ position: "relative" }}>
  <div
    style={{
      marginTop: "-4rem",   // only shifts the visible card
      position: "relative",
      zIndex: 10,
    }}
  >
    <SearchSection />
      </div>
      </div>
      <HeroSlider />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <BlogSection />
      <Team />
      <FAQsec />
       <DownloadSection />
      <Footer />
     
      </div>
    </>
  );
};

export default Homepage;
