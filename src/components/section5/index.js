import React, { useState } from "react";

const Section5 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      setData({ ...data, name: value });
    } else if (name === "email") {
      setData({ ...data, email: value });
    } else if (name === "message") {
      setData({ ...data, message: value });
    }
  };
  const [response, setResponse] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://asdasdasd-ditobayu.vercel.app/auth/sendfeedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        subject: "Portfolio Message",
        feedback: "email : " + data.email + "\n " + "message : " + data.message,
      }),
    })
      .then((res) => {
        setResponse(res?.json()?.message);
      })
      .catch((res) => {
        setResponse(res?.json()?.message);
      });
    setData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div>
      <div
        id="section5"
        className="flex flex-col sm:flex-row dark:bg-slate-800 bg-slate-100 px-4 sm:pxp-16 md:px-32 pb-12 p-4 sm:p-12 md:pt-20 w-full"
      >
        <div className="flex-1 pr-0 sm:pr-8">
          <div className="text-xl sm:text-2xl md:text-4xl mb-4 text-center sm:text-left">
            Contact Me
          </div>
          <div className="text-xs sm:text-lg text-center sm:text-left">
            send me a message and let's talk about our next project, I'm sure
            you have lots of ideas on your mind
          </div>
        </div>
        <div className="w-full sm:w-6/12 shadow-md mt-4 sm:mt-0 dark:bg-slate-900 bg-slate-200 p-8">
          <div className="mb-4">Send Me a Message</div>
          <form
            onSubmit={handleSubmit}
            enctype="text/plain"
            className=" flex flex-col gap-2 text-sm"
          >
            <div className=" relative createInput">
              <input
                required="required"
                type="text"
                onChange={handleInput}
                value={data.name}
                name="name"
                placeholder=""
                className="bg-transparent duration-300 relative valid:pt-6 valid:pb-2 focus:pb-2 hover:pb-2 focus:pt-6 hover:pt-6 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-slate-600 py-1 px-4 w-full"
              />
              <span className="absolute bg-transparent left-0 mt-1 ml-4 text-sm duration-300 dark:text-slate-300 text-slate-500 ">
                Name
              </span>
            </div>
            <div className=" relative createInput">
              <input
                required="required"
                type="text"
                onChange={handleInput}
                value={data.email}
                name="email"
                placeholder=""
                className="bg-transparent duration-300 relative valid:pt-6 valid:pb-2 focus:pb-2 hover:pb-2 focus:pt-6 hover:pt-6 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 placeholder:font-semibold text-sm border border-slate-600 py-1 px-4 w-full"
              />
              <span className="absolute bg-transparent left-0 mt-1 ml-4 text-sm duration-300 dark:text-slate-300 text-slate-500 ">
                Email
              </span>
            </div>
            <div className=" relative createInput flex overflow-hidden">
              <textarea
                required="required"
                type="text"
                onChange={handleInput}
                value={data.message}
                name="message"
                placeholder=""
                className="noScrollbar h-32 bg-transparent duration-300 relative valid:pt-6 valid:pb-2 focus:pb-2 hover:pb-2 focus:pt-6 hover:pt-6 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:border-2 placeholder:font-semibold text-sm border border-slate-600 py-1 px-4 w-full"
              />
              <span className="absolute dark:bg-slate-900 bg-slate-200 left-0 mt-1 ml-4 text-sm duration-300 dark:text-slate-300 text-slate-500 ">
                Message
              </span>
            </div>
            <div className="flex flex-row-reverse">
              <button
                type="submit"
                className="bg-cyan-500 p-2 w-52 hover:scale-105 duration-300 hover:shadow-md hover:shadow-cyan-500/50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section5;
