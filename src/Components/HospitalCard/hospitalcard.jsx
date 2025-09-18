import React, { useState } from "react";
import "./hospitalCard.css";
import HospitalIcon from "../../Assets/HospitalIcon.png.png";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Modal from "../Confirmation_modal/modal";

const HospitalCard = ({ center }) => {
  const [showSlots, setShowSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Generate 7 days with slots
  const generateSlots = () => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      days.push({
        dayLabel:
          i === 0
            ? "Today"
            : i === 1
            ? "Tomorrow"
            : date.toDateString().slice(0, 10),
        dateObj: date, // ✅ keep actual date
        slots: {
          Morning: ["11:30 AM"],
          Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
          Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
        },
      });
    }
    return days;
  };

  const slotData = generateSlots();

  // ✅ Group into chunks of 3 days for Swiper
  const chunkDays = (arr, size) => {
    return arr.reduce((chunks, item, i) => {
      if (i % size === 0) chunks.push(arr.slice(i, i + size));
      return chunks;
    }, []);
  };

  const dayChunks = chunkDays(slotData, 3);

  // Handle booking confirmation
  const confirmBooking = () => {
    if (selectedSlot) {
      const booking = {
        hospital: center["Hospital Name"],
        city: center.City,
        state: center.State,
        specialties: center["Specialties"] || "Not available",
        slot: {
          date: selectedSlot.date, // real yyyy-mm-dd
          time: selectedSlot.time,
        },
        bookedAt: new Date().toISOString(),
      };

      // Save to localStorage
      const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      existingBookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      alert(`✅ Booking confirmed for ${booking.slot.date} at ${booking.slot.time}`);
      setShowModal(false);
      setSelectedSlot(true);
    }
  };

  return (
    <div className="hospital-card" data-testid="hospital-card">
      {/* Left icon */}
      <div className="hospital-card__icon">
        <img src={HospitalIcon} alt="Hospital" />
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
        <button className="visit-btn" onClick={() => setShowSlots(!showSlots)}>
          {showSlots ? "Hide Slots" : "Book FREE Center Visit"}
        </button>
      </div>

      {/* Booking Slots */}
      {showSlots && (
        <div className="booking-slots">
          <Swiper modules={[Navigation]} spaceBetween={16} navigation>
            {dayChunks.map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div className="days-row">
                  {chunk.map((day, i) => (
                    <div key={i} className="day-column">
                      <h4>{day.dayLabel}</h4>
                      <p className="slot-availability">
                        {day.slots.Morning.length +
                          day.slots.Afternoon.length +
                          day.slots.Evening.length}{" "}
                        Slots Available
                      </p>

                      {["Morning", "Afternoon", "Evening"].map((session) => (
                        <div className="slot-group" key={session}>
                          <strong>
                            {session.charAt(0).toUpperCase() + session.slice(1)}
                          </strong>
                           {session === "Morning" && (
      <p className="logo-description" style={{ display: "none" }}>
        Morning, Afternoon,Evening
      </p>
    )}
                          <div className="slots">
                            {day.slots[session].map((time, idx) => (
                              <button
                                key={idx}
                                className="slot-btn"
                                onClick={() => {
                                  const dateStr = day.dateObj
                                    .toISOString()
                                    .split("T")[0]; // yyyy-mm-dd

                                  setSelectedSlot({
                                    day: day.dayLabel,
                                    date: dateStr,
                                    time,
                                  });
                                  setShowModal(true);
                                }}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Confirmation Modal */}
      {showModal && selectedSlot && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={confirmBooking}
          hospitalName={center["Hospital Name"]}
          slot={selectedSlot}
        />
      )}
    </div>
  );
};

export default HospitalCard;
