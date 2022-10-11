import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../slice/movieSlice";
import { useNavigate } from "react-router";

import "./SubMovie.css";

const SubMovie = (props) => {
  const [test, setTest] = useState([]);
  let nav = useNavigate();
  const movies = useSelector((state) => state.movieReducer.movies);
  const type = useSelector((state) => state.movieReducer.type);
  const dispatch = useDispatch();
  const moviescut = (movies) => {
    if (movies.length > 8) {
      movies = movies.slice(0, 8);
    }
    return movies;
  };
  useEffect(() => {
    console.log(props.title);
    dispatch(movieAction.getMovie(props.title));
  }, []);
  useEffect(() => {
    if (props.title === type) setTest(movies);
  }, [movies]);
  const original_title = (a) => {
    if (a.length > 25) {
      var A = a.slice(0, 25);
      A = A + "...";
      console.log(A);
    } else {
      return a;
    }
    return A;
  };

  return (
    <>
      <div className="list_submovies">
        {test.length > 0 &&
          moviescut(test).map((movie) => (
            <div
              className="submovie"
              //   style={{ backgroundColor: "rgb(41, 44, 46)" }}
            >
              <div className="col-lg-5 col-sm-5" style={{ padding: "0px" }}>
                <img
                  className="imgsub "
                  src={"https://image.tmdb.org/t/p/w500".concat(
                    movie.poster_path
                  )}
                  onClick={() => nav(`/detailmovie/${movie.id}`)}
                ></img>
              </div>

              <div
                className="col-lg-7 col-sm-7 submovie_name"
                style={{ fontSize: "12px", padding: " 0px 8px" }}
              >
                {original_title(movie.original_title)}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SubMovie;
