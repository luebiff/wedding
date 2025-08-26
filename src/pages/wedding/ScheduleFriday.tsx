const ScheduleFriday = () => {
  return (
    <div className="flex flex-col gap-5 mb-10 max-w-[400px] m-auto">
      <h3 className="header3">Fredag</h3>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src="/src\assets/schedule/check-in-desk.png"
          alt="check-in-desk"
        />
        <h4 className="header4">Incheckning</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          Från 14.00
        </span>
        <p></p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src="/src\assets/schedule/restaurant.png"
          alt="restaurant"
        />
        <h4 className="header4">Middag</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          {" "}
          18.00
        </span>
        <p></p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src="/src\assets/schedule/drink.png"
          alt="drink"
        />
        <h4 className="header4">Eftermiddag/kväll</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          ~ 20.00
        </span>
        <p>Häng, skratt & små överraskningar – fram tills...? </p>
        <div className="bg-gray-200 w-16 h-1 m-auto"></div>
      </div>
    </div>
  );
};

export default ScheduleFriday;
