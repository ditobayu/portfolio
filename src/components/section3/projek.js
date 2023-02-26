import React from "react";
import { motion } from "framer-motion";

const Projek = ({ data }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 / 4 }}
    >
      <div className="overflow-hidden rounded-lg h-28 sm:h-56 w-24 sm:w-48 dark:bg-slate-700 bg-slate-300 text-left">
        <a target="_blank" href={data.link} className="h-28 ">
          <img
            src={data.img}
            className="rounded-b-lg  "
            alt="portfolio-images"
          />
        </a>
        <a
          href={data.link}
          className="mt-2 px-2 sm:px-4 text-xs flex flex-col gap-2"
          target="_blank"
        >
          <div className="text-xs sm:text-lg">{data.name}</div>
          <div className="hidden sm:flex">{data.desc}</div>
        </a>
      </div>
    </motion.div>
  );
};

export default Projek;
