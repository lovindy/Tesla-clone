import React from "react";
import Tesla from "../assets/tesla.jsx";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";

function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-2xl mx-auto py-2 px-4 bg-gray-400 flex items-center justify-between">
        <Tesla />
        <ul className="flex space-x-4 font-medium text-sm">
          <h1>Vehicles</h1>
          <h1>Energy</h1>
          <h1>Changing</h1>
          <h1>Discover</h1>
          <h1>Shop</h1>
        </ul>

        <ul className="flex space-x-2">
          <IoMdPerson className="size-[20px]"/>
          <AiOutlineGlobal className="size-[20px]"/>
          <CiCircleQuestion className="size-[20px]"/>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
