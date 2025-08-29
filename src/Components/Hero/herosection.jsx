
import React from "react";
import HeroImage from "../../Assets/hero_image.png";
const styles = `
  .hero-section {
    background-color: #e0f2fe;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .hero-section {
      flex-direction: row;
      text-align: left;
      padding: 4rem;
      justify-content: space-between;
    }
  }

  .hero-heading {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1f2937;
  }
  
  .hero-Heading {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1f2937;
  }

  .hero-subheading {
    font-size: 1.5rem;
    color: #4b5563;
    margin-top: 1rem;
    line-height: 1.5;
  }

  .hero-button {
    margin-top: 2rem;
    padding: 1.25rem 3rem;
    background-color: rgba(2,168,255,1);
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 7px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .hero-button:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }

  .hero-image-container {
    flex-shrink: 0;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .hero-image-container {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

const HeroSection = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="hero-section">
        <section className="hero-content">
          <h1 className="hero-heading">Skip the travel! Find Online</h1>
          <h1 className="hero-Heading">Medical Centers</h1>
          <p className="hero-subheading">
            Connect instantly with a 24x7 specialist or choose to <br />
            video visit a particular doctor.
          </p>
          <button className="hero-button">Find Centers</button>
        </section>
        <div className="hero-image-container">
          <img src={HeroImage} alt="Doctors" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;