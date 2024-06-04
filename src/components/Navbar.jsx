import React, { useState } from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import NavData from "../assets/NavData.jsx";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
    setHoverDropdown(true);
  };

  return (
    <div>
      <div className="mx-auto relative z-[100] py-4 px-4 flex items-center justify-between">
        <a href="#">
          <Tesla />
        </a>

        <ul className="hidden lg:flex font-medium text-sm">
          {/* Vehicles */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("vehicles")}
            onMouseLeave={() => activeCategory(false)}
          >
            <a
              href="#vehicles"
              className="hover:bg-[#B4BEC9] duration-500 px-5 py-[8px] rounded-md"
            >
              Vehicles
            </a>
          </motion.li>

          {/* Energy */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("energy")}
            onMouseLeave={() => activeCategory(false)}
          >
            <a
              href="#energy"
              className="hover:bg-[#B4BEC9] duration-500 px-5 py-[8px] rounded-md"
            >
              Energy
            </a>
          </motion.li>

          {/* Charging */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("charging")}
            onMouseLeave={() => activeCategory(false)}
          >
            <a
              href="#charging"
              className="hover:bg-[#B4BEC9] duration-500 px-5 py-[8px] rounded-md"
            >
              Charging
            </a>
          </motion.li>

          {/* Discover */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("discover")}
            onMouseLeave={() => activeCategory(false)}
          >
            <a
              href="#discover"
              className="hover:bg-[#B4BEC9] duration-500 px-5 py-[8px] rounded-md"
            >
              Discover
            </a>
          </motion.li>

          {/* Shop */}
          <motion.li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("shop")}
            onMouseLeave={() => activeCategory(false)}
          >
            <a
              href="#shop"
              className="hover:bg-[#B4BEC9] duration-500 px-5 py-[8px] rounded-md"
            >
              Shop
            </a>
          </motion.li>
        </ul>

        <ul className="hidden lg:flex space-x-4 text-2xl">
          <li>
            <a href="#">
              <CiCircleQuestion
                aria-label="Help"
                className="hover:bg-[#B4BEC9] rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineGlobal
                aria-label="Global"
                className="hover:bg-[#B4BEC9] rounded-md"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <IoPersonCircleOutline
                aria-label="Profile"
                className="hover:bg-[#B4BEC9] rounded-md"
              />
            </a>
          </li>
        </ul>
        <button className="block lg:hidden px-4 py-1 rounded-md bg-[#d2ddea]">
          Menu
        </button>
      </div>

      <DropDown
        hoverDropdown={hoverDropdown}
        setHoverDropdown={setHoverDropdown}
        activeCategory={activeCategory}
      />

      <AnimatePresence>
        {hoverDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed w-full h-screen top-0 z-[98] bg-black/50"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const DropDown = ({ hoverDropdown, setHoverDropdown, activeCategory }) => {
  const navLinks = [
    "Inventory",
    "Used Cars",
    "Demo Drive",
    "Trade-in",
    "Compare",
    "Help Me Charge",
    "Fleet",
    "Semi",
    "Roadster",
  ];

  return (
    <>
      <AnimatePresence>
        {hoverDropdown && (
          <motion.div
            className="w-full z-[99] fixed top-0 bg-white pt-36 pb-8 px-36"
            initial={{ opacity: 0, y: -40, display: "none" }}
            animate={{ opacity: 1, y: 0, display: "block" }}
            exit={{ opacity: 0, y: -40, display: "none" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            onMouseLeave={() => setHoverDropdown(false)}
          >
            <div className="max-w-[1400px] mx-auto flex items-start gap-16">
              <div className="grid xl:grid-cols-4 grid-cols-3">
                {NavData[activeCategory]?.map((item, index) => (
                  <motion.li
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                    }}
                    key={item.Model}
                    className="px-4 py-2 list-none"
                  >
                    <img src={item.NavImgURL} alt={item.Model} />
                    <p className="text-center">{item.Model}</p>
                    <a
                      href="#"
                      className="flex justify-center items-center space-x-4"
                    >
                      <span className="text-black/50 text-[14px] underline-offset-2 underline hover:decoration-2 decoration-black">
                        Learn
                      </span>
                      <span className="text-black/50 text-[14px] underline-offset-2 underline hover:decoration-2 decoration-black">
                        Order
                      </span>
                    </a>
                  </motion.li>
                ))}
              </div>
              <span className="w-[1px] bg-gray-200 h-[30vh]"></span>
              <ul className="space-y-1 pt-2">
                {navLinks.map((link, index) => (
                  <li
                    className="text-nowrap hover:underline decoration-2 underline-offset-4 duration-100 transform hover:scale-105"
                    key={index}
                  >
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
