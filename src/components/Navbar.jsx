import React from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";

function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto py-4 px-4 flex items-center justify-between">
      <Tesla />
      <ul className="flex font-medium text-sm">
        <li>
          <a
            href="#vehicles"
            className="hover:bg-gray-200 px-4 py-[8px] rounded-md">
            Vehicles
          </a>
        </li>
        <li>
          <a
            href="#energy"
            className="hover:bg-gray-200 px-4 py-[8px] rounded-md">
            Energy
          </a>
        </li>
        <li>
          <a
            href="#changing"
            className="hover:bg-gray-200 px-4 py-[8px] rounded-md">
            Changing
          </a>
        </li>
        <li>
          <a
            href="#discover"
            className="hover:bg-gray-200 px-4 py-[8px] rounded-md">
            Discover
          </a>
        </li>
        <li>
          <a
            href="#shop"
            className="hover:bg-gray-200 px-4 py-[8px] rounded-md">
            Shop
          </a>
        </li>
      </ul>

      <ul className="flex space-x-4 text-2xl">
        <li>
          <a href="#">
            <CiCircleQuestion
              aria-label="Help"
              className="hover:bg-gray-200 rounded-md"
            />
          </a>
        </li>

        <li>
          <a href="#">
            <AiOutlineGlobal
              aria-label="Global"
              className="hover:bg-gray-200 rounded-md"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <IoPersonCircleOutline
              aria-label="Profile"
              className="hover:bg-gray-200 rounded-md"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
