import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Utils/Firebase";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimoni.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimoni = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const sliderCollection = collection(db, "Testimoni");

    const unsubscribe = onSnapshot(sliderCollection, (querySnapshot) => {
      const sliderItems = [];
      querySnapshot.forEach((doc) => {
        sliderItems.push({ id: doc.id, ...doc.data() });
      });

      // Set a timeout for 2 seconds to show the skeleton loader
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
  }, []); // No dependencies, runs once

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: null,
    nextArrow: null,
  };

  return (
    <div className="testimoni_container">
      <div className="">
        <Slider className="testimoni_slider pl-4 mx-auto" {...settings}>
          {sliderData.map((item) => (
            <div key={item.id} className="testimoni_card">
              <div className="card1">
                <div className="content_1">
                  <h3>{item.namagame}</h3>
                  <p>"{item.deskripsi}"</p>
                </div>
                <div className="content_2">
                  <p>{item.namabarang}</p>
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="card2">
                <p>{item.nomortelepon}</p>
                <div className="rating">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimoni;
