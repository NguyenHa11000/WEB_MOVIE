import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../slice/movieSlice";

import Movie from "./Movie";

const ListMovie = (props) => {
  const [test, setTest] = useState([]);
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
  return (
    <>
      <div className="row ">
        {test.length > 0 &&
          moviescut(test).map((movie) => (
            <div className="col-lg-3 col-sm-4">
              <Movie movie={movie} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ListMovie;
