import React, { useState } from "react";
import foto from "../../assets/cust.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Testi from "./testi";

const Section4 = () => {
  const data = [
    {
      name: "Your Name 1",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 2",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 3",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 4",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 5",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 6",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 8",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
    {
      name: "Your Name 7",
      desc: "Your Comment",
      stars: [true, true, true, true, true],
      role: "Your Job",
      img: foto,
    },
  ];
  // const asd = ["q", "w", "e", "q", "w", "e", "q", "w", "e"];
  const [page, setPage] = useState(1);
  const lastIndex = page * 4;
  const firstIndex = lastIndex - 4;
  const currentData = data.slice(firstIndex, lastIndex);
  const totalHalaman = [];
  for (let index = 0; index < data.length / 4; index++) {
    totalHalaman.push(index + 1);
  }

  return (
    <div
      id="section4"
      className=" flex flex-col dark:bg-slate-900 bg-slate-200 pt-4 sm:pt-8 md:pt-12 p-4 sm:p-12 md:p-20 w-full overflow-x-scroll noScrollbar"
    >
      <div>Testimonials</div>
      <div className="mt-4 text-4xl font-semibold mb-4 sm:mb-20">
        What Client Say
      </div>
      <motion.div className="flex flex-row justify-center gap-4 ">
        <AnimatePresence>
          <div>Be my first testimonial</div>
          {/* {currentData.map((data) => (
            <Testi key={data.name} data={data} />
          ))} */}
        </AnimatePresence>
      </motion.div>
      {/* <div className="flex  flex-row justify-center gap-4 mt-4">
        {totalHalaman.map((data) => (
          <button
            className="rounded-full w-4 h-4 duration-300 focus:bg-cyan-500 bg-transparent border-2 border-cyan-500"
            onClick={() => setPage(data)}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Section4;
