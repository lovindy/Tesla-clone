import React from "react";
import Tesla from "../assets/tesla.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import ButtonTesla from "./Button";

function Navbar() {
  const navbarStyle = {
    backgroundImage:
      'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <nav className="min-h-screen" style={navbarStyle}>
      <div className="mx-auto py-4 px-4 flex items-center justify-between">
        <Tesla />

        <ul className="hidden md:flex space-x-4 font-medium text-sm">
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

      <div className="pt-[200px] flex justify-center items-center text-center">
        <div className="space-y-[450px]">
          <div>
            <h2 className="font-medium text-5xl">Model Y</h2>
            <p className="text-2xl tracking-wider pt-4 pb-2 underline underline-offset-2">
              1.49% APR Financing
            </p>
            <p className="text-base">
              From $299/mo¹ Lease After Est. Gas Savings Order Now
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <ButtonTesla className="bg-white hover:bg-gray-200 text-black transition duration-300 ease-in-out">
              Order Now
            </ButtonTesla>
            <ButtonTesla className="text-white bg-black hover:opacity-80 transition duration-300 ease-in-out">
              Demo Drive
            </ButtonTesla>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
