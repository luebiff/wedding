const CallToAction = () => {
  return (
    <div className="flex gap-4 absolute md:bottom-1/5 bottom-3 left-1/2 transform -translate-x-1/2 rounded-2xl">
      <button className="p-5 text-sm md:text-lg text-white bg-gold hover:bg-gold/90 rounded-2xl">
        O.S.A
      </button>
      <button className="p-5 text-sm md:text-lg text-white bg-gold hover:bg-gold/90 rounded-2xl">
        Boka boende
      </button>
      <button className="p-5 text-sm md:text-lg text-white bg-gold hover:bg-gold/90 rounded-2xl">
        Anmäl tal & spex
      </button>
    </div>
  );
};

export default CallToAction;
