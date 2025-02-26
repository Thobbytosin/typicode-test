import React from "react";

const Hero = () => {
  return (
    <div className="w-full xl:h-screen p-10 flex xl:flex-row flex-col xl:justify-between lg:items-center ">
      {/* text */}
      <div className=" xl:w-[85%] w-full font-poppins ">
        <h1 className=" text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] font-medium mb-4 lg:max-w-[100%] lg:text-left text-center text-white">
          Welcome To Typicode Task Organization
        </h1>
        <p className=" leading-[1.6rem] sm:leading-[1.9rem] text-[18px] lg:text-left text-center text-white">
          FALODE GABRIEL TOBI
        </p>
        <br />

        <div className="xl:inline-block w-full flex justify-center items-center  ">
          {/* button */}
          <button className=" bg-primary px-6 py-2 rounded-md transition duration-300 hover:border hover:border-primary hover:text-primary hover:dark:text-white text-center text-white hover:bg-transparent lg:text-[14px] text-[12px]">
            Welcome
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
