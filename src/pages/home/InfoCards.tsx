// InfoCards.tsx
import React from "react";

const InfoCards = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 p-10">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-3">
          <img
            className="w-9 h-9 mr-3"
            src="/src\assets\icons/ring.svg"
            alt=""
          />
          <h2 className="text-3xl font-OleoScript">Vigsel</h2>
        </div>
        <p className="mb-1">Datum: 10 januari 2026</p>
        <p className="mb-1">Tid: 14:00</p>
        <p className="mb-1">Plats: Huddinge kyrka</p>
      </div>

      <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-3">
          <img
            className="w-9 h-9 mr-3"
            src="/src\assets\icons/dress.svg"
            alt=""
          />
          <h2 className="text-3xl font-OleoScript">Klädkod mörk kavaj</h2>
        </div>
        <p className="mb-3">
          Det blir ju fest, så ta det finaste du har! Tänk även på att du ska
          kunna röra dig på dansgolvet.
        </p>
      </div>

      <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-3">
          <img
            className="w-9 h-9 mr-3"
            src="/src\assets\icons/bed.svg"
            alt=""
          />
          <h2 className="text-3xl font-OleoScript">Boende på Balingsholm</h2>
        </div>
        <p className="mb-3">
          Herrgården uppfördes år 1906 av byggmästare Tisell och förvärvades
          sedan av hovförvaltningen som bostad för Gustaf V:s yngste son, prins
          Erik, som bodde här fram till 1916. Den nuvarande verksamheten
          startades upp 4 mars 1985.
        </p>
      </div>

      <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-3">
          <img
            className="w-9 h-9 mr-3"
            src="/src\assets\icons/car.svg"
            alt=""
          />
          <h2 className="text-3xl font-OleoScript">Transport</h2>
        </div>
        <p className="mb-3">
          Det är lätt att ta sig hit med bil och parkering finns i anslutning
          till Balingsholm Herrgård. Vi hoppas att så många som möjligt vill
          stanna kvar över natten.
        </p>
      </div>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-3">
          <img
            className="w-9 h-9 mr-3"
            src="/src\assets\icons/camera.svg"
            alt=""
          />
          <h2 className="text-3xl font-OleoScript">Fotografering</h2>
        </div>
        <p className="mb-3">
          Vi kommer att ha en proffessionell fotograf och filmare under vigseln
          och festen. Vi räknar med att fånga alla våra gäster på bild helst
          från er bästa sida.
        </p>
        <p className="mb-3">
          Vi vill gärna att ni också fotograferar. Ni fångar säkert sådant som
          vår fotograf och filmare inte gör men var gärna lite diskreta och
          försök att inte stå ivägen för dem.
        </p>
      </div>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-3">
          <img
            className="w-9 h-9 mr-3"
            src="/src\assets\icons/kids.svg"
            alt=""
          />
          <h2 className="text-3xl font-OleoScript">Barn</h2>
        </div>
        <p className="mb-3">
          Vi älskar era ungar men denna helg passar det bättre att de är hemma
          med sin barnvakt. Barn under ett år som ammas är förstås välkomna.
        </p>
      </div>
    </section>
  );
};

export default InfoCards;
