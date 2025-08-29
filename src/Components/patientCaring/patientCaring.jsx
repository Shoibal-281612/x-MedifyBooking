import React from 'react';
import dctr from "../../Assets/doctor.png";
import dctr2 from "../../Assets/doctor02.png"

const patientCaring = () => {
  return (
    <>
      <style>
        {`
          .container-fluid {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f3f4f6;
            padding: 1rem;
          }

          .main-card {
            max-width: 90rem; /* Corresponds to max-w-7xl */
            height:auto;
            width: 100%;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Corresponds to shadow-2xl */
          }

          .flex-row {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 1.5rem;
          }

          @media (min-width: 1024px) {
            .flex-row {
              flex-direction: row;
            }
          }

          .left-section {
            position: relative;
            width: 100%;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          @media (min-width: 1024px) {
            .left-section {
              width: 50%;
              padding: 2.5rem;
            }
          }

          .top-image-container {
            position: relative;
            width: 100%;
            height: 350px;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Corresponds to shadow-lg */
          }

          .top-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;
          }

          .consultation-card {
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            background-color: #fff;
            padding: 1rem;
            border-radius: 0.75rem; /* Corresponds to rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e5e7eb;
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .card-icon {
            width: 1.5rem;
            height: 1.5rem;
            color: #3b82f6;
            flex-shrink: 0;
          }

          .card-title {
            font-weight: 600; /* Corresponds to font-semibold */
            color: #1f2937; /* Corresponds to text-gray-800 */
            font-size: 1rem; /* Corresponds to text-base */
          }

          .card-subtitle {
            font-size: 0.75rem; /* Corresponds to text-xs */
            color: #6b7280; /* Corresponds to text-gray-500 */
            margin-top: 0.125rem;
          }

          .bottom-image-container {
            width: 75%;
            position: relative;
            z-index: 10;
            margin-top: -4rem; /* Corresponds to -mt-16 */
            border-radius: 1.5rem;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            height: 280px;
          }

          @media (min-width: 640px) {
            .bottom-image-container {
              margin-top: -6rem; /* Corresponds to sm:-mt-24 */
            }
          }

          .bottom-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1.5rem;
          }

          .right-section {
            width: 100%;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          @media (min-width: 1024px) {
            .right-section {
              width: 50%;
              padding: 2.5rem;
            }
          }

          .info-title {
            color: #3b82f6;
            font-weight: 700;
            font-size: 0.875rem; /* Corresponds to text-sm */
            letter-spacing: 0.05em; /* Corresponds to tracking-wide */
            text-transform: uppercase;
            margin-bottom: 0.5rem;
          }

          .main-heading {
            font-size: 2rem; /* Corresponds to text-3xl */
            font-weight: 800; /* Corresponds to font-extrabold */
            color: #1f2937;
            margin-bottom: 1.5rem;
            line-height: 1.25;
          }

          @media (min-width: 640px) {
            .main-heading {
              font-size: 2.25rem; /* Corresponds to sm:text-4xl */
            }
          }

          .main-paragraph {
            color: #4b5563; /* Corresponds to text-gray-600 */
            margin-bottom: 2rem;
            line-height: 1.625; /* Corresponds to leading-relaxed */
            font-size: 0.875rem;
          }

          @media (min-width: 640px) {
            .main-paragraph {
              font-size: 1rem; /* Corresponds to sm:text-base */
            }
          }

          .info-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: #374151; /* Corresponds to text-gray-700 */
          }

          .list-item {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
          }

          @media (min-width: 640px) {
            .list-item {
              font-size: 1rem;
            }
          }

          .list-icon {
            width: 1.25rem;
            height: 1.25rem;
            color: #3b82f6;
            margin-right: 0.75rem;
            flex-shrink: 0;
          }
        `}
      </style>
      <div className="container-fluid">
        <div className="main-card">
          <div className="flex-row">
            {/* Left Section: Images and Consultation Card */}
            <div className="left-section">
              {/* Top Image Container with overlap */}
              <div className="top-image-container">
                <img
                src={dctr}
                  alt="Patient and Doctor"
                  className="top-image"
                />
                {/* Free Consultation Card */}
                <div className="consultation-card">
                  <svg className="card-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="card-title">
                      Free Consultation
                    </h3>
                    <p className="card-subtitle">Consultation with the best</p>
                  </div>
                </div>
              </div>

              {/* Bottom Image with z-index for overlap */}
              <div className="bottom-image-container">
                <img
                src={dctr2}
                  alt="Doctor with an elderly patient"
                  className="bottom-image"
                />
              </div>
            </div>

            {/* Right Section: Patient Caring Info */}
            <div className="right-section">
              <span className="info-title">
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </span>
              <h1 className="main-heading">
                Patient Caring
              </h1>
              <p className="main-paragraph">
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
              </p>
              <ul className="info-list">
                <li className="list-item">
                  <svg className="list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Stay Updated About Your Health
                </li>
                <li className="list-item">
                  <svg className="list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Check Your Results Online
                </li>
                <li className="list-item">
                  <svg className="list-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Manage Your Appointments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default patientCaring;
