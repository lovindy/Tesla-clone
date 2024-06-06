import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavData from "../data/NavData";
const DropDown = ({
  hoverDropdown,
  setHoverDropdown,
  activeCategory,
  setActiveCategory,
}) => {
  const navLinks = {
    vehicles: [
      "Inventory",
      "Used Cars",
      "Demo Drive",
      "Trade-in",
      "Compare",
      "Help Me Charge",
      "Fleet",
      "Semi",
      "Roadster",
    ],
    energy: [
      "Schedule a Consultation",
      "Why Solar",
      "Incentives",
      "Support",
      "Partner with Tesla",
      "Commercial",
      "Utilities",
    ],
    charging: [
      "Help Me Charge",
      "Charging Calculator",
      "Charging With NACS",
      "Supercharger Voting",
      "Host a Supercharger",
      "Commercial Charging",
      "Host Wall Connectors",
    ],
    discover: [
      {
        main: "Resources",
        links: [
          "Demo Drive",
          "Insurance",
          "Video Guides",
          "Customer Stories",
          "Events",
        ],
      },
      {
        main: "Location Services",
        links: [
          "Find Us",
          "Find a Collision Center",
          "Find a Certified Installer",
        ],
      },
      {
        main: "Company",
        links: ["About", "Careers", "Investor Relations"],
      },
    ],
  };

  return (
    <>
      <AnimatePresence>
        {hoverDropdown && (
          <motion.div
            className="w-full z-[99] fixed top-0 bg-white pt-36 pb-12 px-36 shadow-2xl tracking-wider"
            initial={{ opacity: 0, y: -40, display: "none" }}
            animate={{ opacity: 1, y: 0, display: "block" }}
            exit={{ opacity: 0, y: -40, display: "none" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            onMouseLeave={() => {
              setHoverDropdown(false);
              setActiveCategory("");
            }}>
            <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-12">
              {activeCategory === "discover" ? (
                <div className="w-full flex justify-center">
                  <div className="grid grid-cols-3 gap-16">
                    {navLinks.discover.map((block, blockIndex) => (
                      <ul
                        className="space-y-3 text-start text-[15px]"
                        key={blockIndex}>
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
              ) : activeCategory === "shop" ? (
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
                      className="px-4 py-2 list-none">
                      <img src={item.NavImgURL} alt={item.Model} />
                      <p className="text-center font-medium text-lg">
                        {item.Model}
                      </p>
                    </motion.li>
                  ))}
                </div>
              ) : (
                <>
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
                        className="px-4 py-2 list-none">
                        <img src={item.NavImgURL} alt={item.Model} />
                        <p className="text-center text-lg font-medium">
                          {item.Model}
                        </p>
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default DropDown;
