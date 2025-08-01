import React from "react";

type Contact = {
  image: string;
  displayName: string;
  role: string;
  bio: string;
};

type ContactCardsProps = {
  contacts: Contact[];
};

const ContactCard = ({ contacts }: ContactCardsProps) => {
  return (
    <>
      {contacts?.map((contact: any, index: number) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-5 md:gap-10 mb-30 "
        >
          <div className="relative flex h-70 min-w-70 max-w-70 border-2 border-gray-200 rounded-xl ">
            <img
              className="autoShow absolute bottom-0 h-90 w-80"
              src={contact.image}
              alt={contact.displayName}
            />
          </div>
          <div className="items-start max-w-[600px]">
            <h3 className="font-OleoScript text-4xl">{contact.role}</h3>
            <p className="mb-3 font-OleoScriptRegular text-2xl text-gray-600">
              {contact.displayName}
            </p>
            <p>{contact.bio}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
