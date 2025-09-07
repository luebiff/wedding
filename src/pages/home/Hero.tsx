import heroImage from "../../assets/parallel/IMG9.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero text-center">
      <img className="hero-image" src={heroImage}></img>

      <div className="hero-content flex flex-col gap-2">
        <div className="flex flex-col justify-center text-2xl gap-1">
          <span className="">Lördag</span>
          <span className="">10 JANUARI</span>
          <span className="">2026</span>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-5xl md:text-7xl">Anders</span>
          <span className="text-5xl md:text-7xl font-CormorantSC">&</span>
          <span className="text-5xl md:text-7xl">Anna</span>
        </div>

        <div className="flex flex-col justify-center text-xl md:text-2xl gap-1">
          <span className="">Klockan 14:00</span>
          <span className="">Huddinge kyrka</span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
