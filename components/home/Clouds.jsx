'use client'
import React from "react";
import Cloud from "./Cloud";
import { motion } from "framer-motion";

export default function Clouds() {
  return (

    <div className="flex justify-center select-none">
      <div className="grid grid-cols-2 grid-rows-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          whileInView={{ opacity: 1 }}
        >
          <section className="flex justify-center cursor-pointer">
            <Cloud />
            <div className="text-left ml-[-35%] mt-[10%] z-[9]">
              <p className="font-black text-5xl text-black">Hello,</p>
              <p className="font-black text-5xl text-black">my name is</p>
              <br />
              <p className="font-black text-7xl text-white p-5 bg-sky-300 rounded-3xl no-offset-shadow">
                Stevan
              </p>
            </div>
          </section>
        </motion.div>

        <div></div>
        <div></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          whileInView={{ opacity: 1 }}
        >
          <section className="flex justify-center cursor-pointer">
            <div className="text-right mr-[-38%] mt-[15%] z-[9]">
              <p className="font-black text-5xl text-black">Feel free</p>
              <p className="font-black text-5xl text-black">to visit my</p>
              <br />
              <p className="font-black text-7xl bg-[#FFA7CF] text-white p-5 bg-baby rounded-3xl no-offset-shadow">
                Portfolio
              </p>
            </div>
            <Cloud />
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          whileInView={{ opacity: 1 }}
        >
          <section className="flex justify-center cursor-pointer">
            <Cloud />
            <div className="text-left ml-[-30%] mt-[10%] z-[9]">
              <p className="font-black text-5xl text-black">Get some,</p>
              <p className="font-black text-5xl text-black">inspirational</p>
              <br />
              <p className="font-black text-7xl text-white p-5 bg-[#9AE6E1] rounded-3xl no-offset-shadow">
                Quotes
              </p>
            </div>
          </section>
        </motion.div>
        <div></div>
        <div></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          whileInView={{ opacity: 1 }}
        >
          <section className="flex justify-center cursor-pointer">
            <div className="text-right mr-[-38%] mt-[15%] z-[9]">
              <p className="font-black text-5xl text-black">Make</p>
              <p className="font-black text-5xl text-black">my day</p>
              <br />
              <p className="font-black text-7xl bg-sky-300 text-white p-5 bg-baby rounded-3xl no-offset-shadow">
                Coffee
              </p>
            </div>
            <Cloud />
          </section>
        </motion.div>
      </div>
    </div>
  


  );
}
