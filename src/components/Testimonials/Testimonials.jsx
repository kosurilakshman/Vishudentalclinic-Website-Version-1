import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Ramesh P",
    message:
      "Dr. Rajashekar is a caring dentist who listens to his patients and explains procedures clearly. His attentive approach ensures comfort, especially for those with dental anxiety, making every visit reassuring",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Malleswara rao vadlamudi",
    message:
      "Excellent dental clinic for all dental related issues. The doctors are highly professional and experienced",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Malli V",
    message:
      "Best dental service, I prefer and recommend it more than any other dental clinic & I m happy with treatment and had best experience",
    stars: "⭐⭐⭐⭐",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Patients Say</h2>
        <div className="testimonials-cards">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-message">"{testimonial.message}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <span className="testimonial-title">{testimonial.stars}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
