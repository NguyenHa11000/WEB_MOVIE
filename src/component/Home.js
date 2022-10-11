import MovieHeader from "./MovieHeader";
import ListMovie from "./ListMovie";
import SimpleSlider from "./Carousel";
import SubMovie from "./SubMovie";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <SimpleSlider />
        <div className="row">
          <div className="col-lg-8">
            <div className="list_movies">
              <h4 className="list_title">DÀNH CHO BẠN</h4>
              <ListMovie title={"popular"} />
            </div>
            <div className="list_movies" style={{ marginTop: "24px" }}>
              <h4 className="list_title">TOP RATED</h4>
              <ListMovie title={"top_rated"} />
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="list_title">UP COMING</h4>
            <SubMovie title={"upcoming"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
