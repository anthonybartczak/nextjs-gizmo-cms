import Head from "next/head";
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SuccessModal } from "../../components/SuccessModal";
import { Drawer } from "../../components/Drawer";
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";

const isBrowser = typeof window !== "undefined";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      firstName,
      lastName,
      emailAddress,
      messageContent,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        const input = document.querySelector("#my-modal-4") as HTMLInputElement;
        input.checked = true;

        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setMessageContent("");
      }
    });
  };

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-modal-4" className="modal-button" />
        <div className="flex flex-col drawer-content">
          <Navbar />
          <form
            id="contact-form"
            className="mx-4 mt-4 mb-4 bg-gray-50 px-8 pt-8 pb-1 shadow-xl md:col-span-8 xl:mx-80"
          >
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 md:mb-0 md:w-1/2">
                <label
                  className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-first-name"
                >
                  Imię
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="mr-3 w-full
                        appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200
                        focus:outline-none"
                  type="text"
                  placeholder="John"
                  aria-label="Full name"
                />
                <p className="mb-5 text-xs italic text-red-500"></p>
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-last-name"
                >
                  Nazwisko
                </label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className="mr-3 w-full
                        appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200
                        focus:outline-none"
                  type="text"
                  placeholder="Doe"
                  aria-label="Full name"
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="my-5 mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-email-address"
                >
                  Adres email
                </label>
                <input
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                  className="mr-3
                        w-full appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700
                        focus:bg-gray-200 focus:outline-none"
                  type="email"
                  placeholder="example@exp.com"
                  aria-label="Full name"
                />
              </div>
            </div>
            <div className="-mx-3 mb-1 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="my-5 mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-message-content"
                >
                  Wiadomość
                </label>
                <textarea
                  onChange={(e) => {
                    setMessageContent(e.target.value);
                  }}
                  rows={6}
                  className="mr-3 w-full appearance-none border-b border-gray-800 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200 focus:outline-none"
                  placeholder="Twoja wiadomość."
                  aria-label="Full name"
                ></textarea>
              </div>
              <div className="flex w-full justify-between px-3">
                <div className="md:flex md:items-center"></div>
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="focus:shadow-outline my-2 bg-gray-800
                            py-2 px-6 font-bold text-white shadow hover:bg-gray-600 focus:outline-none"
                  type="submit"
                >
                  Wyślij
                </button>
              </div>
            </div>
          </form>
          <div className="flex mb-12 md:gap-4 xl:mx-80 mx-4 basis-0 flex-wrap md:flex-nowrap">
            <div className="mb-4 bg-gray-50 px-8 py-8 shadow-xl flex grow md:w-1/2">
              <div className="flex flex-col text-gray-800 gap-2">
                <div className="flex">
                  <MdPerson className="mt-1 mr-1" />
                  <span>Szymon Wiśniewski</span>
                </div>
                <div className="flex">
                  <MdEmail className="mt-1 mr-1" />
                  <span>gizmo@gizmo.com.pl</span>
                </div>
                <div className="flex">
                  <MdLocalPhone className="mt-1 mr-1" />
                  <span>+48 664 720 021</span>
                </div>
              </div>
            </div>
            <div className="mb-4 bg-gray-50 px-8 py-8 shadow-xl flex grow md:w-1/2">
              <div className="flex flex-col text-gray-800 gap-2">
                <div className="flex">
                  <MdPerson className="mt-1 mr-1" />
                  <span>Julia Podlewska</span>
                </div>
                <div className="flex">
                  <MdEmail className="mt-1 mr-1" />
                  <span>j.podlewska@gizmo.com.pl</span>
                </div>
                <div className="flex">
                  <MdLocalPhone className="mt-1 mr-1" />
                  <span>+48 608 425 380</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Drawer />
        <SuccessModal />
      </div>
    </>
  );
}

export default Contact;
