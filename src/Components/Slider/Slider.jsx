import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Utils/Firebase";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const CustomPrevArrow = ({ onClick, ...rest }) => {
  const { currentSlide, slideCount, ...buttonProps } = rest;

  return (
    <button
      onClick={onClick}
      {...buttonProps}
      className="arrowkiri absolute left-4 z-20 bottom-0 top-28"
    >
      <div className="arrow-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          ></path>
        </svg>
      </div>
    </button>
  );
};

const CustomNextArrow = ({ onClick, ...rest }) => {
  const { currentSlide, slideCount, ...buttonProps } = rest;

  return (
    <button
      onClick={onClick}
      {...buttonProps}
      className="arrow absolute right-4 top-20"
    >
      <div className="arrow-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </div>
    </button>
  );
};

const SliderHeading = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const sliderCollection = collection(db, "Slider");

    const unsubscribe = onSnapshot(sliderCollection, (querySnapshot) => {
      const sliderItems = [];
      querySnapshot.forEach((doc) => {
        sliderItems.push({ id: doc.id, ...doc.data() });
      });

      const timeoutId = setTimeout(() => {
        setSliderData(sliderItems);
      }, 700);

      return () => {
        clearTimeout(timeoutId);
      };
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full h-[410px] slider">
      <Slider className="slider_header mx-auto" {...settings}>
        {sliderData.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt="Slider"
              className="slider_img mx-auto"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHeading;
