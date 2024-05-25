import React from "react";
import ButtonTesla from "./Button";
import Navbar from "./Navbar";

function MainCard() {
  const navbarStyle = {
    backgroundImage:
      'url("https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center p-20 flex justify-center items-center text-center"
        style={navbarStyle}>
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
    </div>
  );
}

export default MainCard;
