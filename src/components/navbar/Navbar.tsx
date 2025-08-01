import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex text-xl gap-4">
        <Link to="/">Hem</Link>
        <Link to="/bröllopet">Bröllopet</Link>
        <Link to="/info">Info</Link>
        <Link to="/osa">O.S.A</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </>
  );
};

export default Navbar;
