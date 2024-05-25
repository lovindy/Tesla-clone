import React from "react";
import ButtonTesla from "./Button";
import cardsData from "../assets/CardData"; // Import your data array

function Card({ imgURL, title, financingText, leaseText, textColor }) {
  const textClassName = textColor === "white" ? "text-white" : "text-black";

  return (
    <div
      className="min-h-screen bg-cover bg-center p-20 flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url("${imgURL}")` }}
    >
      <div className="space-y-[450px]">
        <div>
          <h2 className="font-medium text-5xl">{title}</h2>
          <p className="text-2xl tracking-wider pt-4 pb-2 underline underline-offset-2">
            {financingText}
          </p>
          <p className="text-lg">
            {leaseText}
          </p>
        </div>
        <div className="space-x-6">
          <ButtonTesla className={`w-full md:w-auto bg-white hover:bg-gray-200`}>
            Order Now
          </ButtonTesla>
          <ButtonTesla className={`w-full md:w-auto text-white bg-black hover:opacity-80`}>
            Demo Drive
          </ButtonTesla>
        </div>
      </div>
    </div>
  );
}

function CardsContainer() {
  // Example: Determine textColor dynamically based on some condition
  const textColor = "white"; // You can set this based on some logic

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imgURL={card.imgURL}
          title={card.title}
          financingText={card.financingText}
          leaseText={card.leaseText}
          textColor={textColor} // Pass the textColor prop here
        />
      ))}
    </div>
  );
}

export default CardsContainer;
