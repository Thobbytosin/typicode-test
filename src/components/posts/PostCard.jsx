import React from "react";

const PostCard = ({ post, i }) => {
  return (
    <div
      key={i}
      className=" cursor-pointer w-[380px] lg:w-[370px] h-[160px]  bg-gray-100  hover:shadow-lg hover:border hover:border-gray-200 hover:dark:border-gray-900 transition duration-500 font-poppins p-4"
    >
      <h3 className=" font-semibold mb-2 capitalize text-left line-clamp-1">
        {post.title}
      </h3>
      <p className="text-gray-500 text-sm line-clamp-3">{post.body}</p>
      <p className=" mt-3 italic text-gray-600 text-xs md:text-sm">
        Posted by <span className=" text-red-600">{post.owner.name}</span>
      </p>
    </div>
  );
};

export default PostCard;
