import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import contacts from "./contactInfo.json";
import ContactCard from "./ContactCard";

const Presentation = () => {
  return (
    <>
      <Header />
      <section className="mt-[64px] p-5 md:p-10">
        <h2 className="header2 text-center mb-30">Brudfölje</h2>

        <ContactCard contacts={contacts.persons} />
      </section>
      <Footer />
    </>
  );
};

export default Presentation;
