import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  text-2xl gap-4">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
