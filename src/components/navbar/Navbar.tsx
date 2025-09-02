import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      const onScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }

    const onScroll = () => {
      setScrolled(wrapper.scrollTop > 50);
      console.log("scrolling inside wrapper");
    };

    wrapper.addEventListener("scroll", onScroll);
    return () => wrapper.removeEventListener("scroll", onScroll);
  }, []);

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
                ? "border-b-6 hover:border-[var(--button-bg-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)]"
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
                ? "border-b-6 hover:border-[var(--button-bg-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)]"
            }`
          }
        >
          Bröllopet
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive }) =>
            `p-3 transition-colors border-transparent duration-500 bg-[transparent] text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)]"
            }`
          }
        >
          Info
        </NavLink>
        <NavLink
          to="/osa"
          className={({ isActive }) =>
            `p-3 transition-colors border-transparent duration-500 bg-[transparent] text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)]"
            }`
          }
        >
          O.S.A
        </NavLink>
        <NavLink
          to="/brudfölje"
          className={({ isActive }) =>
            `p-3 transition-colors border-transparent duration-500 bg-[transparent] text-[var(--text-color)] ${
              isActive
                ? scrolled
                  ? "border-b-6 border-[var(--button-bg)]"
                  : "border-b-6 border-[var(--color-bg)]"
                : scrolled
                ? "border-b-6 hover:border-[var(--button-bg-hover)]"
                : "border-b-6 hover:border-[var(--color-bg-hover)]"
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
