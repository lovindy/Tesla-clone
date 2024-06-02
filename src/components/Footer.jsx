import React from "react";
import FooterData from "./FooterData";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="text-[12px] text-[#cfcfd0] max-w-screen-sm text-center mx-auto p-4">
        <div>
          {FooterData.prices.map((price, index) => {
            // Split the price text to find the part that needs to be underlined
            const [mainText, underlineText] = price.split(
              " Learn about est. gas savings."
            );
            return (
              <div className="flex flex-col" key={index}>
                <p>{mainText}</p>
                <p>
                  <a href="#">
                    <span className="underline-offset-4 underline hover:decoration-2 duration-700">
                      Learn about est. gas savings.
                    </span>
                  </a>
                </p>
              </div>
            );
          })}
        </div>
        <a href="#" className="block mt-4">
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
