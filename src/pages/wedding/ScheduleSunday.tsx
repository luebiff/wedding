import breakfast from "/src/assets/schedule/breakfast.png";
import hello from "/src/assets/schedule/hello.png";

const ScheduleSunday = () => {
  return (
    <div className="flex flex-col gap-5 max-w-[400px] m-auto">
      <h3 className="header3">Söndag – 11 januari</h3>
      <div className="p-5 flex flex-col gap-3">
        <img
          className="w-38 h-38 m-auto mb-3"
          src={breakfast}
          alt="breakfast"
        />
        <h4 className="header4">Frukost</h4>
        <span className="header4 text-[var(--secondary-text-color)] mb-5">
          09.00–11.30
        </span>
        <div className="bg-[var(--button-bg)] w-16 h-1 m-auto"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <img className="w-28 h-28 m-auto mb-3" src={hello} alt="Goodbye" />
        <h4 className="header4">Utcheckning</h4>
        <span className="header4 text-[var(--secondary-text-color)]">
          senast 12.00
        </span>
        <p>
          Vill man hänga kvar efter frukost kan man sitta kvar till 11.59 –
          sedan är det hejdå
        </p>
      </div>
    </div>
  );
};

export default ScheduleSunday;
