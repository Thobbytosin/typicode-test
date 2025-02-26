import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, fallback }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <LazyLoadImage
      alt="photo_image"
      effect="blur"
      src={imgSrc}
      onError={() => setImgSrc(fallback)}
      className=" h-full w-full"
    />
  );
};

export default Img;
