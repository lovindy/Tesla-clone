import React, { useState } from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import DropDown from "./DropDown.jsx";
import Menu from "./Menu.jsx";
import { overlayBackgroundVariants } from "../utility/Navigation";

function Navbar() {
  const [state, setState] = useState({
    hoverDropdown: false,
    activeCategory: "",
    menuOpen: false,
    newMenuOpen: false,
  });

  const { hoverDropdown, activeCategory, menuOpen, newMenuOpen } = state;

  const handleMouseEnter = (category) => {
    setState((prevState) => ({
      ...prevState,
      activeCategory: category,
      hoverDropdown: true,
    }));
  };

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      newMenuOpen: !prevState.newMenuOpen,
    }));
  };

  const closeMenu = () => {
    setState((prevState) => ({
      ...prevState,
      newMenuOpen: false,
    }));
  };

  return (
    <div>
      <div
        className={`mx-auto relative z-[100] py-4 px-8 flex items-center justify-between ${
          menuOpen ? "bg-gray-100" : ""
        }`}>
        <a href="#">
          <Tesla />
        </a>

        <button
          className="block lg:hidden px-4 py-1 rounded-md bg-black/5"
          onClick={toggleMenu}>
          Menu
        </button>

        {/* Mobile menu */}
        <ul
          className={`lg:flex font-medium text-sm tracking-wider ${
            menuOpen ? "" : "hidden"
          }`}>
          {["vehicles", "energy", "charging", "discover", "shop"].map(
            (category) => (
              <motion.li
                key={category}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(category)}>
                <a
                  href={`#${category}`}
                  className={`hover:bg-[#f2f2f2] duration-500 px-5 py-[8px] rounded-md ${
                    activeCategory === category ? "bg-[#f2f2f2]" : ""
                  }`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </motion.li>
            )
          )}
        </ul>

        {/* Right side icons */}
        <ul className="hidden lg:flex space-x-4 text-2xl">
          <li>
            <a href="#">
              <CiCircleQuestion
                aria-label="Help"
                className="hover:bg-black hover:bg-opacity-10 rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineGlobal
                aria-label="Global"
                className="hover:bg-black hover:bg-opacity-10 rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <IoPersonCircleOutline
                aria-label="Profile"
                className="hover:bg-black hover:bg-opacity-10 rounded-md"
              />
            </a>
          </li>
        </ul>
      </div>

      <Menu
        newMenuOpen={newMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />

      <DropDown
        hoverDropdown={hoverDropdown}
        setHoverDropdown={(value) =>
          setState((prevState) => ({ ...prevState, hoverDropdown: value }))
        }
        activeCategory={activeCategory}
        setActiveCategory={(value) =>
          setState((prevState) => ({ ...prevState, activeCategory: value }))
        }
      />

      <AnimatePresence>
        {hoverDropdown && (
          <motion.div
            variants={overlayBackgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={overlayBackgroundVariants.transition}
            className="fixed w-full h-screen top-0 z-[98] bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm"></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
