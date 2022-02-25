import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CarouselCard } from "./CarouselCard.component";

function CarouselSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlaying = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlaying();
  }, []);
  const settings = {
    infinity: false,
    autoplay: false,
    centerPadding: "-10px",
    slidesToShow: 4,
    slidesToScroll: 3,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "90vw", margin: "0 auto" }}>
      {" "}
      <Slider {...settings}>
        {images.map((card) => (
          <CarouselCard {...card}></CarouselCard>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSlider;
