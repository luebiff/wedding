import { useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="md:hidden w-8">
      <div
        className="space-y-2 cursor-pointer"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span
          className={`block h-0.5 w-full bg-black transition-transform duration-300 ease-in-out
          ${isNavOpen ? "rotate-45 translate-y-[10px] delay-200" : ""}
        `}
        />

        <span
          className={`block h-0.5 w-full bg-black transition-all duration-500  ease-in-out
          ${
            isNavOpen
              ? "translate-y-[10px] opacity-0"
              : "-translate-x-[0px] opacity-100 delay-200"
          }
        `}
        />

        <span
          className={`block h-0.5 w-full bg-black transition-transform duration-300 ease-in-out
          ${isNavOpen ? "-rotate-45 -translate-y-[10px] delay-200" : ""}
        `}
        />
      </div>
      <ScrollToTop />

      <div
        className="md:hidden w-full absolute top-16 left-0 overflow-hidden transition-[height] duration-700  bg-[var(--color-bg)]/10 backdrop-blur-sm"
        style={isNavOpen ? { height: "100vh" } : { height: "0" }}
        onClick={() => setIsNavOpen(false)}
      >
        <div
          className="flex flex-col text-xl gap-4 bg-[var(--color-bg)] p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[var(--color-gold)]" : "text-[var(--text-color)]"
            }
          >
            Hem
          </NavLink>
          <NavLink
            to="/bröllopet"
            className={({ isActive }) =>
              isActive ? "text-[var(--color-gold)]" : "text-[var(--text-color)]"
            }
          >
            Bröllopet
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive ? "text-[var(--color-gold)]" : "text-[var(--text-color)]"
            }
          >
            Info
          </NavLink>
          <NavLink
            to="/osa"
            className={({ isActive }) =>
              isActive ? "text-[var(--color-gold)]" : "text-[var(--text-color)]"
            }
          >
            O.S.A
          </NavLink>
          <NavLink
            to="/brudfölje"
            className={({ isActive }) =>
              isActive ? "text-[var(--color-gold)]" : "text-[var(--text-color)]"
            }
          >
            Brudfölje
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
