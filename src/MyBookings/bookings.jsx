import React, { useEffect, useState } from "react";
import "./bookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("bookings")) || [];

    // Filter out malformed items and ensure slot fields exist
    const clean = raw
      .filter(
        (b) => b && b.slot && b.slot.date && b.slot.time
      )
      .map((b) => ({
        ...b,
        slot: {
          date: b.slot.date || "",
          time: b.slot.time || "",
        },
      }));

    setBookings(clean);
  }, []);

  return (
    <div className="my-bookings">
      <div className="banner">
        <h1>My Bookings</h1>
      </div>

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
