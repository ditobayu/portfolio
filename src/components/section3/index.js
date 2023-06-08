import React, { useState } from "react";
import lokerin from "../../assets/Lokerin.png";
import taskmanager from "../../assets/taskmanager.png";
import dooit from "../../assets/dooit.png";
import Projek from "./projek";
import { motion, AnimatePresence } from "framer-motion";

const Section3 = () => {
  const data = [
    {
      name: "Lokerin",
      desc: "My final project while participating in the Sanbercode React JS bootcamp",
      img: lokerin,
      category: ["frontend"],
      link: "https://lokerinaja.netlify.app/",
    },
    {
      name: "Task Manager",
      desc: "My personal project to fill spare time in semester 1 holidays",
      img: taskmanager,
      category: ["frontend", "backend"],
      link: "https://managertugas.vercel.app/",
    },
    {
      name: "Doo-IT",
      desc: "My final project for Dasar Desain Antar Muka University Course",
      img: dooit,
      category: ["frontend", "backend"],
      link: "https://doo-it.vercel.app/",
    },
  ];

  const [category, setCategory] = useState(null);
  return (
    <div className="flex flex-col gap-2 items-center text-center dark:bg-slate-800 bg-slate-100 pt-12 p-20 pb-0 w-full">
      <div className="text-3xl">My Project</div>
      <div className="text-sm w-96">
        Projects that I have worked on and will add more as time goes on
      </div>
      <div className="flex flex-row w-full mt-12 mb-4 gap-4  justify-center">
        <button
          onClick={() => setCategory(null)}
          className="w-20 text-sm border-b-2 duration-200 focus:border-cyan-500 border-transparent"
        >
          All
        </button>
        <button
          onClick={() => setCategory("frontend")}
          className="w-20 text-sm border-b-2 duration-200 focus:border-cyan-500 border-transparent"
        >
          Front End
        </button>
        <button
          onClick={() => setCategory("backend")}
          className="w-20 text-sm border-b-2 duration-200 focus:border-cyan-500 border-transparent"
        >
          Back End
        </button>
        <button
          onClick={() => setCategory("mobile")}
          className="w-20 text-sm border-b-2 duration-200 focus:border-cyan-500 border-transparent"
        >
          Mobile Apps
        </button>
        <button
          onClick={() => setCategory("machine")}
          className="w-20 text-sm border-b-2 duration-200 focus:border-cyan-500 border-transparent"
        >
          Machine Learning
        </button>
        <button
          onClick={() => setCategory("artificial")}
          className="w-20 text-sm border-b-2 duration-200 focus:border-cyan-500 border-transparent"
        >
          Artificial Inteligence
        </button>
      </div>
      <motion.div className=" flex justify-center flex-row flex-wrap gap-4">
        <AnimatePresence>
          {data
            .filter((data) => {
              if (category == null) {
                return data;
              } else if (data.category.includes(category)) {
                return data;
              }
            })
            .map((data) => (
              <Projek key={data.name} data={data} />
              // <div className="overflow-hidden rounded-lg h-56 w-48 dark:bg-slate-700 bg-slate-300 text-left">
              //   <div className="h-28 ">
              //     <img
              //       src={data.img}
              //       className="rounded-b-lg  "
              //       alt="portfolio-images"
              //     />
              //   </div>
              //   <div className="mt-2 px-4 text-xs flex flex-col gap-2">
              //     <div className="text-sm">{data.name}</div>
              //     <div>{data.desc}</div>
              //   </div>
              // </div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Section3;
