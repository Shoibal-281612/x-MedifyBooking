// src/components/Modal.jsx
import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ show, onClose, onConfirm, hospitalName, slot }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h3>Confirm Booking</h3>
        <p>
          Hospital: <strong>{hospitalName}</strong>
        </p>
        <p>
          Slot: <strong>{slot?.day}, {slot?.time}</strong>
        </p>
        <div className="modal-actions">
          <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
};
console.log("Modal rendered");

export default Modal;
