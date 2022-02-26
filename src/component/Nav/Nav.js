import { useState } from "react";
import {Link} from 'react-router-dom'
import logo from "../../images/logo.jpg";
import "./Nav.scss";
export const Nav = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="navigation">
      <div className="nav">
        <h5 id="show-bar">
          <i className="fa fa-bars"></i>
        </h5>
        <ul className="toggle-button">
          <h6>
            <i className="fa fa-times "></i>
          </h6>
          <li>Home</li>
          <li>Movies</li>
          <li>Series</li>
          <li>Orignals</li>
          <li>Just Added</li>
        </ul>
        <h6
          className="search"
          onClick={() => {
            const text = flag === false ? true : false;
            setFlag(text);
          }}
        >
          <i className="fa fa-search"></i>
        </h6>
        {flag === true ? (
          <input
            id="search"
            type="search"
            placeholder="What are you looking for ?"
          />
        ) : (
          <input
            id="searchs"
            type="search"
            placeholder="What are you looking for ?"
          />
        )}
        <img className="logo" src={logo} alt="img" />
        <ul className="subs">
          <li>
          <Link to='/register'>
          Subscribe Now

          </Link>
          </li>
          <li>
          <Link to="/login">

          Sign In
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};