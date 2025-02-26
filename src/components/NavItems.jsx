import React from "react";
import { HomeIcon } from "../icons/icons";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon fontSize="small" />,
  },
];

const NavItems = ({ activeItem, isMobile }) => {
  return (
    <>
      {/* laptop */}
      <div className=" hidden md:flex gap-4 text-sm font-semibold font-poppins">
        {navItemsData &&
          navItemsData.map((item, index) => (
            <a href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "text-primary"
                    : "text-black dark:text-white"
                } text-white`}
              >
                {item.name}
              </span>
            </a>
          ))}
      </div>

      {/* mobile */}
      {isMobile && (
        <div className=" md:hidden">
          {navItemsData &&
            navItemsData.map((item, index) => (
              <a href={item.url} key={index} passHref>
                <div className=" flex items-center gap-4 py-4 px-6 transition border-b border-slate-200 dark:border-slate-800 duration-500 hover:bg-primary hover:text-white rounded-lg text-sm">
                  <span className=" text-slate-60">{item.icon}</span>
                  <span
                    className={` font-medium ${
                      activeItem === index
                        ? "text-primary"
                        : " dark:text-white "
                    } `}
                  >
                    {item.name}
                  </span>
                </div>
              </a>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
