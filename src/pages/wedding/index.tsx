import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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
          {activeSection === "friday" && (
            <div className="flex flex-col gap-5 mb-10 max-w-[400px] m-auto">
              <h3 className="header3">Fredag</h3>
              <div>
                <h4 className="header4">Incheckning</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  Från 14.00
                </span>
                <p></p>
              </div>
              <div>
                <h4 className="header4">Middag</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  {" "}
                  18.00
                </span>
                <p></p>
              </div>
              <div>
                <h4 className="header4">Eftermiddag/kväll</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  ~ 20.00
                </span>
                <p>Häng, skratt & små överraskningar – fram tills...? </p>
              </div>
            </div>
          )}
          {activeSection === "saturday" && (
            <div className="flex flex-col gap-5 mb-10 max-w-[400px] m-auto">
              <h3 className="header3">Lördag 10 januari (Bröllopsdagen!)</h3>
              <div>
                <img src="/src\assets\breakfast.png" alt="breakfast" />
                <h4 className="header4">Frukost (för fredagsgäster)</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  08.30–10.00
                </span>
                <p></p>
              </div>
              <div>
                <h4 className="header4">Incheckning för lördagsgäster</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  Från 11.00
                </span>
                <p>
                  Innan vigseln om du vill hinna piffa dig på hotellet. Eller
                  efter vigseln (OBS! Du riskerar då att missa delar av
                  brudskålen och tårtan, så vi rekommenderar att checka in
                  innan!)
                </p>
              </div>
              <div>
                <h4 className="header4">Lunch (valfri, egen kostnad)</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  Serveras 12.00
                </span>
                <p>Kan beställas från Balingsholm via OSA-formuläret </p>

                <div className="">
                  <h5 className="header5">Värt att tänka på:</h5>
                  <ul className="list-disc  text-left">
                    <li>Frukost till 10</li>
                    <li>Fix, piff och pepp</li>
                    <li>Vigsel 14.00</li>
                    <li>Bubbel, kaffe & tårta ca 15.30</li>
                    <li>Middag ca 17.00</li>
                  </ul>
                </div>

                <p>
                  = Lunch? Kanske inte nödvändigt – men vissa (host Anders)
                  kanske behöver det
                </p>
              </div>
              <div>
                <img src="/src\assets\church.png" alt="church" />
                <h4 className="header4">Vigsel</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  14.00
                </span>
                <p>
                  Vigseln sker i Huddinge kyrka. Rekomenderas att åka ca 13.30.
                  transport fixar ni själva
                </p>
              </div>
              <div>
                <h4 className="header4">Brudskål, tårta & kaffe</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  ~ 15.30
                </span>
              </div>
              <div>
                <h4 className="header4">Middag</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  ~ 17.00
                </span>
                <p>Anna gråter igen....</p>
              </div>
              <div>
                <img src="/src\assets\dance.png" alt="dance" />
                <h4 className="header4">Dans & fest</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  ~ 17.00
                </span>
                <p>
                  Efter middagen kör vi igång dansgolvet. Musik till 01.30.Glöm
                  inte att önska låt när ni OSA – men välj med omsorg. Dålig
                  musik = ingen plats på spellistan .
                </p>
              </div>
            </div>
          )}
          {activeSection === "sunday" && (
            <div className="flex flex-col gap-5 max-w-[400px] m-auto">
              <h3 className="header3">Söndag – 11 januari</h3>
              <div>
                <img src="/src\assets\breakfast.png" alt="breakfast" />
                <h4 className="header4">Frukost</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  09.00–11.30
                </span>
                <p></p>
              </div>
              <div>
                <h4 className="header4">Utcheckning</h4>
                <span className="header4 text-[var(--secondary-text-color)]">
                  senast 12.00
                </span>
                <p>
                  Vill man hänga kvar efter frukost kan man sitta kvar till
                  11.59 – sedan är det hejdå
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wedding;
