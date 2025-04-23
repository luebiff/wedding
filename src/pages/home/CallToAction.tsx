import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faBed,
  faMasksTheater,
} from "@fortawesome/free-solid-svg-icons";

const CallToAction = () => {
  return (
    <div className="flex gap-9 p-5 w-8/10 mt-[-150px] m-auto rounded-2xl mb-10">
      <div className="flex flex-col items-center p-5 bg-[#c29b6b] hover:shadow-xl shadow-amber-500/0 h-70 w-1/3 rounded-2xl">
        <div className="flex items-center mb-3">
          <FontAwesomeIcon
            className="mr-3"
            icon={faHandshake}
            style={{ color: "#fff" }}
            size="3x"
          />
          <h2 className="text-2xl font-bold font-OleoScript  text-white">
            OSA
          </h2>
        </div>
        <p className="text-white">
          Vi ser verkligen fram emot att fira de här dagarna med er. O.S.A.
          senast den 1 juli
        </p>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Learn more →
        </a>
      </div>
      <div className="flex flex-col items-center p-5 bg-[#c29b6b] hover:bg-[#aa885e] h-70 w-1/3 rounded-2xl">
        <div className="flex items-center mb-3">
          <FontAwesomeIcon
            className="mr-3"
            icon={faBed}
            style={{ color: "#fff" }}
            size="3x"
          />
          <h2 className="text-2xl font-bold font-OleoScript text-white">
            Sova
          </h2>
        </div>
        <p className="text-white">
          Då vi inte hinner träffa er så ofta vill vi gärna att ni är sover kvar
          på slottet och träffar oss på Farwell Brunch.
        </p>
      </div>
      <div className="flex flex-col items-center p-5 bg-[#c29b6b] hover:bg-[#aa885e] h-70 w-1/3 rounded-2xl">
        <div className="flex items-center mb-3">
          <FontAwesomeIcon
            className="mr-3"
            icon={faMasksTheater}
            style={{ color: "#fff" }}
            size="3x"
          />
          <h2 className="text-2xl font-bold font-OleoScript text-white">
            Tal & Spex
          </h2>
        </div>
        <p className="text-white">
          Vår högsta önskan är att få skapa en oförglömlig dag, kväll och natt
          tillsammans med er! Vill ni bjuda på tal, spex eller annat kul, så ska
          det anmälas till vår Toastmadame och Toastmaster i god tid, så de kan
          planera kvällens program.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
