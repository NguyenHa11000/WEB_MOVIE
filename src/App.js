import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";
import DetailMovie from "./component/DetailMovie";
import WatchMovie from "./component/MovieWatch";
import Result from "./component/Result";
// import "./app/store";

function App() {
  return (
    <div className="App ">
      <Router>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<MovieHeader />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/detailmovie/:id" element={<DetailMovie />} />
            <Route path="/Watch/:id" element={<WatchMovie />} />
            <Route path="/Result/:id" element={<Result />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
