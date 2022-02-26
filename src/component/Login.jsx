import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

const navigation=useNavigate();

  const loginUser=async(e)=>{
    e.preventDefault();
    const res=await fetch('/login',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    console.log(res)
    const data=await res.json();
    console.log("data:",data)
    

    if(res.status===400 || !data){
      window.alert("please fill the data")
    }
    else if(res.status===404){
      window.alert("Invalid UserDetails")
      
     }
    else{
      
      window.alert("Login Successfully");
      navigation("/Home")
    }

  }
  // const handle = () => {
  //   alert("hello");
  // };

  const cross = () => {
    alert("hello");
  };
  return (
    <>
      <div className="loginmain">
        <div className="icon">
          <i class="uil uil-times" onClick={cross}></i>
        </div>
           <div className="H1">
        <h1>Sign In</h1>

           </div>

        <div className="account">
          <h5>you have an HBO Max account?</h5>
        </div>

        <div>
        <form method="POST">

          <div className="loginBox">
            <input type="email" name="email" 
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            autocomplete="off" required />
            <label>Email</label>
          </div>

          <div className="loginBox">
            <input type="password" name="password"
             value={password}
            onChange={(e)=>setpassword(e.target.value)}
             autocomplete="off" required />
            <label>Password</label>
          </div>

          <button onClick={loginUser}>
            Sign <span>in</span>
          </button>
        </form>

          <div className="forgot">
            <a href="/forgot">Forgot Password?</a>
          </div>

          <div className="or">
            <div className="orf">
              <p></p>
            </div>
            <div className="ors">
              <p>OR</p>
            </div>
            <div className="orf">
              <p id="sline"></p>
            </div>
          </div>
          <div className="provider">
            <p>
              Do you get HBO Max through a TV, Internet, or mobile provider?
            </p>
          </div>

          <div>
            <button id="provider-btn">SIGN IN WTIH A PROVIDER</button>
          </div>

          <div id="needhelp">
            <a href="/help">Need help?</a>
          </div>
        </div>
      </div>
    </>
  )
};
export default Login
