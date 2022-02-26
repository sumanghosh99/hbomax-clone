import axios from "axios";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Homepage } from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import { MovieDetail } from "./component/MovieDetail";

// Axios default settings

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
    </Routes>
  );
}

export default App;
