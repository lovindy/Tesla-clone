import React from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import NavData from "../assets/NavData.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [hoverDropdown, setHoverDropdown] = useState(false);

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
            onMouseEnter={() => setHoverDropdown(true)}>
            <a
              href="#vehicles"
              className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md">
              Vehicles
            </a>
          </motion.li>

          {/* Energy */}
          <li className="relative group">
            <a
              href="#energy"
              className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md">
              Energy
            </a>
            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              {NavData.energy.map((item) => (
                <li key={item.Model} className="px-4 py-2">
                  <a href="#" className="block ">
                    <img
                      src={item.NavImgURL}
                      alt={item.Model}
                      className="object-cover inline-block mr-2"
                    />
                    {item.Model}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Changing */}
          <li className="relative group">
            <a
              href="#changing"
              className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md">
              Changing
            </a>
            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              {NavData.changing.map((item) => (
                <li key={item.Model} className="px-4 py-2">
                  <a href="#" className="block ">
                    <img
                      src={item.NavImgURL}
                      alt={item.Model}
                      className="object-cover inline-block mr-2"
                    />
                    {item.Model}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Discover */}
          <li className="relative group">
            <a
              href="#discover"
              className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md">
              Discover
            </a>
            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              {NavData.discover.map((item) => (
                <li key={item.Model} className="px-4 py-2">
                  <a href="#" className="block ">
                    <img
                      src={item.NavImgURL}
                      alt={item.Model}
                      className="object-cover inline-block mr-2"
                    />
                    {item.Model}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Shop */}
          <li className="relative group">
            <a
              href="#shop"
              className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md">
              Shop
            </a>
            <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              {NavData.shop.map((item) => (
                <li key={item.Model} className="px-4 py-2">
                  <a href="#" className="block ">
                    <img
                      src={item.NavImgURL}
                      alt={item.Model}
                      className="object-cover inline-block mr-2"
                    />
                    {item.Model}
                  </a>
                </li>
              ))}
            </ul>
          </li>
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
      />
    </div>
  );
}

const DropDown = ({ hoverDropdown, setHoverDropdown }) => {
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
            className="w-full z-[99] fixed top-0 bg-white pt-36 pb-20 px-36"
            initial={{ opacity: 0, y: -40, display: "none" }}
            animate={{ opacity: 1, y: 0, display: "block" }}
            exit={{ opacity: 0, y: -40, display: "none" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            onMouseLeave={() => setHoverDropdown(false)}>
            <div className="max-w-[1400px] mx-auto flex items-start gap-16">
              {/* Cars */}
              <div className="grid grid-cols-4 gap-10">
                {NavData.vehicles.map((item) => (
                  <li key={item.Model} className="px-4 py-2 list-none">
                    <img src={item.NavImgURL} alt={item.Model} />
                    <p className="text-center">{item.Model}</p>
                    <a
                      href="#"
                      className="flex justify-center items-center space-x-4">
                      <span className="text-black/50 text-[14px] underline-offset-2 underline hover:no-underline">
                        Learn
                      </span>
                      <span className="text-black/50 text-[14px] underline-offset-2 underline hover:no-underline">
                        Order
                      </span>
                    </a>
                  </li>
                ))}
              </div>
              {/* line */}
              <span className="w-[1px] bg-gray-200 h-[30vh]"></span>
              {/* List item */}
              <ul className="space-y-1 pt-2">
                {navLinks.map((link, index) => (
                  <li className="text-nowrap hover:underline underline-offset-4 duration-300" key={index}>
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
