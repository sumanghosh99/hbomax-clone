import axios from "axios";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import CarouselSlider from "./component/Carousel.component";
import {Nav} from "./component/Nav/Nav";
import {Footer} from "./component/Footer/Footer";
// Axios default settings

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <Nav/>
      {/* <CarouselSlider /> */}
      <Footer/>
    </div>
  );
}

export default App;
