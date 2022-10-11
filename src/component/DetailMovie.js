import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { movieAction } from "../slice/movieSlice";
import MovieHeader from "./MovieHeader";
import "./DetailMovie.css";
import SimpleSlider from "./Carousel";
import ListMovie from "./ListMovie";
import { Button } from "bootstrap";

const DetailMovie = (props) => {
  // console.log(props);
  const location = window.location.href;
  const index = location.lastIndexOf("/") + 1;
  const idMovie = location.substring(index);
  let navi = useNavigate();
  const movie = useSelector((state) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getDetailMovie(idMovie));
  }, []);
  return (
    <>
      <div className="detail">
        <div className="row ">
          <div className="col-lg-3 img_detail">
            <div className="card">
              <img
                src={"https://image.tmdb.org/t/p/w500".concat(
                  movie.poster_path
                )}
                className="image_detail image"
                style={{ padding: "4px", backgroundColor: "rgb(32, 32, 31)" }}
                onClick={() => navi(`/Watch/${movie.id}`)}
              ></img>
            </div>
            <button
              type="button"
              className="button_detail"
              onClick={() => navi(`/Watch/${movie.id}`)}
            >
              XEM PHIM
            </button>
          </div>
          <div className="text col-lg-9 ">
            <h2
              className="original_title"
              onClick={() => navi(`/Watch/${movie.id}`)}
            >{` ${movie.original_title}`}</h2>
            <br />
            <p>{`Ngày phát hành: ${movie.release_date}`}</p>
            <div className="row overview">
              <p>{`Giới thiệu: ${movie.overview}`}</p> <br />
            </div>
          </div>
        </div>
        {/* <div className="row ">
                <Comment id={movie.id}/>
            </div> */}
      </div>

      {/* <h3>Dành cho bạn</h3>
      <div className="row">{<ListMovie />}</div> */}
    </>
  );
};

export default DetailMovie;
