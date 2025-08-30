import React from 'react';
import "./footer.css";
const footer= () => {
    return (
        <>
            <footer className="footer-container">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="main-grid">

                        <div className="logo-section">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="logo-text">
                                    Medify</span>
                            </div>
                            <p className="logo-description">
                                An innovative healthcare solution that brings medical services right to your fingertips.
                            </p>
                            <div className="social-icons-container">
                                {/* Facebook Icon */}
                                <a href="#" className="social-link">
                                    <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.909c0-.868.192-1.291 1.056-1.291h2.944v-4h-4c-3.12 0-4 1.76-4 4v2.909z"/></svg>
                                </a>
                                {/* Twitter Icon */}
                                <a href="#" className="social-link">
                                    <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.16-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.582 0-6.496 2.91-6.496 6.492 0 .513.064 1.017.189 1.503-5.405-.271-10.197-2.868-13.407-6.804-.561.968-.888 2.083-.888 3.272 0 2.253 1.149 4.248 2.895 5.419-.843-.027-1.636-.261-2.347-.648v.081c0 3.164 2.257 5.783 5.252 6.39-.554.15-.1.884-1.093.201-.019 0-.038 0-.057 0 .835 2.618 3.255 4.522 6.133 4.522-2.253 1.763-5.021 2.812-8.092 2.812-.529 0-1.05-.031-1.566-.092 2.905 1.86 6.36 2.969 10.05 2.969 12.072 0 18.661-10.051 18.661-18.659 0-.285-.006-.568-.018-.849 1.28-1.039 2.389-2.344 3.264-3.834z"/></svg>
                                </a>
                                {/* Instagram Icon */}
                                <a href="#" className="social-link">
                                    <svg className="social-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.772-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.147-4.77-1.69-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.85-.07zm0-2.163c-3.259 0-3.668.014-4.944.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.276-.073 1.685-.073 4.944s.014 3.668.072 4.944c.2 4.358 2.618 6.78 6.98 6.98 1.276.059 1.685.073 4.944.073s3.668-.014 4.944-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.276.073-1.685.073-4.944s-.014-3.668-.072-4.944c-.198-4.358-2.619-6.78-6.979-6.98-1.276-.059-1.684-.073-4.944-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Footer link columns */}
                        <div className="link-column">
                            <h3 className="link-column-title">About Us</h3>
                            <ul className="link-list">
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Our Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Our Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Appointment
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="link-column">
                            <h3 className="link-column-title">Orthology</h3>
                            <ul className="link-list">
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Neurology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Dental Care
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Opthalmology
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Cardiology
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="link-column">
                            <h3 className="link-column-title">About Us</h3>
                            <ul className="link-list">
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Our Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Our Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Appointment
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="link-item">
                                        <svg className="link-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.97 10.669 16.29 7.349c.39-.39.39-1.023 0-1.414-.39-.39-1.023-.39-1.414 0l-4.242 4.243c-.39.39-.39 1.023 0 1.414l4.243 4.243c.39.39 1.023.39 1.414 0 .39-.39.39-1.023 0-1.414L12.97 10.669z"/></svg>
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Separator line */}
                    <hr className="separator" />

                    {/* Copyright section */}
                    <div className="copyright-text">
                        Copyright &copy;2023 Suryo Nursing Home Pvt. Ltd.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default footer;
