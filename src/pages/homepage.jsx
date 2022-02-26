import React from "react";
import CarouselSlider from "../component/Carousel.component";
export const Homepage = () => {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <CarouselSlider url="now_playing" title={"Now Playing"} />
        <CarouselSlider url="top_rated" title={"Top Rated"} />
        <CarouselSlider url="upcoming" title={"Upcomings"} />
        <CarouselSlider url="popular" title={"Popular"} />
      </div>
    </div>
  );
};
