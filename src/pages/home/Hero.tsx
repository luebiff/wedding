import React from "react";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className="flex flex-col relative bg-[url(/src\assets\image2.jpeg)] bg-center bg-cover h-screen ">
      <div className="font-OleoScript text-white flex flex-col  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-2xl md:text-3xl">Välkommen på bröllop</div>
        <h1 className="text-8xl">Anna & Anders</h1>
        <div className="text-2xl md:text-3xl">10 JANUARI 2026</div>
      </div>

      <CallToAction />
    </section>
  );
};

export default Hero;
