import { ChangeEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import * as ResponseTypes from "./_responseTypes";
import { valitadeForm } from "./_responseFunctions";
import FormTextInput from "./FormTextInput";

const Response = () => {
  const [formErrors, setformErrors] = useState<ResponseTypes.FormError>({
    hasError: false,
    errors: {},
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitting form", response);

    const validationErrors = valitadeForm(response);
    setformErrors(validationErrors);

    if (!validationErrors.hasError) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, response, PUBLIC_KEY).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    }
  };

  const [response, setResponse] = useState<ResponseTypes.Response>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    attend: null,
    food: "",
    song: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResponse({ ...response, [e.target.id]: e.target.value });
  };

  const handleAttendChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "yes") {
      setResponse({ ...response, attend: true });

      return;
    }

    setResponse({ ...response, attend: false });
  };

  return (
    <>
      <Header />
      <div className="mt-[64px] h-screen flex gap-8 flex-col justify-center items-center">
        <p>
          OSA i formuläret nedan senast den 10/4. Om du har frågor hör gärna av
          dig till vårt värdpar.
        </p>

        <form className="w-md">
          <div className="grid gap-4 border-1 rounded-2xl grid-cols-[repeat(auto-fit, minmax(100px,_1fr))]  p-4 ">
            <div className="flex flex-col">
              <label htmlFor="attend">Jag kommer att delta</label>
              <div className="flex gap-3 items-center">
                <label htmlFor="yes">
                  Ja
                  <input
                    className="ml-2"
                    type="radio"
                    name="attend"
                    id="yes"
                    onChange={handleAttendChange}
                  />
                </label>

                <label htmlFor="no">
                  Nej
                  <input
                    className="ml-2"
                    type="radio"
                    name="attend"
                    id="no"
                    onChange={handleAttendChange}
                  />
                </label>
              </div>
              <p className="text-red-600">{formErrors?.errors.attend}</p>
            </div>

            <FormTextInput
              id="firstName"
              label="Förnamn"
              type="text"
              error={formErrors.errors.firstName}
              handleChange={handleChange}
            />
            <FormTextInput
              id="lastName"
              label="Efternamn"
              type="text"
              error={formErrors.errors.lastName}
              handleChange={handleChange}
            />

            <FormTextInput
              id="email"
              label="E-post"
              type="email"
              error={formErrors.errors.email}
              handleChange={handleChange}
            />

            <FormTextInput
              id="phone"
              label="Telefonnummer"
              type="phone"
              error={formErrors.errors.phone}
              handleChange={handleChange}
            />

            <FormTextInput
              id="food"
              label="Matpreferenser"
              type="text"
              error={formErrors.errors.food}
              handleChange={handleChange}
            />

            <FormTextInput
              id="song"
              label="Låtönskemål"
              type="text"
              error={formErrors.errors.song}
              handleChange={handleChange}
            />

            <button className="rounded bg-gold p-4 mt-4" onClick={onSubmit}>
              Skicka
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Response;
