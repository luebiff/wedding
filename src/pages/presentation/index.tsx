import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import contacts from "./contactInfo.json";
import putteImg from "../../assets/contacts/putte2.png";
import emmaImg from "../../assets/contacts/emma.png";
import rickardImg from "../../assets/contacts/rickard.png";
import elinImg from "../../assets/contacts/elin.png";
import muImg from "../../assets/contacts/mu.png";
import itImg from "../../assets/contacts/it.png";
import gunnImg from "../../assets/contacts/gunn.png";
import farmorImg from "../../assets/contacts/farmor.png";
import elImg from "../../assets/contacts/el.png";
import pjImg from "../../assets/contacts/pj.png";

const Presentation = () => {
  return (
    <>
      <Header />
      <section className="mt-[64px] p-5 md:p-10">
        <h2 className="header1 text-center mb-30">Brudfölje</h2>

        {/* <ContactCard contacts={contacts.persons} /> */}
        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={putteImg}
              alt={contacts.persons[0].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[0].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[0].displayName}
            </p>
            <p>{contacts.persons[0].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={emmaImg}
              alt={contacts.persons[1].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[1].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[1].displayName}
            </p>
            <p>{contacts.persons[1].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={rickardImg}
              alt={contacts.persons[2].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[2].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[2].displayName}
            </p>
            <p>{contacts.persons[2].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={elinImg}
              alt={contacts.persons[3].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[3].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[3].displayName}
            </p>
            <p>{contacts.persons[3].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={muImg}
              alt={contacts.persons[4].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[4].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[4].displayName}
            </p>
            <p>{contacts.persons[4].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={itImg}
              alt={contacts.persons[5].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[5].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[5].displayName}
            </p>
            <p>{contacts.persons[5].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={gunnImg}
              alt={contacts.persons[6].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[6].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[6].displayName}
            </p>
            <p>{contacts.persons[6].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={farmorImg}
              alt={contacts.persons[7].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[7].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[7].displayName}
            </p>
            <p>{contacts.persons[7].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={elImg}
              alt={contacts.persons[8].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[8].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[8].displayName}
            </p>
            <p>{contacts.persons[8].bio}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  md:gap-10 mb-30 md:text-left text-center items-center md:items-start">
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-100 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={pjImg}
              alt={contacts.persons[9].displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h2 className="header2">{contacts.persons[9].role}</h2>
            <p className="mb-3 header3 text-[var(--secondary-text-color)]">
              {contacts.persons[9].displayName}
            </p>
            <p>{contacts.persons[9].bio}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Presentation;
