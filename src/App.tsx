import React from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-black w-full h-screen  text-white text-2xl">
      <Navbar />
      App
    </div>
  );
};

export default App;
