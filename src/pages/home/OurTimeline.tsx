import ourTimeline from "./timeLine.json";
const OurTimeline = () => {
  return (
    <div className="m-auto p-10 flex flex-col items-center max-w-[700px]">
      <h2 className="text-4xl font-OleoScript">{ourTimeline.title}</h2>
      <p className="mb-6 font-OleoScriptRegular text-2xl text-gray-600">
        {ourTimeline.description}
      </p>
      {ourTimeline.events.map((event, index) => (
        <div key={index} className="mb-4 text-center">
          <h3 className="text-xl font-bold">{event.year}</h3>
          <p className="text-lg">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurTimeline;
