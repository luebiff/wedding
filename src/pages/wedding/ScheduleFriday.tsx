import checkInDesk from "../../assets/schedule/check-in-desk.png";
import restaurant from "../../assets/schedule/restaurant.png";
import drink from "../../assets/schedule/drink.png";

const ScheduleFriday = () => {
  return (
    <div className="flex flex-col gap-5 mb-10 max-w-[400px] m-auto">
      <h3 className="header3">Fredag</h3>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={checkInDesk}
          alt="check-in-desk"
        />
        <h4 className="header4">Incheckning</h4>
        <span className="header4 text-[var(--secondary-text-color)] mb-5">
          Från 14.00
        </span>
        <div className="bg-[var(--button-bg)] w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={restaurant}
          alt="restaurant"
        />
        <h4 className="header4">Middag</h4>
        <span className="header4 text-[var(--secondary-text-color)] mb-5">
          18.00
        </span>
        <div className="bg-[var(--button-bg)] w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img className="w-38 h-38 m-auto mb-3" src={drink} alt="drink" />
        <h4 className="header4">Eftermiddag/kväll</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          ~ 20.00
        </span>
        <p>
          Häng, skratt <span className="font-CormorantSC text-xl">&</span> små
          överraskningar – fram tills...? 
        </p>
      </div>
    </div>
  );
};

export default ScheduleFriday;
