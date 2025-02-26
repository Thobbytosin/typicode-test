import { styles } from "../../styles/style";
import React, { useState } from "react";
import PostCard from "../posts/PostCard";
import Loader from "../Loader/Loader";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons/icons";
// import CourseCard from "../Course/CourseCard";

const OurPosts = ({ postsData, postsLoading, usersData, usersLoading }) => {
  // console.log(postsData);
  // console.log(usersData);
  // find post with owners
  const postsWithOwners = postsData?.map((post) => {
    const owner = usersData?.find((user) => user.id === post.userId);

    return {
      ...post,
      owner: owner ? { name: owner.name, email: owner.email } : null,
    };
  });

  const [searchText, setSearchText] = useState("");
  const [searchedPostsResults, setSearchedPostsResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const displayedPosts = searchText ? searchedPostsResults : postsWithOwners;
  const postsPerPage = 9;
  const totalPosts = displayedPosts?.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pagesArray = [];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // handle next page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1); // go to next page
    }
  };

  // handle previous page change
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1); // go to previous page
    }
  };

  // pages array
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  // SEARCH FUNCTIONALITY

  const filterSearch = (searchtext) => {
    const results = postsWithOwners?.filter(
      (post) =>
        post.owner?.name.toLowerCase().includes(searchtext.toLowerCase()) ||
        post.title.toLowerCase().includes(searchtext.toLowerCase()) ||
        post.body.toLowerCase().includes(searchtext.toLowerCase())
    );
    return results;
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterSearch(e.target.value);
        setSearchedPostsResults(searchResult);
        setCurrentPage(1); // set current page to first page after search ends
      }, 500)
    );
  };

  return (
    <div
      className={`w-full bg-white ${styles.paddingX} ${styles.paddingY} font-poppins`}
    >
      <div className=" w-full flex flex-col md:flex-row items-center justify-between">
        <h2 className={styles.sectionTitle}>Posts</h2>

        <form className=" relative w-full lg:w-[300px] flex-center bg-gray-300 p-1 rounded-md my-8 md:my-0 ">
          <input
            type="search"
            placeholder="Search for post(keywords, writer)..."
            value={searchText}
            onChange={handleSearchChange}
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi px-5  text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0 peer"
          />
        </form>
      </div>

      {searchText && searchedPostsResults.length > 1 ? (
        <h2 className=" my-8 text-lg text-blue-700 font-poppins font-medium">
          {searchedPostsResults.length === 1
            ? `${searchedPostsResults.length} post found`
            : `${searchedPostsResults.length} posts found`}
        </h2>
      ) : null}

      {/* posts */}
      <div className=" w-full flex justify-center items-center sm:flex-row flex-col gap-4 mt-[3rem] flex-wrap ">
        {postsLoading || usersLoading ? (
          <Loader />
        ) : displayedPosts.length ? (
          displayedPosts
            ?.slice(indexOfFirstPost, indexOfLastPost)
            .map((post, i) => <PostCard key={i} post={post} i={i} />)
        ) : (
          <p className="text-lg">No post found</p>
        )}
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <div className=" flex justify-center items-center my-20 md:my-10 flex-wrap gap-3">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            className="cursor-pointer"
          >
            <ChevronLeftIcon fontSize="large" />
          </button>

          <div
            className={` ${
              searchText && searchedPostsResults.length <= 50 ? "flex" : "grid"
            } justify-center grid-cols-6  sm:grid-cols-4 md:grid-cols-12 gap-3 `}
          >
            {pagesArray?.map((page, i) => (
              <button
                type="button"
                onClick={() => handlePageChange(page)}
                key={i}
                className={`cursor-pointer lg:w-10 lg:h-10 w-6 h-6 rounded-full ${
                  page === currentPage ? "bg-red-500" : "bg-blue-700"
                } transition-all duration-800  font-poppins`}
              >
                <p className="text-center text-white md:text-md text-sm">
                  {page}
                </p>
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className="cursor-pointer"
          >
            <ChevronRightIcon fontSize="large" />
          </button>
        </div>
      )}
    </div>
  );
};

export default OurPosts;
