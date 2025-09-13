import React, { useState, useEffect } from "react";
import "./bookings.css";

const MyBookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hospitalList, setHospitalList] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  // Load hospital data from localStorage on mount
  useEffect(() => {
    const storedHospitals = JSON.parse(localStorage.getItem("hospitals")) || [];
    setHospitalList(storedHospitals);
    setFilteredHospitals(storedHospitals);
  }, []);

  // Search handler
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredHospitals(hospitalList);
    } else {
      const filtered = hospitalList.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHospitals(filtered);
    }
  };

  return (
    <div>
      <div className="Banner">
        <p>My Bookings</p>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by Hospital Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* Results Section */}
      <div className="results-section">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div key={index} className="hospital-card">
              <h3>{hospital.name}</h3>
              <p>{hospital.location}</p>
              <p>{hospital.date}</p>
              <p>{hospital.time}</p>
            </div>
          ))
        ) : (
          <p>No hospitals found</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
