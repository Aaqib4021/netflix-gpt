import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] pl-12 absolute bg-gradient-to-r from-black to-transparent blur-[0.5px]">
      <h1 className="text-5xl font-semibold font-mono text-transparent bg-gradient-to-t from-red-500 to-blue-500 bg-clip-text">
        {title}
      </h1>
      <p className="  my-4 w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white px-4 py-2 font-semibold rounded-md mr-4 hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="bg-gray-500 bg-opacity-10  px-4 py-2 font-semibold rounded-md text-white">
          ℹ️More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
