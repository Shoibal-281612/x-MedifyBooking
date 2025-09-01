import React, { useState } from "react";
import "./hospitalCard.css";
import HospitalIcon from "../../Assets/HospitalIcon.png.png";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HospitalCard = ({ center }) => {
  const [showSlots, setShowSlots] = useState(false);

  // Generate 7 days
  const generateSlots = () => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      days.push({
        dayLabel:
          i === 0 ? "Today" : i === 1 ? "Tomorrow" : date.toDateString().slice(0, 10),
        slots: {
          morning: ["11:30 AM"],
          afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
          evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
        },
      });
    }
    return days;
  };

  const slotData = generateSlots();

  // ✅ Group into chunks of 3 days
  const chunkDays = (arr, size) => {
    return arr.reduce((chunks, item, i) => {
      if (i % size === 0) chunks.push(arr.slice(i, i + size));
      return chunks;
    }, []);
  };

  const dayChunks = chunkDays(slotData, 3);

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
                <div className="days-column">
                  {chunk.map((day, i) => (
                    <div key={i} className="day-row">
                      <h4>{day.dayLabel}</h4>
                      <p className="slot-availability">
                        {day.slots.morning.length +
                          day.slots.afternoon.length +
                          day.slots.evening.length}{" "}
                        Slots Available
                      </p>

                      <div className="slot-group">
                        <strong>Morning</strong>
                        <div className="slots">
                          {day.slots.morning.map((time, idx) => (
                            <button key={idx} className="slot-btn">
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="slot-group">
                        <strong>Afternoon</strong>
                        <div className="slots">
                          {day.slots.afternoon.map((time, idx) => (
                            <button key={idx} className="slot-btn">
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="slot-group">
                        <strong>Evening</strong>
                        <div className="slots">
                          {day.slots.evening.map((time, idx) => (
                            <button key={idx} className="slot-btn">
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
