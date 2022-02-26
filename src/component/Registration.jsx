import React from 'react';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import {Link} from 'react'
// import register from '../images/333-modified.jpg'
import {useState} from 'react'
const Registration = () => {
  
   

    // const history = useHistory();
    const navigate = useNavigate();


const [user, setuser] = useState({
  firstname: "",
  lastname: "",
  email: "",
  password: ""
});
let name, value;
const handelchange = (e) => {
  // console.log(e);
  name = e.target.name;
  value = e.target.value;

  setuser({ ...user, [name]: value });
};

const postData = async (e) => {
  e.preventDefault();
  const { firstname, lastname, email, password } = user;

  const res = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      password
    })
  });
  const data = await res.json();
  if (data.status === 422 || !data) {
    window.alert("registration failed");
    console.log("faild");
  } else {
    window.alert("registration success");
    console.log("success");
    // history.push("/login");
    navigate('/Login')
  }
};

return (
  <>
   
    <nav className="navs">
      <div className="imghbo">
        <img
          src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
          alt=""
        />
      </div>
      <div className="singins">
        <a href="/login">SIGN IN</a>
      </div>
    </nav>

    <div className="main">
      <div className="secmain">
        <div className="add">
          <div className="adddiv">
            <p>With Ads</p>
          </div>
          <div className="pricediv">
            <p>
              {" "}
              $9.99/mo <span></span>
              <i class="uil uil-wallet" style={{ fontSize: "20px" }}></i>
            </p>
          </div>
        </div>
        <div className="headersection">
          <div className="span1">
            <span>STEP 2 OF 3</span>
          </div>
          <div className="top">
            <h4>Create Your Account</h4>
          </div>
          <div className="span2">
            <span>
              You are one step closer to enjoying the best entertainment that
              HBO Max has to offer
            </span>
          </div>
        </div>
        <form method="POST">
          <div className="formdiv">
            <div className="firstlast">
              <div className="inputBox">
                <input
                  type="text"
                  name="firstname"
                  value={user.firstname}
                  onChange={handelchange}
                  autocomplete="on"
                  required
                />
                <label> First Name </label>
              </div>

              <div className="inputBoxB"></div>
              <div className="inputBox">
                <input
                  type="text"
                  name="lastname"
                  value={user.lastname}
                  onChange={handelchange}
                  autocomplete="on"
                  required
                />
                <label>Last Name</label>
              </div>
            </div>
            <div className="inputBox1">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handelchange}
                autocomplete="on"
                required
              />
              <label>Email Address</label>
            </div>

            <div className="inputBox1">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handelchange}
                autocomplete="on"
                required
              />
              <label>Password</label>
            </div>

            <div className="P">
              <p>
                Your password must be at least 8 characters and include a
                number or special character.
              </p>
            </div>
          </div>
          <div className="conditiondiv">
            <div className="heading">
              <p>
                By clicking Create Account, you confirm that you are 18 or
                over, you agree to the <span></span>
                <a href="">Terms of Use</a>,and you acknowledge that you have
                read our <span></span>
                <a href="">Privacy Policy.</a>You further acknowledge that we
                will send you marketing, promotions and other offers from HBO
                Max and its <span></span>
                <a href="">Affiliates </a>via email, social media and other
                channels. If you create a Kids’ Profile, you agree to the
                processing of personal information collected via that profile
                as described in the <span></span>
                <a href="">Privacy Policy,</a>if such consent is required
                where you live. To opt-out at any time, or to learn more about
                your rights and how to exercise them, see the Privacy Policy.
              </p>
            </div>
            <div className="btn">
              <button onClick={postData}>CREATE ACCOUNT</button>
            </div>
          </div>
        </form>
        <div className="belowcondition">
          <span>
            To opt-out at any time, or to learn more about your rights and how
            to exercise them, see the <span></span>
            <a href="">Privacy Policy.</a>
          </span>
        </div>
      </div>
    </div>
    <footer className="footerpart">
      <ul className="privacypart">
        <li>Privacy Policy</li>
        <li>Do Not Sell My Personal Information</li>
        <li>Terms of Use</li>
        <li>Ad choices</li>
        <li>Just want HBO?</li>
        <li>Info</li>
      </ul>
    </footer>
    
    </>
  )
}

export default Registration;
