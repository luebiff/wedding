import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import YouFormEmbed from "./YouFormEmbed";

const Response = () => {
  return (
    <>
      <Header />

      <YouFormEmbed formId="woutotik" width="100%" height="700vh" />

      <Footer />
    </>
  );
};

export default Response;
