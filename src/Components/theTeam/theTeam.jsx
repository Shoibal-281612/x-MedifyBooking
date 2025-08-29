import React from 'react';
import teamCard from "../../Assets/family-cards.png"
// This component recreates the "Our Families" UI section
const OurFamiliesSection = () => {
  return (
    <>
      {/* This style block contains all the CSS necessary for the component.
        It's included here for a self-contained, runnable example.
      */}
      <style>
        {`
          body {
              font-family: 'Inter', sans-serif;
              background-color: #f9fafb;
          }
          .main-container {
              background-color: #f2f7ff;
              background-image: linear-gradient(135deg, #f2f7ff 0%, #d4e2f8 100%);
          }
          .content-card {
              background-color: #ffffff;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              margin: 0 auto;
              display: flex;
              align-items: center;
              flex-direction: column;
              padding: 40px;
              gap: 40px;
          }
          @media (min-width: 1024px) {
              .content-card {
                  flex-direction: row;
                  padding: 60px;
                  gap: 80px;
              }
          }
          .text-content {
              flex: 1;
              text-align: center;
          }
          @media (min-width: 1024px) {
              .text-content {
                  text-align: left;
              }
          }
          .subheading {
              font-size: 0.9rem;
              font-weight: 600;
              color: #02a8ff;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              margin-bottom: 12px;
          }
          .heading {
              font-size: 2.5rem;
              font-weight: 700;
              color: #1f2937;
              margin-bottom: 20px;
              line-height: 1.2;
          }
          .description {
              font-size: 1rem;
              color: #4b5563;
              line-height: 1.6;
              max-width: 600px;
              margin: 0 auto;
          }
          @media (min-width: 1024px) {
              .description {
                  margin: 0;
              }
          }
          .image-placeholder {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .image-placeholder img {
              max-width: 100%;
              height: auto;
              border-radius: 10px;
              box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          }
        `}
      </style>

      <div className="main-container">
          <div className="content-card">
              {/* Text Content */}
              <div className="text-content">
                  <p className="subheading">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                  <h1 className="heading">Our Families</h1>
                  <p className="description">
                      We will work with you to develop individualized care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                  </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="image-placeholder">
                  {/* Replace this with your actual image file path or data URL */}
                  <img src={teamCard} alt="Placeholder for 4 cards block" />
              </div>
          </div>
      </div>
    </>
  );
};

export default OurFamiliesSection;
