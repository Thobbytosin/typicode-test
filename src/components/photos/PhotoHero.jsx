import React from "react";

const PhotoHero = () => {
  return (
    <div className="  w-full h-full p-10 flex xl:flex-row flex-col xl:justify-between lg:items-center ">
      {/* text */}
      <div className="  w-full font-poppins ">
        <h1 className=" text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-medium mb-4 lg:max-w-[100%]  text-center text-white">
          Welcome To Typicode Task Organization
        </h1>
        <p className=" leading-[1.6rem] sm:leading-[1.9rem] text-[18px]  text-center text-white">
          Explore through our gallery
        </p>
        <br />
      </div>
    </div>
  );
};

export default PhotoHero;
