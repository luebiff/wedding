import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

const Navbar = () => {
  return (
    <>
      <ScrollToTop />
      <div className="hidden lg:flex text-xl gap-4">
        <Link to="/">Hem</Link>
        <Link to="/bröllopet">Bröllopet</Link>
        <Link to="/info">Info</Link>
        <Link to="/osa">O.S.A</Link>
        <Link to="/brudfölje">Brudfölje</Link>
      </div>
    </>
  );
};

export default Navbar;
