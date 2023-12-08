import React from "react";
import Slider from "infinite-react-carousel";
import Testimonial from "../Testimonial/Testimonial";
import testimonials from "../../data";
import "./TestimonialCarousel.css";
const TestimonialCarousel = () => {
  return (
    <div>
      <Slider
        className="testimonialSlider"
        arrows={false}
        swipe={true}
        slidesPerRow={2}
        slidesToShow={1.7}
      >
        {testimonials?.map((data, index) => (
          <div key={index}>
            <Testimonial testimonial={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
