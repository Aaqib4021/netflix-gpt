import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background_img } from "../Utils/Constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img
          src={Background_img}
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
      <GptSearchBar />
      {/* <GptMovieSuggestions /> */}
    </div>
  );
};

export default GptSearch;
