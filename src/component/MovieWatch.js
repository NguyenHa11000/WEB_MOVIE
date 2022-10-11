import React, { useState, useEffect } from "react";
import "./MovieWatch.css";
import ListMovie from "./ListMovie";
const WatchMovie = () => {
  const location = window.location.href;
  const index = location.lastIndexOf("/") + 1;
  const idMovie = location.substring(index);
  const [key, setKey] = useState("");
  const getKeyVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setKey(responseJson.results[0].key);
  };
  useEffect(() => {
    getKeyVideo();
  }, []);
  return (
    <>
      <div className="watchMv">
        {/* <MovieHeader /> */}
        <div className="Video row">
          <div className=" col-lg-12">
            <iframe
              src={`https://www.youtube.com/embed/${key}`}
              width="100%"
              height="500px"
              frameBorder={0}
              allowFullScreen=""
              ng-show="showvideo"
              className="iframe"
            ></iframe>
            {/* <div>
                        <button type="button" onClick={}></button>
                    </div> */}
          </div>
          {/* <div className="col-lg-6 up">
            <div>
              <ListMovie title={"upcoming"} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WatchMovie;
