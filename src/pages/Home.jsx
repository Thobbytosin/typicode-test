import React from "react";
import useFetchPosts from "../../hooks/fetchPosts";
import useFetchUsers from "../../hooks/fetchUsers";
import OurPosts from "../components/home/OurPosts";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";

const Home = () => {
  const { isLoading: postsLoading, data: postsData } = useFetchPosts();
  const { data: usersData, isLoading: usersLoading } = useFetchUsers();

  return (
    <>
      <div className="bg-[url(../src/assets/hero.png)] bg-no-repeat bg-cover max-w-screen xl:max-h-screen  ">
        <Header />
        <Hero />
        <OurPosts
          postsData={postsData}
          postsLoading={postsLoading}
          usersData={usersData}
          usersLoading={usersLoading}
        />
      </div>
    </>
  );
};

export default Home;
