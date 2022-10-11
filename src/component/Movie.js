import React from "react";
import bootstrap from "bootstrap";
import { useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie = (prop) => {
  let navi = useNavigate();
  const original_title = (a) => {
    if (a.length > 10) {
      var A = a.slice(0, 10);
      A = A + "...";
    } else {
      return a;
    }
    return A;
  };
  return (
    <>
      <div className=" movie">
        <img
          src={"https://image.tmdb.org/t/p/w500".concat(prop.movie.poster_path)}
          className="card-img-top image"
          onClick={() => navi(`/detailmovie/${prop.movie.id}`)}
        ></img>
        <div className="movie_title">
          <div className="movie_title_text">
            {original_title(prop.movie.original_title)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
