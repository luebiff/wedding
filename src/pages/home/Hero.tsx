import React, { useRef } from "react";
import "./Hero.css"; // Assuming you have a CSS file for styles

const Hero = () => {
  const boundingRef = useRef<DOMRect | null>(null);
  const onMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const x = ev.clientX - boundingRef.current.left;
    const y = ev.clientY - boundingRef.current.top;
    const xPercentage = x / boundingRef.current.width;
    const yPercentage = y / boundingRef.current.height;
    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
    ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
  };

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="[perspective:800px]">
        <div
          className="welcomeCard flex md:flex-row flex-col md:w-[700px] w-[350px] md:h-[350px] h-[450px] p-10 rounded-md hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] font-OleoScript bg-[#faf8ef] text-black text-center transition-transform ease-out "
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            onMouseMove(ev);
          }}
        >
          <div className="flex flex-col justify-center text-2xl basis-1/3">
            <span className="">Lördag</span>
            <span className="">10 JANUARI</span>
            <span className="">2026</span>
          </div>
          <div className="flex flex-col justify-center basis-1/3">
            <span className="text-5xl md:text-7xl">Anna</span>
            <span className="text-6xl md:text-9xl">&</span>
            <span className="text-5xl md:text-7xl">Anders</span>
          </div>
          <div className="flex flex-col justify-center text-xl md:text-2xl basis-1/3">
            <span className="">Klockan 14:00</span>
            <span className="">Huddinge kyrka</span>
            <span className="">Mottagning Balingsholm</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
