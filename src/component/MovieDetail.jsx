import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "./MovieInfo";

export const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/movie/${id}`).then(({ data }) => setData(data));
  }, [id]);

  return (
    <>
      <div>
        {/* mobile */}
        <div
          className="relative md:hidden w-full"
          style={{ height: "calc(100vh)" }}
        >
          <div className="absolute z-20 bottom-4 left-4">
            <MovieInfo {...data} />
          </div>
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="poster"
            className="w-full h-full"
          />
        </div>

        {/* Medium */}
        <div
          className="relative hidden md:block w-full lg:hidden"
          style={{ height: "calc(100vh)" }}
        >
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <div className="absolute z-20 bottom-4 ">
            <MovieInfo {...data} />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="poster"
            className="w-full h-full"
          />
        </div>

        {/* Large */}
        <div
          className="relative hidden md:hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute top-12 z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />

          <div className="pt-16 absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className=" w-64 h-96 ">
              <img
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt="poster"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <MovieInfo {...data} />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="poster"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};
