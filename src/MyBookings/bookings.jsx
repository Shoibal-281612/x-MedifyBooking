import React, { useEffect, useState } from "react";
import "./bookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  return (
    <div className="my-bookings">
      {/* Banner */}
      <div className="banner">
        <h1>My Bookings</h1>
      </div>

      {/* Booking list */}
      <div className="bookings-list">
        {bookings.length === 0 ? (
          <p className="no-bookings">❌ No bookings yet</p>
        ) : (
          bookings.map((b, idx) => (
            <div key={idx} className="booking-card">
              <h3 className="hospital-name">{b.hospital}</h3>
              <p className="hospital-location">
                {b.city}, {b.state}
              </p>
              <p className="specialties">
                {b.specialties || "Speciality info not available"}
              </p>
              <div className="slot-info">
                <span className="slot-date">📅 {b.slot.date}</span>
                <span className="slot-time">⏰ {b.slot.time}</span>
              </div>
              <p className="booked-at">
                Booked on: {new Date(b.bookedAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;
