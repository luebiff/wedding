import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "./Hero";
import InfoCards from "./InfoCards";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <div className="grid grid-cols-2 gap-2 mb-10 p-10">
        <div>
          <h2 className="text-3xl font-OleoScript mb-3">Vi ska gifta oss! </h2>
          <div className="text-lg text-gray-700">
            <p>
              Det ska vi fira på Rånäs Slott! Du som fått vår inbjudan med
              länken till denna hemsida är en av de personer som, på ett eller
              annat vis, är de bästa i våra liv. Vi vill förstås att du ska
              komma till vårt bröllop och dela den dagen med oss!
            </p>
            <p>
              Vi har samlat all information här på hemsidan, på ett och samma
              ställe för att underlätta för oss alla. Här finner du information
              om vigsel, fest, boende och praktiska detaljer och lite annat som
              ni kan tänkas vilja veta.
            </p>
            <p>
              O.S.A. senast den 1 juli, speciellt viktigt för dig som vill bo på
              Rånäs Slott över natten. Tveka inte att kontakta oss om ni undrar
              över något.
            </p>
            <p>
              Vi ser fram emot att se er på vårt bröllop! Kram, Sandra och
              Jonathan
            </p>
          </div>
        </div>
        <img
          className="w-full h-96 object-cover mt-10"
          src="/src\assets\muskö.jpg"
          alt="Anna och Anders Muskö"
        />
      </div>
      <InfoCards />

      <Footer />
    </>
  );
};

export default Home;
