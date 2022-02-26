import React from "react";
import { Link } from "react-router-dom";

export const CarouselCard = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start gap-2 px-12 md:px-3">
          <div className="h-40 md:h-80">
            <img
              className="w-full h-full rounded-md"
              src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
              alt="test"
            ></img>
          </div>
          <h3 className="">{props.title}</h3>
        </div>
      </Link>
    </>
  );
};
