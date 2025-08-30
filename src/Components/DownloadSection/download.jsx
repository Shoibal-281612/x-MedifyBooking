import React from 'react';
import "./download.css";
import PImage from "../../Assets/image 2.png"

const download= () => {
    return (
        <>
            <style>
                {`
                   
                `}
            </style>
            <div className="download-app-container">
                <div className="image-section">
                    {/* To use your own images, replace the placeholder URL 
                        (https://placehold.co...) with your public image URL.
                    */}
                    <img
                        className="phone-image-1"
                        src={PImage}
                        alt="Medify App on a mobile phone"
                    />
                    <img
                        className="phone-image-2"
                        src={PImage}
                        alt="Another view of the Medify App"
                    />
                </div>
                <div className="content-section">
                    <h2 className="main-heading">
                        Download the <br /> <span>Medify App</span>
                    </h2>
                    <p className="sub-heading">Get the link to download the app</p>
                    <div className="input-container">
                        <span className="country-code">+91</span>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className="phone-input"
                        />
                        <button className="send-button">Send SMS</button>
                    </div>
                    <div className="app-buttons-container">
                        <a href="#" className="app-store-button">
                            <i className="fa-brands fa-google-play app-icon"></i>
                            Google Play
                        </a>
                        <a href="#" className="app-store-button">
                            <i className="fa-brands fa-apple app-icon"></i>
                            App Store
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default download;
