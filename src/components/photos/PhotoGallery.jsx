import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoCard from "./PhotoCard";
import Loader from "../Loader/Loader";
import { styles } from "../../styles/style";

const PhotoGallery = ({ photos }) => {
  const [pageNum, setPageNum] = useState(1);

  const fetchNextPageData = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <div className={`bg-white ${styles.paddingX} ${styles.paddingY} `}>
      <h2 className={`${styles.sectionTitle} `}>Photo Gallery</h2>
      <InfiniteScroll
        className=" flex flex-wrap justify-center  gap-4"
        dataLength={photos?.length || []}
        next={fetchNextPageData}
        hasMore={pageNum <= photos?.length}
        loader={<Loader />}
      >
        {photos?.map((photo) => {
          return <PhotoCard photo={photo} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default PhotoGallery;
