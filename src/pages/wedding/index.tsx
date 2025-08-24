import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScheduleFriday from "./ScheduleFriday";
import ScheduleSaturday from "./ScheduleSaturday";
import ScheduleSunday from "./ScheduleSunday";

const Wedding = () => {
  const [activeSection, setActiveSection] = useState("friday");
  return (
    <>
      <Header />
      <div className="mt-[64px] p-5 md:p-10 grid m-auto text-center w-full max-w-3xl">
        <div>
          <h2 className="header2">Viktiga tider & info för bröllopshelgen </h2>
          <div className="text-lg grid gap-3 ">
            <p>
              Vi är så peppade att få fira med er hela helgen – inte bara på
              lördagen! Därför har vi satt ihop ett schema som är bra att ha
              koll på. (…och ni som brukar vara sena – ni vet vilka ni är, se
              till att memorera dessa tider)
            </p>
            <p>
              När ni OSA:ar får ni svara på frågor kring vad ni vill vara med
              på, men här nedan ser ni hela helgen i stora drag:
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-5 p-5">
            <button
              className={`px-4 py-2 rounded ${
                activeSection === "friday"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveSection("friday")}
            >
              Fredag
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeSection === "saturday"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveSection("saturday")}
            >
              Lördag
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeSection === "sunday"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveSection("sunday")}
            >
              Söndag
            </button>
          </div>
          {activeSection === "friday" && <ScheduleFriday />}
          {activeSection === "saturday" && <ScheduleSaturday />}
          {activeSection === "sunday" && <ScheduleSunday />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wedding;
