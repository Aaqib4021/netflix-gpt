import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../Utils/openai";

const GptSearchBar = () => {
  const gptSearchText = useRef(null);
  const handleGptSearchbuttonCLick = async () => {
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult);
  };
  const currentLanguage = useSelector((store) => store.config.language);
  return (
    <div className=" pt-40 flex justify-center ">
      <form
        className="bg-black p-2 w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptSearchText}
          type="text"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
          className="py-2 px-4 rounded-md col-span-9"
        />
        <button
          className="text-white bg-red-500 font-semibold rounded-md py-2 px-4 mx-4 col-span-3"
          onClick={handleGptSearchbuttonCLick}
        >
          {lang[currentLanguage].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
