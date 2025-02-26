import React from "react";
import PhotoHero from "../components/photos/PhotoHero";
import Header from "../components/home/Header";
import useFetchPhotos from "../../hooks/fetchPhotos";
import PhotosGallery from "../components/photos/PhotosGallery";

const Photos = () => {
  const { data: photosData } = useFetchPhotos();

  return (
    <>
      <div className="bg-[url(../src/assets/photo.png)] bg-no-repeat bg-cover max-w-screen max-h-screen   ">
        <Header activeItem={1} />
        <PhotoHero />
        <PhotosGallery photos={photosData} />
      </div>
    </>
  );
};

export default Photos;
