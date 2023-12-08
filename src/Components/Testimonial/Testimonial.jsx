import React from "react";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  const { name, role, description } = testimonial;
  return (
    <div className="testimonialCom">
      <div className="testimonialHeader">
        <p>{name}</p>
        <span>{role}</span>
      </div>
      <div className="testimonialDescription">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Testimonial;
