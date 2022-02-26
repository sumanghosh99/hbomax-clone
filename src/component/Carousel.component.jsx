import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CarouselCard } from "./CarouselCard.component";

function CarouselSlider({ title,url }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const requestNowPlaying = async () => {
      const getImages = await axios.get(`/movie/${url}`);
      setImages(getImages.data.results);
    };
    requestNowPlaying();
  }, []);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mx-2 my-4">{title}</h1>
      <Slider {...settings}>
        {images.map((card) => (
          <CarouselCard {...card} />
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSlider;
