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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
    }, 2000);
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
            <div className="flex flex-row-reverse items-center">
              <button
                type="submit"
                className="bg-cyan-500 p-2 w-52 hover:scale-105 duration-300 hover:shadow-md hover:shadow-cyan-500/50"
              >
                Send Message
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#828282"
                className={`${
                  isLoading ? "flex" : "hidden"
                } h-6 w-6 duration-200 animate-spin mr-2`}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#828282"
                className={`${
                  isLoading2 ? "flex" : "scale-0"
                } h-6 w-6 duration-200 mr-2`}
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              <p
                className={`${
                  isLoading2 ? "flex" : "scale-0"
                }  duration-200 mr-2`}
              >
                I will reply as soon as possible
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section5;
