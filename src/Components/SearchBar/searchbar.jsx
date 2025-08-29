import React, { useState, useEffect } from 'react';

// Main component for the search UI
const Search = () => {
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
      setMedicalCenters([]); // reset when state changes
    }
  }, [selectedState]);

  
  // Handle search
  const handleSearch = () => {
    if (selectedState && selectedCity) {
      fetchMedicalCenters(selectedState, selectedCity); // ✅ fetch on button click
    } else {
      setAlertMessage("Please select both a state and a city.");
    }
  };

  return (
    <>
      {alertMessage && (
        <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />
      )}

      {/* ✅ Your existing style block remains unchanged */}
      <style>{`
        
          .app-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
            max-width: 60rem;
            margin: 2rem auto;
            gap: 2rem;
            font-family: sans-serif;
          }

          .search-bar-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 1rem;
          }

          @media (min-width: 768px) {
            .search-bar-section {
              flex-direction: row;
              gap: 1rem;
            }
          }

          .input-container {
            position: relative;
            width: 100%;
          }

          @media (min-width: 768px) {
            .input-container {
              width: 50%;
            }
          }

          .search-input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            outline: none;
          }

          .search-input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
          }

          .search-button {
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 600;
            background-color: #3b82f6;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s;
          }

          .search-button:hover {
            background-color: #2563eb;
          }

          .error-message {
            color: #ef4444;
            font-size: 0.875rem;
          }

          .looking-for-section {
            text-align: center;
            width: 100%;
            margin-top: 1rem;
          }

          .looking-for-text {
            color: #6b7280;
            margin-bottom: 1rem;
            font-size: 1.125rem;
          }

          .service-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }

          @media (min-width: 640px) {
            .service-cards-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }

          @media (min-width: 1024px) {
            .service-cards-grid {
              grid-template-columns: repeat(5, minmax(0, 1fr));
            }
          }

          .service-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.2s;
          }

          .service-card-active {
            background-color: #dbeafe;
            color: #2563eb;
            border: 2px solid #3b82f6;
          }

          .service-card-inactive {
            background-color: #f3f4f6;
            color: #6b7280;
          }

          .service-card-inactive:hover {
            background-color: #e5e7eb;
          }

          .service-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .service-label {
            font-weight: 500;
          }

          .medical-centers-section {
            width: 100%;
          }

          .medical-centers-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .medical-center-card {
            padding: 1rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
            background: #f9fafb;
          }

          .custom-alert-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.5);
            z-index: 999;
          }

          .custom-alert-box {
            background: white;
            padding: 1.5rem;
            border-radius: 0.5rem;
            max-width: 300px;
            text-align: center;
          }

          .custom-alert-btn {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
          }

          .custom-alert-btn:hover {
            background: #2563eb;
          }
        `}
        </style>

      <div className="app-container">
        {/* Search bar */}
        <div className="search-bar-section">
          <div id="state" className="input-container">
            <select
              className="search-input"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity('');
              }}
            >
              <option value="" disabled hidden>
                {loadingStates ? 'Loading States...' : 'Select a State'}
              </option>
              {states.map((state, i) => (
                <option key={i} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div id="city" className="input-container">
            <select
              className="search-input"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState || loadingCities}
            >
              <option value="" disabled hidden>
                {loadingCities ? 'Loading Cities...' : 'Select a City'}
              </option>
              {cities.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <button onClick={handleSearch} className="search-button">
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
