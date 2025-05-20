import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Faq from "./Faq";
import heroSection_video from "../../assets/mp4/hero_video.mp4";
import CountUp from "react-countup";
// import Welcome from "../../assets/Images/ContactUsPage/contact_us.jpg";
import {
  Hero_overlay_1,
  Hero_overlay_2,
  Hero_overlay_3,
  VishnuDentalOverview,
  dentalCare_1,
  dentalCare_2,
} from "../../assets/Images/HomePageImages";
import GalleryCarousel from "./GalleryCarousel";

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
];

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/services");
  };
  return (
    <Fragment>
      <div className="hero-container">
        <div className="video-wrapper">
          <video autoPlay loop muted className="hero-video">
            <source src={heroSection_video} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay">
          <h1>Exceptional Dental Care for Your Family</h1>
          <p>
            Providing comprehensive treatments with advanced technology and
            compassionate service.
          </p>
          <br />
          <br />
          <button className="hero-button" onClick={handleLearnMore}>
            Learn More
          </button>{" "}
        </div>

        {/* Image Section */}
        <div className="image-section">
          <div className="image-container">
            <img src={Hero_overlay_1} alt="Image 1" className="image" />
            <div className="image-text">
              Personalized care for your dental needs.
            </div>
          </div>
          <div className="image-container">
            <img src={Hero_overlay_2} alt="Image 2" className="image" />
            <div className="image-text">
              Comfortable environment for patients.
            </div>
          </div>
          <div className="image-container">
            <img src={Hero_overlay_3} alt="Image 3" className="image" />
            <div className="image-text">
              Your dental health, Our priority.
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================================= */}

      <div className="clinic-container">
        {/* First Row */}
        <div className="clinic-content">
          {/* Text Column */}
          <h1>
            Welcome to <br />
            <span className="vishnuDental">Vishnu Dental Clinic</span>
          </h1>
          <div className="clinic-text">
            <p>
           <strong>Vishnu Dental Clinic</strong>, Chilakaluripet. We offer a wide range of services including <strong>Root canals, Dental implants, Orthodontics, Ceramic crowns, and Children’s dentistry,</strong>etc. Our team provides the highest standard of quality treatment. We use modern techniques for the best treatment. We are <strong>NABH</strong> certified, ensuring our commitment to delivering safe and high-quality dental care.
            </p>
            <div className="clinic-stats">
              <div className="stat">
                <h2>
                  <CountUp start={0} end={10000} duration={7} separator="," />+
                </h2>
                <p>Satisfied Patients</p>
              </div>
              <div className="stat">
                <h2>
                  <CountUp start={0} end={500} duration={5} separator="," />+
                </h2>
                <p>Families trust us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="clinic-fullwidth-image-container">
          <img
            src={VishnuDentalOverview}
            alt="Full Clinic View"
            className="clinic-fullwidth-image"
          />
        </div>
      </div>

      {/* ======================================================================================== */}

      <section className="dental-care-section">
        <div className="dental-container">
          <h2 className="dental-title">
            Quality Dental Treatments
          </h2>
          <p className="dental-description">
            Comprehensive treatments using advanced technology for your dental
            health and comfort at Vishnu Dental Clinic.
          </p>

          <div className="dental-card-container">
            {/* Card 1 */}
            <div className="dental-card">
              <div className="image-wrapper">
                <img
                  src={dentalCare_1}
                  alt="Safety First"
                  className="dental-image"
                />
                <div className="dental-card-text semi_circle">
                  <h3>Safety First</h3>
                  <p>
                    Maintaining the highest standards of hygiene and safety for
                    a comfortable dental experience at our clinic.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="dental-card">
              <div className="image-wrapper">
                <img
                  src={dentalCare_2}
                  alt="Personalized Care"
                  className="dental-image"
                />
                <div className="dental-card-text semi_circle">
                  <h3>Personalized Care</h3>
                  <p>
                    Building lasting relationships with patients through
                    compassionate and individualized dental services at our
                    clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================================== */}
      {/* Gallery section */}

      <GalleryCarousel />

      <Testimonials />
      <Faq />
    </Fragment>
  );
};

export default Home;
