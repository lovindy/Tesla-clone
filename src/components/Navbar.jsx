import React from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import NavData from "../assets/NavData.jsx";

function Navbar() {
  return (
    <div className="mx-auto py-4 px-4 flex items-center justify-between">
      <a href="#">
        <Tesla />
      </a>

      <ul className="hidden md:flex font-medium text-sm">
        {/* Vehicles */}
        <li className="relative group">
          <a
            href="#vehicles"
            className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md"
          >
            Vehicles
          </a>
          <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            {NavData.vehicles.map((item) => (
              <li key={item.Model} className="px-4 py-2">
                <a href="#" className="block hover:bg-gray-200">
                  <img
                    src={item.NavImgURL}
                    alt={item.Model}
                    className="w-16 h-16 object-cover inline-block mr-2"
                  />
                  {item.Model}
                </a>
              </li>
            ))}
          </ul>
        </li>

        {/* Energy */}
        <li className="relative group">
          <a
            href="#energy"
            className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md"
          >
            Energy
          </a>
          <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            {NavData.energy.map((item) => (
              <li key={item.Model} className="px-4 py-2">
                <a href="#" className="block hover:bg-gray-200">
                  <img
                    src={item.NavImgURL}
                    alt={item.Model}
                    className="w-16 h-16 object-cover inline-block mr-2"
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
            className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md"
          >
            Changing
          </a>
          <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            {NavData.changing.map((item) => (
              <li key={item.Model} className="px-4 py-2">
                <a href="#" className="block hover:bg-gray-200">
                  <img
                    src={item.NavImgURL}
                    alt={item.Model}
                    className="w-16 h-16 object-cover inline-block mr-2"
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
            className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md"
          >
            Discover
          </a>
          <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            {NavData.discover.map((item) => (
              <li key={item.Model} className="px-4 py-2">
                <a href="#" className="block hover:bg-gray-200">
                  <img
                    src={item.NavImgURL}
                    alt={item.Model}
                    className="w-16 h-16 object-cover inline-block mr-2"
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
            className="hover:bg-[#B4BEC9] px-5 py-[8px] rounded-md"
          >
            Shop
          </a>
          <ul className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 rounded-md transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            {NavData.shop.map((item) => (
              <li key={item.Model} className="px-4 py-2">
                <a href="#" className="block hover:bg-gray-200">
                  <img
                    src={item.NavImgURL}
                    alt={item.Model}
                    className="w-16 h-16 object-cover inline-block mr-2"
                  />
                  {item.Model}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <ul className="hidden md:flex space-x-4 text-2xl">
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
      <button className="block md:hidden px-2 py-1 rounded-md bg-[#d2ddea]">
        Menu
      </button>
    </div>
  );
}

export default Navbar;
