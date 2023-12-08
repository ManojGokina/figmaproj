import React, { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import NotificationComOne from "../NotificationComOne/NotificationComOne";
import NotificationComTwo from "../NotificationComTwo/NotificationComTwo";
import NotificationComThree from "../NotificationComThree/NotificationComThree";
import "./NotificationCarousel.css";

const NotificationCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(1.7);
  const [autoplay, setAutoplay] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     console.log(window.innerWidth);
  //     if (window.innerWidth <= 780) {
  //       setSlidesToShow(3);
  //       setAutoplay(false);
  //     } else {
  //       setSlidesToShow(1.7);
  //       setAutoplay(true);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [window.innerWidth]);

  return (
    <Slider
      className="slider"
      arrows={false}
      swipe={false}
      slidesPerRow={2}
      slidesToShow={slidesToShow}
      autoplay={autoplay}
      autoplayScroll={1}
      pauseOnHover={true}
      duration={3000}
      autoplaySpeed={4000}
      adaptiveHeight={true}
    >
      <div>
        <NotificationComOne />
      </div>
      <div>
        <NotificationComTwo />
      </div>
      <div>
        <NotificationComThree />
      </div>
    </Slider>
  );
};

export default NotificationCarousel;
