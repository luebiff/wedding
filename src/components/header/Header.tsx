import { useState } from "react";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../navbar/MobileNavbar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className="transition-[height] duration-700 flex fixed top-0 right-0 left-0 z-500 justify-between text-black bg-white p-4 overflow-hidden"
      style={isNavOpen ? { height: "100vh" } : { height: "64px" }}
    >
      <div className="font-CormorantSCBold text-4xl leading-[32px] ">A&A</div>
      <Navbar />
      <MobileNavbar setIsNavOpen={setIsNavOpen} />
    </div>
  );
};

export default Header;
