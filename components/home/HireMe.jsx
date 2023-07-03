import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HireMe() {
  return (
    <section className="p-24 bg-slate-100 m-auto">
      <center>
        <h1 className="text-6xl text-black font-black mb-10 border-b-[#FFA7CF] border-b-8 w-fit">
          Looking for a new employee?
        </h1>
        <br />
        <motion.div
          className="text-white bg-sky-300 px-8 py-6 font-bold rounded-full text-4xl w-fit"
          whileHover={{ scale: 1.2 }}
        >
          <Link href="mailto:stevanvlajic.business@gmail.com">Hire me</Link>
        </motion.div>
      </center>
    </section>
  );
}
