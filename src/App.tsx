import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Watch from "./pages/Watch";
import MyList from "./pages/MyList";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen  text-white">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/watch" Component={Watch} />
        <Route path="/my-list" Component={MyList} />
        <Route path="/search" Component={Search} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
};

export default App;
