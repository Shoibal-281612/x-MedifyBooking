import React from "react";
import "./faq.css";
import faqImage from "../../Assets/faq.png"; // replace with your local image path

const FAQSection = () => {
  return (
    <section className="faq-section">
      <p className="faq-subtitle">Get Your Answer</p>
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-content">
        {/* Left Side - Image with Badge */}
        <div className="faq-left">
          <div className="faq-image-wrapper">
            <img src={faqImage} alt="Doctor with patient" className="faq-image" />
            <div className="faq-badge">
              <span className="emoji">😊</span>
              <div>
                <strong>84k+</strong>
                <p>Happy Patients</p>
              </div>
            </div>
            <div className="faq-icon">🌸</div>
          </div>
        </div>

        {/* Right Side - FAQ List */}
        <div className="faq-right">
          <ul className="faq-list">
            <li>
              <span>Why choose our medical for your family?</span>
              <span className="faq-plus">+</span>
            </li>
            <li>
              <span>Why we are different from others?</span>
              <span className="faq-plus">+</span>
            </li>
            <li>
              <span>Trusted & experience senior care & love</span>
              <span className="faq-plus">+</span>
            </li>
            <li>
              <span>How to get appointment for emergency cases?</span>
              <span className="faq-plus">+</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
