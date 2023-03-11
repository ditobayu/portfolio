import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 justify-between dark:bg-slate-900 bg-slate-200 p-4 text-xs sm:text-lg sm:p-8 px-4 pb-20 sm:pb-24 md:pb-8 sm:px-20 w-full">
        <div className="text-md sm:text-xl">Portfolio</div>
        <div className="">
          {/* Jl. Kromodikoro, Senggreng, Sumberpucung, Malang */}
          Malang
        </div>
        <div>
          <div>About</div>
          <div>Partners</div>
          <div>Contacts</div>
          <div>Merchants</div>
        </div>
        <div className="flex flex-col">
          <a
            className="hover:text-cyan-500 duration-200 hover:shadow-cyan-500/50 "
            href="https://www.linkedin.com/in/dito-bayu-adhitya-36198a227/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-cyan-500 duration-200 hover:shadow-cyan-500/50 "
            href="https://github.com/ditobayu"
            target="_blank"
          >
            Github
          </a>
          <a
            className="hover:text-cyan-500 duration-200 hover:shadow-cyan-500/50  "
            href="https://www.instagram.com/_ditobayu/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <a
          href="#section1"
          className="rounded-full bg-cyan-500 flex items-center justify-center w-10 h-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
