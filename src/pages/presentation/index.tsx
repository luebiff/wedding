import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import contacts from "./contactInfo.json";
import ContactCard from "./ContactCard";

const Presentation = () => {
  return (
    <>
      <Header />
      <section className="mt-[64px] p-10">
        <h2 className="text-center font-OleoScript text-6xl mb-20">
          Presentation
        </h2>
        <h2 className="text-center font-OleoScript text-5xl mb-20">Regi</h2>
        <p className="text-center text-2xl mb-20">Anna Broomé</p>
        <h2 className="text-center font-OleoScript text-5xl mb-30 md:mb-20">
          Huvudroller
        </h2>
        <ContactCard contacts={contacts.huvudroller} />

        <h2 className="test text-center font-OleoScript text-5xl mb-30 md:mb-20">
          BiRoller
        </h2>
        <ContactCard contacts={contacts.biroller} />

        <h2 className="text-center font-OleoScript text-4xl mb-30 md:mb-20">
          Statister
        </h2>
        <ContactCard contacts={contacts.statist} />
      </section>
      <Footer />
    </>
  );
};

export default Presentation;
