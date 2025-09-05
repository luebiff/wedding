/* import { useEffect, useState, useRef } from "react"; */
import { NavLink } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

type NavbarProps = {
  scrolled: boolean;
};

const Navbar = ({ scrolled }: NavbarProps) => {
  return (
    <>
      <ScrollToTop />
      <div
        className={`hidden md:flex gap-1 text-xl absolute left-[50%] translate-x-[-50%] p-2 mt-22 rounded-2xl  ${
          scrolled
            ? "bg-[var(--surface-color)]/80 backdrop-blur-sm shadow-lg"
            : "bg-[var(--button-bg)] shadow-lg"
        }`}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `p-3 transition-colors border-b-6 border-[transparent] duration-500 text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)] hover:text-[var(--text-color-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)] hover:text-[var(--text-color-hover)]"
            }`
          }
        >
          Hem
        </NavLink>
        <NavLink
          to="/bröllopet"
          className={({ isActive }) =>
            `p-3 transition-colors border-b-6 border-[transparent] duration-500 text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)] hover:text-[var(--text-color-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)] hover:text-[var(--text-color-hover)]"
            }`
          }
        >
          Bröllopet
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive }) =>
            `p-3 transition-colors border-b-6 border-[transparent] duration-500 text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)] hover:text-[var(--text-color-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)] hover:text-[var(--text-color-hover)]"
            }`
          }
        >
          Info
        </NavLink>
        <NavLink
          to="/osa"
          className={({ isActive }) =>
            `p-3 transition-colors border-b-6 border-[transparent] duration-500 text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)] hover:text-[var(--text-color-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)] hover:text-[var(--text-color-hover)]"
            }`
          }
        >
          O.S.A
        </NavLink>
        <NavLink
          to="/brudfölje"
          className={({ isActive }) =>
            `p-3 transition-colors border-b-6 border-[transparent] duration-500 text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)] hover:text-[var(--text-color-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)] hover:text-[var(--text-color-hover)]"
            }`
          }
        >
          Brudfölje
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
