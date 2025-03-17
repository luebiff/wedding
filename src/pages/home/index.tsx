import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center bg-blend-overlay bg-gray-600 bg-[url(/src\assets\one_year.jpg)] bg-cover h-screen">
        <div className="text-white flex flex-col items-center">
          <div className="text-3xl">Välkommen på bröllop</div>
          <div className="text-8xl mb-2">Anna & Anders</div>
          <div className="text-3xl">10 JANUARI 2026</div>
        </div>
      </div>

      <div className="p-4 ">
        <h2>Vi ska gifta oss! </h2>
        <p>Äntligen bröllop!</p>
        <p>
          Det ska vi fira på Rånäs Slott! Du som fått vår inbjudan med länken
          till denna hemsida är en av de personer som, på ett eller annat vis,
          är de bästa i våra liv. Vi vill förstås att du ska komma till vårt
          bröllop och dela den dagen med oss!
        </p>
        <p>
          Vi har samlat all information här på hemsidan, på ett och samma ställe
          för att underlätta för oss alla. Här finner du information om vigsel,
          fest, boende och praktiska detaljer och lite annat som ni kan tänkas
          vilja veta.
        </p>
        <p>
          O.S.A. senast den 1 juli, speciellt viktigt för dig som vill bo på
          Rånäs Slott över natten. Tveka inte att kontakta oss om ni undrar över
          något.
        </p>
        <p>
          Vi ser fram emot att se er på vårt bröllop! Kram, Sandra och Jonathan
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
