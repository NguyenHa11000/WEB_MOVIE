import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SearchBox from "./Search";

const MovieHeader = () => {
  let navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      {/* <div className=""> */}
      <div className="row">
        <div className="col-lg-1 "></div>
        <div className="col-lg-10">
          <div
            className={`${
              navbar ? "movie-header navbar visible" : "movie-header"
            } row row-cols-12 col-lg-10`}
          >
            <div className="col-lg-1"></div>
            <div id="movie-header_name" className="col-lg-2">
              <h1 className="title_web" onClick={() => navigate("/")}>
                MOVIE WEB
              </h1>
            </div>
            <div id="nav-header" className="col-lg-6">
              <ul id="nav">
                <li>
                  <Link to="/">TRANG CHỦ</Link>
                </li>
                <li>
                  <Link to="#">MOVIES</Link>
                  <ul className="subnav">
                    <li>
                      <Link to="/popular">Popular</Link>
                    </li>
                    <li>
                      <Link to="/top_rated">Top_reated</Link>
                    </li>
                    <li>
                      <Link to="/upcoming">Upcoming</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">TV SHOW</Link>
                </li>
              </ul>
            </div>
            <div className="movie-header_searchbox col-lg-2">
              <SearchBox />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      {/* </div> */}
    </>
  );
};

export default MovieHeader;
