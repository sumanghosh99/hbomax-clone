import { useState } from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div class="flex flex-row fixed z-10 top-0  bg-transparent  w-full items-center   hover:bg-navbac  mb-[2rem]">
      <div class="m-1 flex flex-row ml-14">
        <img
          src="https://play.hbomax.com/assets/images/primary_nav/desktop/browse_default_max.svg"
          alt=""
        />

        <div
          class="m-4 ml-10"
          onClick={() => {
            const text = flag === false ? true : false;
            setFlag(text);
          }}
        >
          <img
            src="https://play.hbomax.com/assets/images/primary_nav/desktop/search_default_max.svg"
            alt=""
          />
        </div>

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
            class="hidden"
          />
        )}
      </div>
      <div class="mt-[0.3rem] mx-auto mr-60     ">
        <img
          src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg"
          alt=""
        />
      </div>
      <div class="mt-[0.3rem] mr-3 color-navfont font-bold">
        <Link to="login">
          <h3 class="text-[#FFFFFFCC]">Subscribe Now</h3>
        </Link>
      </div>
      <div class="mt-[0.3rem] mx-24 color-navfont fo">
        <Link to="/register">
          <h3 class="text-[#FFFFFFCC]">Sign In</h3>
        </Link>
      </div>
    </div>
  );
};
