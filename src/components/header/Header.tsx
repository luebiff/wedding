import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import MobileNavbar from "../navbar/MobileNavbar";

const Header = () => {
  return (
    <div className="flex fixed top-0 right-0 left-0 z-500 justify-between items-center text-black bg-[var(--color-bg)] p-4 md:p-0">
      <Link to="/" className="font-CormorantSCBold text-4xl md:hidden">
        A&A
      </Link>
      <Navbar />
      <MobileNavbar />
    </div>
  );
};

export default Header;
