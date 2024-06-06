import React, { useState } from "react";
import FooterData from "../data/FooterData";
import { motion } from "framer-motion";

const Footer = () => {
  // State to manage hover state for each link independently
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="w-full bg-black">
      <div className="text-[12px] max-w-screen-sm text-center mx-auto p-4">
        <div className="space-y-2">
          {FooterData.prices.map((price, index) => {
            // Split the price text to find the part that needs to be underlined
            const [mainText, underlineText] = price.split(
              " Learn about est. gas savings."
            );

            return (
              <div className="flex flex-col" key={index}>
                <p className="text-[#cfcfd0]">{mainText}</p>
                <p>
                  <a href="#">
                    <motion.span
                      onMouseEnter={() => setHoveredLink(index)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`text-[#cfcfd0] underline-offset-4 underline decoration-white transition duration-500 ease-out ${
                        hoveredLink === index ? "text-white decoration-2" : ""
                      }`}
                      whileHover={{
                        scale: 1.1,
                        textDecorationThickness: "2px",
                      }}>
                      Learn about est. gas savings.
                    </motion.span>
                  </a>
                </p>
              </div>
            );
          })}
        </div>
        <a href="#" className="text-[#cfcfd0] block mt-4">
          <ul className="flex sm:flex-row flex-col items-center justify-between">
            {FooterData.menu.map((item, index) => (
              <li key={index} className="m-2">
                {item}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </div>
  );
};

export default Footer;
