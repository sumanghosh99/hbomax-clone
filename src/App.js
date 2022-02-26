import axios from "axios";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import { Homepage } from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import { MovieDetail } from "./component/MovieDetail";

=======
//import CarouselSlider from "./component/Carousel.component";
import {Nav} from "./component/Nav/Nav";
import {Footer} from "./component/Footer/Footer";
>>>>>>> 2bfa7be357e244fc0e211bd17ff0678e01dc8159
// Axios default settings

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
    </Routes>
=======
    <div className="App" style={{ width: "100vw" }}>
      <Nav/>
      {/* <CarouselSlider /> */}
      <Footer/>
    </div>
>>>>>>> 2bfa7be357e244fc0e211bd17ff0678e01dc8159
  );
}

export default App;
