import React from "react";
import { HashLink } from 'react-router-hash-link';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contactus">Book Appointment</Link>
              </li>
            </ul>
          </div>


          {/* Dental Services */}
<div className="footer-section">
  <h3>Dental Services</h3>
  <ul>
    <li><HashLink smooth to="/services#dentalservices">Root Canal</HashLink></li>
    <li><HashLink smooth to="/services#dentalservices">Dental Implants</HashLink></li>
    <li><HashLink smooth to="/services#dentalservices">Dental Braces</HashLink></li>
    <li><HashLink smooth to="/services#dentalservices">Ceramic Crowns</HashLink></li>
    <li><HashLink smooth to="/services#dentalservices">Clear Braces</HashLink></li>
    <li><HashLink smooth to="/services#dentalservices">Child Dental Care</HashLink></li>
  </ul>
</div>

          {/* Contact Info */}
          <div className="footer-section ">
            <h3>Contact Us</h3>
          
            <p>
              <FaPhoneAlt className="contact-icon" />+91-98660 22559
            </p>
            <p>
              <MdEmail className="contact-icon" />admin@sanjittechsolutions.in
            </p>
            <p>
              <FaLocationDot className="contact-icon" />1st Line Pandaripuram,
              Chilakaluripet, Andhra Pradesh - 522616
            </p>
            <h4 className="footer-subheading">Working Hours</h4>
            <p>
              <IoMdTime className="contact-icon" />Mon - Sat : 10:00 AM - 9:00 PM
            </p>
            <p>
              <IoMdTime className="contact-icon" />Sunday : 9:00 AM - 12:00PM
            </p>
          </div>

          {/* Google Map */}
          <div className="footer-section footer-map">
            <iframe
              title="Vishnu Dental Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.4665718290553!2d80.1645569!3d16.0931475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a634218289933%3A0x5be23878993f93af!2sVishnu%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1743588674243!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="map-iframe"
            ></iframe>
            <div className="map-button-container">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=16.0931475,80.1645569"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Vishnu Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
