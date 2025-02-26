import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { styles } from "../../styles/style";
import NavItem from "../NavItem";

const Header = ({ activeItem }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [active, setActive] = useState(false);

  // for sticky state
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  // close sidebar
  const handleCloseSidebar = (e) => {
    if (e.target.id === "sidebar") {
      setOpenSidebar(false);
    }
  };

  return (
    <div
      className={`${
        active
          ? "   bg-black fixed top-0 left-0 w-full min-h-[50px] z-[80] border-b dark:border-[#ffffff1c] dark:shadow transition duration-500"
          : "bg-black/30 w-full   min-h-[50px] z-[80]"
      }`}
    >
      <div className={`w-full py-2 ${styles.paddingX}  h-full `}>
        <div className="w-full h-[50px]  flex items-center justify-between  gap-10">
          {/* Logo */}
          <div>
            <h3 className=" font-semibold font-poppins text-md text-white">
              FALODE GABRIEL TOBI
            </h3>
          </div>

          {/* Nav links */}
          <div className=" flex items-center gap-4">
            <NavItem key={1} activeItem={activeItem} isMobile={false} />

            {/* mobile */}

            {/* menu toggler */}
            <div
              className=" md:hidden block"
              onClick={() => setOpenSidebar(true)}
            >
              <span className=" text-white text-base sm:text-xl cursor-pointer">
                <FaHamburger fontSize="inherit" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile sidebar */}

      <div
        id="sidebar"
        className={`fixed w-full h-screen top-0 left-0 z-[9999] transition-all duration-700 bg-black/50   ${
          openSidebar ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
        onClick={handleCloseSidebar}
      >
        <div className=" w-[65%] flex flex-col justify-between fixed right-0 top-0  bg-white dark:bg-black z-[999999] h-screen py-6">
          <div>
            <div className=" mb-8 ml-6">
              <a href={"/"} className=" flex items-center">
                <h3 className=" font-semibold text-xs text-black dark:text-white">
                  FALODE GABRIEL TOBI
                </h3>
              </a>
            </div>
            <NavItem activeItem={activeItem} isMobile={true} />
          </div>

          <div className="">
            <p className=" ml-6 text-xs text-black dark:text-white text-start">
              &copy; {new Date().getFullYear()} Falode Gabriel Tobi, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
