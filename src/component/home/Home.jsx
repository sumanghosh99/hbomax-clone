import { Link } from "react-router-dom";
import homebg from "../../images/background/homebg.jpg";
import raisebywolf from "../../images/background/raisedbywolf.jpg";

export const Home = () => {
  return (
    <div
      class="h-[35rem]  text-white text-left   brightness-105 drop-shadow bg-center-top  ..."
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <div class="h-[30rem] w-[50rem] bg-none">
        <img
          class="  pt-[18rem]  mb-[1rem]  flex justify-center ml-[3rem]"
          src={raisebywolf}
          alt=""
        />
        <p class="ml-12  text-base text-white font-semibold ">
          Revist your favorites. Discover new ones.{" "}
        </p>
        <p class="ml-12  text-white font-normal ">
          Stream the best movies, series, originals, and more.{" "}
        </p>
        <button
          class="ml-12  -mt-[0.1rem] p-2  rounded-3xl text-bt-text text-xl..."
          style={{
            background:
              "linear-gradient(90deg, rgb(71, 16, 193), rgb(120, 87, 255) 92%, rgb(129, 155, 253) 100%)",
          }}
        >
          <Link to="/addons">SIGN UP NOW</Link>
        </button>
      </div>
    </div>
  );
};
