import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Info = () => {
  return (
    <>
      <Header />
      <div className="mt-[64px] p-5 md:p-10 grid m-auto text-center w-full max-w-3xl">
        <div className="mb-6">
          <h2 className="header2">Övrig Information</h2>
          <p className="font-Biryani">
            Vi skulle bli superglada om ni ville komma redan på fredagen och
            börja festen lite i förväg! Restaurangen är öppen både fredag kväll
            och lördag lunch för den som vill äta på plats. Om ni hellre önskar
            annan mat finns det flera andra restauranger bara 5–10 minuter bort
            med bil. Vigseln börjar kl. 14.00, så en lunch innan kan vara en
            smart idé (viktigt att tänka på blodsockret). Vi avslutar helgen med
            en mysig frukost tillsammans på söndagen, för att ladda om
            batterierna efter all dans och fest. Och bara så det är sagt: vi
            står förstås för själva bröllopet och middagen på kvällen, men
            resten – som rum och extra måltider – är för egen plånbok. Så, packa
            era bästa partyoutfits och ert glada humör!
          </p>
        </div>
        <div className="mb-6">
          <h2 className="header2">Boende</h2>
          <p className="font-Biryani">
            För den som vill slå klackarna i taket hela helgen finns det
            möjlighet att övernatta på Balingsholm. Priser och info om rum,
            frukost, lunch med mera hittar ni här:
            <a href="https://www.balingsholm.se/hotell/">
              (lägg in länk Anders)
            </a>
            .
          </p>
        </div>
        <div className="mb-6">
          <h2 className="header2">Tal & spex</h2>
          <p className="font-Biryani">
            Om någon av våra gäster är sugna på att hålla något tal, spexa,
            sjunga eller annat så är det mycket välkommet och uppskattat. Våra
            fantastiska toastmasters tar gärna emot era mail på adressen:
            andersochanna.toast@gmail.com
          </p>
        </div>
        <div className="mb-6">
          <h2 className="header2">Klädsel mörk kavaj</h2>
          <p className="font-Biryani">
            Vi önskar att våra gäster klär sig i mörka färger på lördag – tänk
            elegans med en touch av mystik! För att hjälpa er på traven har vi
            slängt in några bilder på den stil vi drömmer om. Så inga
            flamingofärger eller discokulor, tack!
          </p>
          <div>bilder</div>
        </div>
        <div className="mb-6">
          <h2 className="header2">Transport</h2>
          <p className="font-Biryani">
            Det är lätt att ta sig hit med bil och parkering finns i anslutning
            till Balingsholm Herrgård. Vi hoppas att så många som möjligt vill
            stanna kvar över natten.
          </p>
          <p className="font-Biryani">
            Lokaltrafik Kommunalt från Stockholm (restid ca 35 min) Pendeltåg 36
            från Stockholms central mot Södertälje centrum. Kliv av vid
            Huddinge. Buss 744 från Huddinge centrum mot Balingsnäs. Kliv av vid
            Balingsnäs Gå cirka 1700 meter till Balingsnäsvägen 27, Huddinge.
          </p>
          <p className="font-Biryani">
            Mellan balingsholm och Huddinge kyrka är det ca 10 minuters bilfärd.
            Vi där vi tar er själva på det sätt ni själva önskar. Vi har alltså
            ingen buss eller liknande som kommer transportera er.
          </p>
          <div>
            <p>Hitta hit</p>
            <p className="font-Biryani">Balingsnäsvägen 27, 141 91 Huddinge</p>
          </div>
          <div>karta med pin??</div>
        </div>
        <div className="mb-6">
          <h2 className="header2">Barn</h2>
          <p className="font-Biryani">
            Vi älskar era ungar men denna helg passar det bättre att de är hemma
            med sin barnvakt. Barn under ett år som ammas är förstås välkomna.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="header2">Fotografering</h2>
          <p className="font-Biryani">
            Vi kommer att ha en proffessionell fotograf och filmare under
            vigseln och festen. Vi räknar med att fånga alla våra gäster på bild
            helst från er bästa sida.
          </p>
          <p className="font-Biryani">
            Vi vill gärna att ni också fotograferar. Ni fångar säkert sådant som
            vår fotograf och filmare inte gör men var gärna lite diskreta och
            försök att inte stå ivägen för dem.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Info;
