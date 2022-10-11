import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import "./Carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../slice/movieSlice";

const SimpleSlider = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // infinite: true,
  };
  const _items = useSelector((state) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovie("popular"));
  }, []);

  let navigate = useNavigate();
  return (
    <div className="content test">
      <Slider {...sliderSettings}>
        {_items.length > 0 &&
          _items.map((card, index) => (
            <div className=" d-lex justify-content-start slide_test">
              <img
                src={"https://image.tmdb.org/t/p/w500".concat(
                  _items[index].backdrop_path
                )}
                className="imagee"
                onClick={() => navigate(`/detailmovie/${_items[index].id}`)}
              ></img>
              {/* <div className="overlayy">{_items[index].original_title}</div> */}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
