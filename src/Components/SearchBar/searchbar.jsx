import React, { useState } from 'react';

const Section = () => {
  // State to control the visibility of the search form
  const [showSearch, setShowSearch] = useState(false);

  // Event handler for the button click
  const handleButtonClick = () => {
    setShowSearch(true);
  };

  return (
    <>
    <style>
        {`
        /* Basic styling for the container */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Adjust as needed */
}

/* Style for the "Find Centres" button */
.find-centers-button {
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #007bff; /* Example blue color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.find-centers-button:hover {
  background-color: #0056b3;
}

/* Styling for the search section that appears */
.search-section {
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.search-section h2 {
  margin-bottom: 20px;
  color: #333;
}

.search-bars-container {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

/* Style for the input fields */
.search-input {
  width: 45%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

/* Style for the search button within the new section */
.search-button {
  padding: 12px 25px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}
        `}
    </style>
  
    <div>
      {/* The initial button section */}
      {!showSearch && (
        <div className="button-container">
          <button className="find-centers-button" onClick={handleButtonClick}>
            Find Centres
          </button>
        </div>
      )}

      {/* The search section (conditionally rendered) */}
      {showSearch && (
        <div className="search-section">
          <h2>Find Centres Near You</h2>
          <div className="search-bars-container">
            <input type="text" placeholder="Enter State" className="search-input" />
            <input type="text" placeholder="Enter City" className="search-input" />
          </div>
          <button className="search-button">Search</button>
        </div>
      )}
    </div>
      </>
  );
};

export default Section;