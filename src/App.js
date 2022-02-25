import axios from "axios";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlider from "./component/Carousel.component";

// Axios default settings

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
      <CarouselSlider />
    </div>
  );
}

export default App;
