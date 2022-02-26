import axios from "axios";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Homepage } from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import {Nav} from "./component/Nav/Nav";
import Login from './component/Login';
import Registration from './component/Registration';
import { MovieDetail } from "./component/MovieDetail";
import {Footer} from "./component/Footer/Footer";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App" style={{ width: "100vw" }}>
       {/* <Nav/>  */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
