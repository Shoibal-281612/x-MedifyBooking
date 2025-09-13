import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./seachbar.css"
const Search = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingCenters, setLoadingCenters] = useState(false);
  const [error, setError] = useState(null);
  const [alertMessage, setAlertMessage] = useState(''); 
  const [medicalCenters, setMedicalCenters] = useState([]);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  // Fetch states
  const fetchStates = async () => {
    setLoadingStates(true);
    setError(null);
    try {
      const response = await fetch('https://meddata-backend.onrender.com/states');
      if (!response.ok) throw new Error('Failed to fetch states');
      const data = await response.json();
      setStates(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingStates(false);
    }
  };

  // Fetch cities
  const fetchCities = async (state) => {
    if (!state) {
      setCities([]);
      return;
    }
    setLoadingCities(true);
    setError(null);
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
      if (!response.ok) throw new Error('Failed to fetch cities');
      const data = await response.json();
      setCities(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingCities(false);
    }
  };

  // Fetch medical centers
  const fetchMedicalCenters = async (state, city) => {
    if (!state || !city) return;
    setLoadingCenters(true);
    setError(null);
    try {
      const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
      if (!response.ok) throw new Error('Failed to fetch medical centers');
      const data = await response.json();
      setMedicalCenters(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingCenters(false);
    }
  };

  // Effects
  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
      setMedicalCenters([]); 
    }
  }, [selectedState]);

  
   const handleSearch = () => {
    if (selectedState && selectedCity) {
     
      navigate("/hospitals", {
        state: { state: selectedState, city: selectedCity }
      });
    } else {
      setAlertMessage("Please select both a state and a city.");
    }
  };

  return (
    <>
      {alertMessage && (
        <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />
      )}

      <div className="app-container">
        {/* Search bar */}
        <div className="search-bar-section">
          <div id="state" className="input-container">
      <div className="custom-dropdown">
        <div className="dropdown-selected"
        onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)} >
          {selectedState || (loadingStates ? "Loading States..." : "Select a State")}
        </div>
        {isStateDropdownOpen && ( // Add this conditional rendering
  <ul className={`dropdown-list ${isStateDropdownOpen ? "show" : ""}`}>
    {states.map((state, i) => (
      <li
        key={i}
        onClick={() => {
          setSelectedState(state);
          setSelectedCity("");
          setIsStateDropdownOpen(false); // Close the dropdown on selection
        }}
      >
        {state}
      </li>
    ))}
  </ul>
)}
      </div>
    </div>



    {/* City Dropdown */}
    <div id="city" className="input-container">
      <div className="custom-dropdown">
        <div className={`dropdown-selected ${!selectedState || loadingCities ? "disabled" : ""}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
          {selectedCity || (loadingCities ? "Loading Cities..." : "Select a City")}
        </div>
       {isDropdownOpen && ( // <-- This line was missing
          <ul className={`dropdown-list ${isDropdownOpen ? "show" : ""}`}>
            {cities.map((city, i) => (
              <li
                key={i}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>


          <button type= "submit" onClick={handleSearch} className="Search-Button" id="searchBtn">
            Search
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {/* Medical Centers Section */}
        <div className="medical-centers-section">
          {loadingCenters && <p>Loading medical centers...</p>}
          {!loadingCenters && medicalCenters.length > 0 && (
            <>
              <p className="medical-centers-title">Medical Centers in {selectedCity}, {selectedState}</p>
              {medicalCenters.map((center, idx) => (
                <div key={idx} className="medical-center-card">
                  <strong>{center['Hospital Name']}</strong><br />
                  <span>{center.Address}, {center.City}, {center.State}</span><br />
                  <span>Phone: {center['Contact Number'] || 'N/A'}</span>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Service Section */}
        <div className="looking-for-section">
          <p className="looking-for-text">You may be looking for</p>
          <div className="service-cards-grid">
            <ServiceCard icon="🩺" label="Doctors" />
            <ServiceCard icon="🔬" label="Labs" />
            <ServiceCard icon="🏥" label="Hospitals" active />
            <ServiceCard icon="💊" label="Medical Store" />
            <ServiceCard icon="🚑" label="Ambulance" />
          </div>
        </div>
      </div>
    </>
  );
};

// Custom Alert Component
const CustomAlert = ({ message, onClose }) => (
  <div className="custom-alert-overlay">
    <div className="custom-alert-box">
      <p>{message}</p>
      <button className="custom-alert-btn" onClick={onClose}>OK</button>
    </div>
  </div>
);

// Service Card Component
const ServiceCard = ({ icon, label, active = false }) => (
  <div className={`service-card ${active ? 'service-card-active' : 'service-card-inactive'}`}>
    <div className="service-icon">{icon}</div>
    <span className={`service-label ${active ? 'service-label-active' : ''}`}>{label}</span>
  </div>
);

export default Search;
