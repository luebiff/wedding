import breakfast from "../../assets/schedule/breakfast.png";
import checkInDesk from "../../assets/schedule/check-in-desk.png";
import restaurant from "../../assets/schedule/restaurant.png";
import church from "../../assets/schedule/church.png";
import decoration from "../../assets/schedule/decoration.png";
import romanticDinner from "../../assets/schedule/romantic-dinner.png";
import discoBall from "../../assets/schedule/disco-ball.png";

const ScheduleSaturday = () => {
  return (
    <div className="flex flex-col gap-5 mb-10 max-w-[400px] m-auto">
      <h3 className="header3">Lördag 10 januari (Bröllopsdagen!)</h3>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={breakfast}
          alt="breakfast"
        />
        <h4 className="header4">Frukost (för fredagsgäster)</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          08.30–10.00
        </span>
        <p></p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={checkInDesk}
          alt="check-in-desk"
        />
        <h4 className="header4">Incheckning för lördagsgäster</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          Från 11.00
        </span>
        <p>
          Innan vigseln om du vill hinna piffa dig på hotellet. Eller efter
          vigseln (OBS! Du riskerar då att missa delar av brudskålen och tårtan,
          så vi rekommenderar att checka in innan!)
        </p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={restaurant}
          alt="restaurant"
        />
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
          = Lunch? Kanske inte nödvändigt – men vissa (host Anders) kanske
          behöver det
        </p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img className="w-38 h-38 m-auto mb-3" src={church} alt="church" />
        <h4 className="header4">Vigsel</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          14.00
        </span>
        <p>
          Vigseln sker i Huddinge kyrka. Rekomenderas att åka ca 13.30.
          Transport fixar ni själva
        </p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img className="w-38 h-38 m-auto mb-3" src={decoration} alt="church" />
        <h4 className="header4">Brudskål, tårta & kaffe</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          ~ 15.30
        </span>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={romanticDinner}
          alt="romantic-dinner"
        />
        <h4 className="header4">Middag</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          ~ 17.00
        </span>
        <p>Anna gråter igen....</p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={discoBall}
          alt="disco ball"
        />
        <h4 className="header4">Dans & fest</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          ~ 17.00
        </span>
        <p>
          Efter middagen kör vi igång dansgolvet. Musik till 01.30.Glöm inte att
          önska låt när ni OSA – men välj med omsorg. Dålig musik = ingen plats
          på spellistan .
        </p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
    </div>
  );
};

export default ScheduleSaturday;
