import React, { useState } from "react";
import { Link } from "react-router";

import { Bell, ChevronRight, Search } from "lucide-react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";

const Navbar: React.FC = () => {
  const [isSearchActive, setisSearchActive] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col px-5 md:px-10 transition-all duration-300 ease-in-out">
      <div className="w-full flex items-center justify-between max-w-full">
        <nav className="flex text-base text-gray-300 gap-6 items-center">
          {/*logo*/}
          <Link to={"/"}>
            <img className="w-28 h-full" src={logo} alt="netflix logo" />
          </Link>

          {/*nav links*/}
          <Link
            className="hidden lg:block hover:text-white cursor-pointer"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="hidden lg:block hover:text-white cursor-pointer"
            to={"/#tv-shows"}
          >
            Tv Shows
          </Link>
          <Link
            className="hidden lg:block hover:text-white cursor-pointer"
            to={"#movies"}
          >
            Movies
          </Link>
          <Link
            className="hidden lg:block  hover:text-white cursor-pointer"
            to={"#new-and-popular"}
          >
            New & Popular
          </Link>
          <Link
            className="hidden lg:block hover:text-white cursor-pointer"
            to={"/my-list"}
          >
            My List
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/*search container*/}
          <div
            className={`relative h-8 flex items-center transition-all duration-300 ease-in-out ${isSearchActive ? "w-72 p-2" : "w-auto"} `}
          >
            <button
              className={`flex justify-center text-base items-center p-2 focus:outline-none ${isSearchActive ? "absolute left-0" : ""}`}
              aria-label="Toggle Search"
            >
              {!isSearchActive && (
                <Search
                  size={20}
                  onClick={() => setisSearchActive((prev) => !prev)}
                />
              )}
            </button>
            <input
              type="text"
              placeholder="Search...."
              aria-label="Search"
              className={`absolute left-10 bg-black bg-opacity-75 text-white rounded-md border border-transparent focus:outline-none transition-all duration-300 ${isSearchActive ? "w-60 p-2 border-white opacity-100" : "w-0 p-0 opacity-0"}`}
              onChange={() => {}}
              onKeyDown={() => {}}
            />
          </div>
          <Bell size={20} color="white" />
          <img
            src={profile}
            alt="Profile Pic"
            className="h-8 w-8 rounded cursor-pointer"
          />
          <ChevronRight size={20} color="white" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
