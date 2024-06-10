import React from "react";
import { motion } from "framer-motion";
import NavData from "../data/NavData";
import { dropdownItemVariants } from "../utility/Navigation";

const NavLinks = ({ activeCategory, navLinks }) => {
  if (activeCategory === "discover") {
    return (
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 gap-16">
          {navLinks.discover.map((block, blockIndex) => (
            <ul className="space-y-3 text-start text-[15px]" key={blockIndex}>
              <li className="text-[#737578] mb-5">{block.main}</li>
              {block.links.map((link, linkIndex) => (
                <li
                  className="font-medium text-nowrap hover:underline underline-offset-4 duration-100 transform hover:scale-105"
                  key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  } else if (activeCategory === "shop") {
    return (
      <div className="grid xl:grid-cols-4 grid-cols-3">
        {NavData[activeCategory]?.map((item, index) => (
          <motion.li
            initial="hidden"
            animate="visible"
            custom={index}
            variants={dropdownItemVariants}
            key={item.Model}
            className="px-4 py-2 list-none">
            <img src={item.NavImgURL} alt={item.Model} />
            <p className="text-center font-medium text-lg">{item.Model}</p>
          </motion.li>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <div className="grid xl:grid-cols-4 grid-cols-3">
          {NavData[activeCategory]?.map((item, index) => (
            <motion.li
              initial="hidden"
              animate="visible"
              custom={index}
              variants={dropdownItemVariants}
              key={item.Model}
              className="px-4 py-2 list-none">
              <img src={item.NavImgURL} alt={item.Model} />
              <p className="text-center text-lg font-medium">{item.Model}</p>
              <a
                href="#"
                className="flex justify-center items-center space-x-4">
                <span className="text-black/50 text-[14px] duration-500 hover:text-black underline-offset-2 underline hover:decoration-2 decoration-black">
                  Learn
                </span>
                <span className="text-black/50 text-[14px] duration-500 hover:text-black underline-offset-2 underline hover:decoration-2 decoration-black">
                  Order
                </span>
              </a>
            </motion.li>
          ))}
        </div>
        <span className="w-[1px] bg-gray-200 h-[30vh]"></span>
        <ul className="space-y-2 pt-2 flex flex-col items-start text-[14px] font-medium">
          {navLinks[activeCategory]?.map((link, index) => (
            <li
              className="relative overflow-x-hidden text-nowrap group"
              key={index}>
              <a href="#">{link}</a>
              <span className="w-0 group-hover:w-full absolute left-0 bottom-0 duration-150 bg-black h-0.5"></span>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default NavLinks;
