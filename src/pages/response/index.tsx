import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import YouFormEmbed from "./YouFormEmbed";

const Response = () => {
  return (
    <>
      <Header />

      <div className="mt-[64px] ">
        <YouFormEmbed formId="woutotik" width="100%" height="700vh" />
      </div>

      <Footer />
    </>
  );
};

export default Response;
