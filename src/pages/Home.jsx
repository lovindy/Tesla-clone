import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      {/* Navigation bar */}
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      {/* Block of cards */}
      <div>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
