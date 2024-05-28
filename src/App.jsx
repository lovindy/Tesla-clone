import React from "react";
import Card from "./components/Card"
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      {/* Navigation bar */}
      <div className="w-full absolute top-0">
        <Navbar/>
      </div>
      {/* Block of cards */}
      <div>
      <Card />
      </div>
    </div>
  );
}

export default App;
