import ourTimeline from "./timeLine.json";
const OurTimeline = () => {
  return (
    <div className="m-auto p-5 md:p-10 flex flex-col items-center max-w-[700px] text-center">
      <h2 className="header2 mb-3">{ourTimeline.title}</h2>
      <p className="mb-6 header4  text-gray-600">{ourTimeline.description}</p>
      {ourTimeline.events.map((event, index) => (
        <div key={index} className="mb-4 ">
          <h3 className="header3 mb-2">{event.year}</h3>
          <p className="text-lg">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurTimeline;
