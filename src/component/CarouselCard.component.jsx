import React from "react";

export const CarouselCard = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div style={{ height: "35vh", width: "20vw" }}>
          <img
            style={{ height: "100%", width: "70%", objectFit: "cover" }}
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt="test"
          ></img>
        </div>
        <h3 style={{ width: "70%", textOverflow: "ellipsis" }}>
          {props.title}
        </h3>
      </div>
    </>
  );
};
