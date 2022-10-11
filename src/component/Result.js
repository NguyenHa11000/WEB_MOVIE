import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./Result.css";

const Result = () => {
  const location = window.location.href;
  const index = location.lastIndexOf("/") + 1;
  const searchMovie = location.substring(index);
  console.log(searchMovie);
  const [movieSearch, setMovieSearch] = useState([]);

  const getDataSearch = async () => {
    const url = `
    https://api.themoviedb.org/3/search/movie?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&query=${searchMovie}&page=1&include_adult=false`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovieSearch(responseJson.results);
    }
  };

  useEffect(() => {
    getDataSearch();
  }, []);

  return (
    <>
      <div className="movie_result_search">
        <div className="row ">
          <div className="result col-sm-12">
            <div className="row ">
              {movieSearch &&
                movieSearch.map((movie, index) => (
                  <div className="col-lg-3 col-sm-4">
                    <Movie movie={movie} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
