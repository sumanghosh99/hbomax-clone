import { useState } from "react";
import {Link} from 'react-router-dom'
// import logo from "../../images/logo.jpg";
// import "./Nav.scss";
// export const Nav = () => {
//   const [flag, setFlag] = useState(false);
//   return (
//     <div className="navigation">
//       <div className="nav">
//         <h5 id="show-bar">
//           <i className="fa fa-bars"></i>
//         </h5>
//         <ul className="toggle-button">
//           <h6>
//             <i className="fa fa-times "></i>
//           </h6>
//           <li>Home</li>
//           <li>Movies</li>
//           <li>Series</li>
//           <li>Orignals</li>
//           <li>Just Added</li>
//         </ul>
//         <h6
//           className="search"
//           onClick={() => {
//             const text = flag === false ? true : false;
//             setFlag(text);
//           }}
//         >
//           <i className="fa fa-search"></i>
//         </h6>
//         {flag === true ? (
//           <input
//             id="search"
//             type="search"
//             placeholder="What are you looking for ?"
//           />
//         ) : (
//           <input
//             id="searchs"
//             type="search"
//             placeholder="What are you looking for ?"
//           />
//         )}
//         <img className="logo" src={logo} alt="img" />
//         <ul className="subs">
//           <li>
//           <Link to='/register'>
//           Subscribe Now

//           </Link>
//           </li>
//           <li>
//           <Link to="/login">

//           Sign In
//           </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export const Nav = () => {
  return (
    <div class="top-0 flex flex-row fixed z-10  bg-transparent mb-[2rem]  w-full items-center   hover:bg-navbac">
      <div class="m-1 flex flex-row ml-14">
        <img
          src="https://play.hbomax.com/assets/images/primary_nav/desktop/browse_default_max.svg"
          alt=""
        />

        <div class="m-4 ml-10">
          <img
            src="https://play.hbomax.com/assets/images/primary_nav/desktop/search_default_max.svg"
            alt=""
          />
        </div>
      </div>
      <div class="mt-[0.3rem] mx-auto mr-60     ">
        <img
          src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
          alt=""
        />
      </div>
      <div class="mt-[0.3rem] mr-3 color-navfont font-bold">
        {" "}
        <h3 class="text-[#FFFFFFCC]">
        <Link to="/addons">

        Subscribe Now
        </Link>
        </h3>
      </div>
      <div class="mt-[0.3rem] mx-24 color-navfont fo">
        {" "}
        <h3 class="text-[#FFFFFFCC]">Sign In</h3>
      </div>
    </div>
  );
};
