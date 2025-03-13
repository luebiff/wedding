import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-black bg-emerald-200 p-4">
      <div>A&A</div>
      <Navbar />
    </div>
  );
};

export default Header;
