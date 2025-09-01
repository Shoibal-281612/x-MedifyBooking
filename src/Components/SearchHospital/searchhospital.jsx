
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../SearchBar/searchbar";
import FAQsec from "../FAQ/faq";
import DownloadSection from "../DownloadSection/download";
import Footer from "../Footer/footer";
import oralHealthBanner from "../../Assets/oralBanner.png";
import HospitalCard from "../HospitalCard/hospitalcard";

const SearchHospital = () => {
  const location = useLocation();
  const { state, city } = location.state || {};

  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loadingCenters, setLoadingCenters] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      if (!state || !city) return;
      setLoadingCenters(true);
      setError(null);
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        if (!response.ok) throw new Error("Failed to fetch medical centers");
        const data = await response.json();
        setMedicalCenters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingCenters(false);
      }
    };

    fetchHospitals();
  }, [state, city]);

  return (
    <>
    <div style={{ padding: "2rem" }}>
      {/* Search bar stays here as well */}
      <Search />
      <div>
       <div style={{ flex: 1, marginLeft: "1.5rem" }}>
          <img
            src={oralHealthBanner}
            alt="Oral Health Banner"
            style={{
              width: "25%",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>

     <h1 style={{ marginTop: "1rem" }}>
  {state && city
    ? `${medicalCenters.length} medical centers available in ${city.toLowerCase()}`
    : "Please select a state and city"}
</h1>

<div style={{ marginTop: "1rem" }}>
  {medicalCenters.map((center, idx) => (
    <HospitalCard key={idx} center={center} />
  ))}
</div>
      </div>
    </div>
     <FAQsec />
       <DownloadSection />
      <Footer />
      </>
  );
};

export default SearchHospital;
