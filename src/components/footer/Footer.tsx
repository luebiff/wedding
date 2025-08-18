import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Navbar = () => {
  const countdown = (): TimeLeft => {
    const countDownDate = new Date("Jan 10, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timeLeft = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(countdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(() => countdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-14 gap-4 border-t-1 border-gray-200">
      <div className="md:text-5xl text-4xl">Bröllopsdag om</div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <span className="md:text-5xl text-4xl">{timeLeft.days}</span>
          <p className="text-1xl">Dagar</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-5xl text-4xl">{timeLeft.hours}</span>
          <p className="text-1xl">Timmar</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-5xl text-4xl">{timeLeft.minutes}</span>
          <p className="text-1xl">Minuter</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-5xl text-4xl">{timeLeft.seconds}</span>
          <p className="text-1xl">Sekunder</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
