import React from "react";
import "./hospitalCard.css";
import HospitalIcon from "../../Assets/HospitalIcon.png.png"
const HospitalCard = ({ center }) => {
  return (
    <div className="hospital-card">
      {/* Left icon */}
      <div className="hospital-card__icon">
        <img
          src={HospitalIcon} // hospital icon
          alt="Hospital"
        />
      </div>

      {/* Details */}
      <div className="hospital-card__details">
        <h3 className="hospital-card__name">{center["Hospital Name"]}</h3>
        <p className="hospital-card__address">
          {center.City}, {center.State}
        </p>
        <p className="hospital-card__speciality">
          {center["Specialties"] || "Speciality info not available"}
        </p>

        <div className="hospital-card__fee">
          <span className="free">FREE</span>
          <span className="striked">₹500</span> Consultation fee at clinic
        </div>
      </div>

      {/* Right side */}
      <div className="hospital-card__right">
        <p className="availability">Available Today</p>
        <button className="visit-btn">Book FREE Center Visit</button>
      </div>
    </div>
  );
};

export default HospitalCard;
