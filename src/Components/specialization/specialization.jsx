import React from 'react';
import {
  Heart,
  Stethoscope,
  Microscope,
  TestTube,
  Shield,
  Hospital,
  X,
  Search
} from 'lucide-react';

const specializations = [
  { name: 'Primary Care', icon: Stethoscope },
  { name: 'Cardiology', icon: Heart },
  { name: 'MRI Resonance', icon: Search },
  { name: 'Blood Test', icon: TestTube },
  { name: 'Psychologist', icon: Shield },
  { name: 'Laboratory', icon: Microscope },
  { name: 'X-Ray', icon: X },
  { name: 'Hospital', icon: Hospital },
];

const FindBySpecialization = () => {
  return (
    <>
      <style>
        {`
           .specialization-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9fafb;
          }
          .specialization-card {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 2rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            width: 100%; /* Changed from max-width to full width */
            border: 2px solid #bfdbfe;
          }
          .specialization-title {
            font-size: 1.875rem;
            font-weight: 700;
            text-align: center;
            color: #1f2937;
            margin-bottom: 2rem;
          }
          .specialization-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
            padding: 0 2rem; /* Added padding to the grid for smaller screens */
          }
          @media (min-width: 640px) {
            .specialization-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              padding: 0 4rem; /* Adjusted padding for larger screens */
            }
          }
          .specialization-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            border-radius: 1rem;
            border: 2px solid #bfdbfe;
            cursor: pointer;
            text-align: center;
            transition-property: border-color;
            transition-duration: 200ms;
          }
          .specialization-item:hover {
            border-color: #60a5fa;
          }
          .specialization-icon-container {
            width: 4rem;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.75rem;
            background-color: #dbeafe;
            margin-bottom: 1rem;
          }
          .specialization-icon-container svg {
            width: 2.5rem;
            height: 2.5rem;
            color: #2563eb;
          }
          @media (min-width: 640px) {
            .specialization-icon-container {
              width: 5rem;
              height: 5rem;
            }
            .specialization-icon-container svg {
              width: 3rem;
              height: 3rem;
            }
          }
          .specialization-name {
            font-size: 0.875rem;
            font-weight: 600;
            color: #4b5563;
          }
          .specialization-button-container {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
          }
          .specialization-button {
            background-color: #3b82f6;
            color: #ffffff;
            font-weight: 600;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05);
            transition-property: all;
            transition-duration: 200ms;
          }
          .specialization-button:hover {
            background-color: #2563eb;
        `}
      </style>
      <div className="specialization-container">
        <div className="specialization-card">
          <h2 className="specialization-title">
            Find By Specialisation
          </h2>
          <div className="specialization-grid">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="specialization-item"
              >
                <div className="specialization-icon-container">
                  <spec.icon />
                </div>
                <span className="specialization-name">
                  {spec.name}
                </span>
              </div>
            ))}
          </div>
          <div className="specialization-button-container">
            <button className="specialization-button">
              View All
            </button>
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default FindBySpecialization;
