import React from "react";
import bookImage from "../../../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] my-8 rounded-2xl container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
        <img
          src={bookImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn bg-green-600 text-white mt-5">View the List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
