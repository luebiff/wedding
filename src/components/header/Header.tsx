import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="flex fixed top-0 right-0 left-0 z-100 justify-between items-center text-black bg-white p-4">
      <div>A&A</div>
      <Navbar />
    </div>
  );
};

export default Header;
