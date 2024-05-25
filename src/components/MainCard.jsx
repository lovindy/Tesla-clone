import React from "react";
import ButtonTesla from "./ButtonDesign";
import Navbar from "./Navbar";

function MainCard() {
  const navbarStyle = {
    backgroundImage:
      'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <nav className="min-h-screen" style={navbarStyle}>
      <Navbar />

      <div className="pt-[200px] space-y-[450px] flex flex-col justify-evenly items-center text-center">
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
    </nav>
  );
}

export default MainCard;
