import "./MovieHeader.css";
import "./Search.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

const SearchBox = () => {
  let navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);
  const getDataSearch = async (searchValue) => {
    const url = `
    https://api.themoviedb.org/3/search/movie?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovieSearch(responseJson.results);
    }
  };

  useEffect(() => {
    getDataSearch(searchValue);
  }, [searchValue]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/result/${event.target.value}`);
    }
  };
  return (
    <>
      <div className="col  movie-search">
        <input
          className="form-control"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="type to search...."
        ></input>
        {/* <i class="fa-solid fa-magnifying-glass icon-search"></i> */}
      </div>
    </>
  );
};

export default SearchBox;
