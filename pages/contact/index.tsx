import Head from "next/head";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

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

    alert("Your message has been sent! Thank you :)");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
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
      <Navbar />
      <div className="relative mt-12 mb-8">
        <div className="animate-tilt absolute -inset-0.5 mx-4 rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 opacity-75 blur filter transition duration-1000 group-hover:opacity-100 group-hover:duration-200 xl:mx-80"></div>
        <form className="relative mx-4 mt-5 rounded-2xl bg-white px-8 pt-8 pb-1 shadow-2xl dark:bg-gray-800 md:col-span-8 xl:mx-80">
          <div className="-mx-3 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="mr-3 w-full
                        appearance-none border-b border-teal-500 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200
                        focus:outline-none"
                type="text"
                placeholder="John"
                aria-label="Full name"
              />
              <p className="mb-5 text-xs italic text-red-500"></p>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="mr-3 w-full
                        appearance-none border-b border-teal-500 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200
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
                className="my-10 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-email-address"
              >
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                className="mr-3
                        w-full appearance-none border-b border-teal-500 bg-transparent p-4 leading-tight text-gray-700
                        focus:bg-gray-200 focus:outline-none"
                type="email"
                placeholder="example@exp.com"
                aria-label="Full name"
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="my-10 mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-message-content"
              >
                Your Message
              </label>
              <textarea
                onChange={(e) => {
                  setMessageContent(e.target.value);
                }}
                rows={10}
                className="mr-3 w-full appearance-none border-b border-teal-500 bg-transparent p-4 leading-tight text-gray-700 focus:bg-gray-200 focus:outline-none"
                placeholder="Your message goes here."
                aria-label="Full name"
              ></textarea>
            </div>
            <div className="flex w-full justify-between px-3">
              <div className="md:flex md:items-center"></div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="focus:shadow-outline my-2 rounded bg-gray-700
                            py-2 px-6 font-bold text-white shadow hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
