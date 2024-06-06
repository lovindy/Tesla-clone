import React, { useState } from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import DropDown from "./DropDown.jsx";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [state, setState] = useState({
    hoverDropdown: false,
    activeCategory: "",
    menuOpen: false,
    newMenuOpen: false, // State for new menu
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

  const menuItems = [
    { label: "Vehicles", showChevron: true },
    { label: "Energy", showChevron: true },
    { label: "Charging", showChevron: true },
    { label: "Discover", showChevron: true },
    { label: "Shop", showChevron: false },
    { label: "Support", showChevron: false },
  ];

  // Variants for animation
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
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

        {/* Toggle button for main menu */}

        {/* Toggle button for new menu */}
        <button
          className="block lg:hidden px-4 py-1 rounded-md bg-[#d2ddea]"
          onClick={toggleMenu} // Toggle new menu visibility on click
        >
          Menu
        </button>

        {/* Conditional rendering of navigation links */}
        <ul
          className={`lg:flex font-medium text-sm tracking-wider ${
            menuOpen ? "" : "hidden"
          }`}>
          {/* Your existing navigation links */}
          {/* Vehicles */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("vehicles")}>
            <a
              href="#vehicles"
              className={`hover:bg-[#f2f2f2] duration-500 px-5 py-[8px] rounded-md ${
                activeCategory === "vehicles" ? "bg-[#f2f2f2]" : ""
              }`}>
              Vehicles
            </a>
          </motion.li>

          {/* Energy */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("energy")}>
            <a
              href="#energy"
              className={`hover:bg-[#f2f2f2] duration-500 px-5 py-[8px] rounded-md ${
                activeCategory === "energy" ? "bg-[#f2f2f2]" : ""
              }`}>
              Energy
            </a>
          </motion.li>

          {/* Charging */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("charging")}>
            <a
              href="#charging"
              className={`hover:bg-[#f2f2f2] duration-500 px-5 py-[8px] rounded-md ${
                activeCategory === "charging" ? "bg-[#f2f2f2]" : ""
              }`}>
              Charging
            </a>
          </motion.li>

          {/* Discover */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("discover")}>
            <a
              href="#discover"
              className={`hover:bg-[#f2f2f2] duration-500 px-5 py-[8px] rounded-md ${
                activeCategory === "discover" ? "bg-[#f2f2f2]" : ""
              }`}>
              Discover
            </a>
          </motion.li>

          {/* Shop */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("shop")}>
            <a
              href="#shop"
              className={`hover:bg-[#f2f2f2] duration-500 px-5 py-[8px] rounded-md ${
                activeCategory === "shop" ? "bg-[#f2f2f2]" : ""
              }`}>
              Shop
            </a>
          </motion.li>
        </ul>

        {/* navigation links */}
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

      {/* New menu */}
      <AnimatePresence>
        {newMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="bg-white top-0 fixed text-[20px] z-[101] p-4 w-full h-screen flex flex-col items-end">
            <button
              className="m-4 px-[1px] duration-300 border-none rounded-md hover:bg-[#f2f2f2]"
              onClick={closeMenu} // Close new menu on click
            >
              <CloseIcon />
            </button>
            <ul className="w-full space-y-2 px-2 py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-[#f2f2f2] duration-300 rounded-lg px-2 py-4 flex justify-between items-center">
                  <a href="#">{item.label}</a>
                  {item.showChevron && <ChevronRightIcon />}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Your Dropdown component */}
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

      {/* Overlay for dropdown */}
      <AnimatePresence>
        {hoverDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed w-full h-screen top-0 z-[98] bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm"></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
