import React from "react";
import { Link } from "react-router-dom";

type MobileNavbarProps = {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNavbar = ({ setIsNavOpen }: MobileNavbarProps) => {
  return (
    <section className="lg:hidden w-8">
      <div
        className="space-y-2 cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-8 bg-gray-900"></span>
        <span className="block h-0.5 w-8 bg-gray-900"></span>
        <span className="block h-0.5 w-8 bg-gray-900"></span>
      </div>

      <div className="absolute left-0 flex flex-col gap-4 text-xl pt-6 pl-4">
        <Link to="/">Hem</Link>
        <Link to="/bröllopet">Bröllopet</Link>
        <Link to="/info">Info</Link>
        <Link to="/osa">O.S.A</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </section>
  );
};

export default MobileNavbar;
