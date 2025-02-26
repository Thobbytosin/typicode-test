import React from "react";
import Img from "./LazyLoadImage";
import fallback from "../../assets/no-image.jpg";

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <div className="flex gap-4 overflow-hidden -mx-5 px-5 mt-5 md:mt-10 font-poppins ">
        <div className=" relative w-[400px] md:w-[250px] h-[200px]  flex-shrink-0 cursor-pointer">
          <div className="">
            <Img src={photo?.url} fallback={fallback} />
          </div>
          <div className=" absolute top-0 left-0 flex justify-center items-center w-full h-full ">
            <p className=" text-xs line-clamp-1 text-center font-medium max-w-[70%] mx-auto">
              {photo.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
