import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SearchBox from "./Search";
import FormRegister from "./Forms/Register";
import FormLogin from "./Forms/Login";

const MovieHeader = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState(
    sessionStorage.getItem("username") ? sessionStorage.getItem("username") : ""
  );
  const [navbar, setNavbar] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

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

  const logout = (e) => {
    sessionStorage.clear();
    setUserName("");
  };

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
            <div id="nav-header" className="col-lg-3">
              <ul id="nav">
                <li>
                  <Link to="/">HOME</Link>
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
            <div className="movie-header_searchbox col-lg-3">
              <SearchBox />
            </div>
            <div className="movie-header_account col-lg-2">
              {sessionStorage.getItem("username") != null ? (
                <>
                  <div className="account_name">
                    <i class="fa-thin fa-user-secret"></i>
                    {userName}
                    <ul className="account-list">
                      <li>My account</li>
                      <li
                        onClick={(e) => {
                          logout(e);
                        }}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <button type="button" onClick={() => setIsHidden(false)}>
                    Register
                  </button>
                  <button type="button" onClick={() => setIsLogin(false)}>
                    Login
                  </button>
                </>
              )}
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <FormRegister
          isHidden={isHidden}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setIsHidden={setIsHidden}
        />
        <FormLogin
          isLogin={isLogin}
          isHidden={isHidden}
          setIsLogin={setIsLogin}
          setUserName={setIsLogin}
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default MovieHeader;
