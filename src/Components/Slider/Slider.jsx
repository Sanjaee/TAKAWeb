import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const images = ["1.webp", "2.webp", "3.webp", "4.webp"];

const MySlider = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider">
      {/* arrow button */}
      <div className="arrowkiri">
        <button className="arrow-button">
          <div className="arrow_img">
            <svg
              className="arrow_img"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      {/* slider image */}
      <img className="slider_img" src="1.webp" alt="Slider Image" />
      {/* arrow button */}
      <div className="arrow">
        <button className="arrow-button">
          <div className="arrow_img">
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
      </div>
    </div>
  );
};

export default MySlider;
