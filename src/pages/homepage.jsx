import React from "react";
import CarouselSlider from "../component/Carousel.component";
import {Footer} from "../component/Footer/Footer";
import {Nav} from "../component/Nav/Nav";
export const Homepage = () => {
  return (
    <div>
    <Nav />
      <div className="container px-4 mx-auto">
        <CarouselSlider url="now_playing" title={"Now Playing"} />
        <CarouselSlider url="top_rated" title={"Top Rated"} />
        <CarouselSlider url="upcoming" title={"Upcomings"} />
        <CarouselSlider url="popular" title={"Popular"} />
      </div>
      <Footer />
    </div>
  );
};
