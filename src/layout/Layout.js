import SimpleSlider from "../component/Carousel";
import Footer from "../component/Footer";
import MovieHeader from "../component/MovieHeader";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <div className="container-fluid main">
        <MovieHeader />
        <div className="row">
          <div className="col-lg-1 col-sm-1"></div>
          <div className="col-lg-10 col-sm-10 " style={{ marginTop: "60px" }}>
            <main>{children}</main>
          </div>
          <div className="col-lg-1 col-sm-1"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
