import React from "react";
import cardsData from "../data/CardData";
import ButtonTesla from "./ButtonDesign";
function Card({ imgURL, title, financingText, leaseText, textColor }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-20 flex justify-center items-center text-center"
      style={{ backgroundImage: `url("${imgURL}")` }}>
      <div className="space-y-[450px]">
        <div className={textColor}>
          <h2 className="font-medium text-5xl">{title}</h2>
          <p className="text-lg py-2 font-medium tracking-wider">
            {financingText}
          </p>
          <p className="text-[10px]">{leaseText}</p>
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
  );
}
function CardsContainer() {
  return (
    <div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imgURL={card.imgURL}
          title={card.title}
          financingText={card.financingText}
          leaseText={card.leaseText}
          textColor={card.textColor} // Pass the textColor prop here
        />
      ))}
    </div>
  );
}

export default CardsContainer;
