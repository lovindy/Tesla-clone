import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { menuVariants } from "../utility/Navigation";

function Menu({ newMenuOpen, closeMenu }) {
  const menuItems = [
    { label: "Vehicles", showChevron: true },
    { label: "Energy", showChevron: true },
    { label: "Charging", showChevron: true },
    { label: "Discover", showChevron: true },
    { label: "Shop" },
    { label: "Support" },
  ];

  return (
    <AnimatePresence>
      {newMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          transition={menuVariants.transition}
          className="bg-white top-0 fixed text-[20px] z-[101] p-4 w-full h-screen flex xl:hidden flex-col items-end">
          <button
            className="m-4 px-[1px] duration-300 border-none rounded-md hover:bg-[#f2f2f2]"
            onClick={closeMenu}>
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
  );
}

export default Menu;
