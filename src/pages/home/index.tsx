import { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hero from "./Hero";
import InfoCards from "./InfoCards";
import OurTimeline from "./OurTimeline";
import myVideo from "../../assets/video.mp4";
import muskö from "../../assets/muskö.jpg";
import ImgParallelEffect from "./ImgParallelEffect";

const Home = () => {
  useEffect(() => {
    document.title = "Hem | Anders Och Annas Bröllop";
  }, []);

  return (
    <>
      <Header />
      <Hero />

      <div>
        <video className="w-full" src={myVideo} autoPlay loop></video>
      </div>
      <div className="grid md:grid-cols-2 gap-2 mb-10 p-5 md:p-10">
        <div>
          <h2 className="header2 mb-3">Vi ska gifta oss!</h2>
          <div className="text-lg text-[var(--secondary-text-color)] grid gap-3">
            <p>
              Efter 14 år av kärlek, två barn, en och annan handbollsmatch (mest
              Anders) – och mååååånga års väntan från Annas sida – är det
              äntligen dags: VI SKA GIFTA OSS! Den 10 januari 2026 samlar vi
              våra favoritmänniskor på Balingsholm för en dag (och kväll!) fylld
              av kärlek, skratt, dans och kanske en tår eller två (mest från
              Anna). Vi hoppas att ni vill fira den här dagen med oss – det hade
              inte varit samma sak utan er! På den här sidan hittar ni allt ni
              behöver veta inför bröllopet.
            </p>
            <p>
              O.S.A. senast den 20 oktober. Tveka inte att kontakta oss om ni
              undrar över något.
            </p>
            <p>Nu kör vi!</p>
          </div>
        </div>
        <img
          className="w-full h-96 object-cover mt-10"
          src={muskö}
          alt="Anna och Anders Muskö"
        />
      </div>
      <InfoCards />
      <div className="wrapper">
        <ImgParallelEffect />

        <OurTimeline />
      </div>

      <Footer />
    </>
  );
};

export default Home;
