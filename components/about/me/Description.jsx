"use client";
import React from "react";
import Image from "next/image";
import { Red_Rose } from "@next/font/google";

export default function Description() {
  const now = new Date();
  const dateOfBirth = new Date("09.01.2006");

  const getCurrentAge = () => {
    return now.getFullYear() - dateOfBirth.getFullYear();
  };
  return (
    <section>
      <div className="flex my-16 flex-wrap justify-center items-center">
        <div className="flex justify-center">
          <div className="text-left mr-[-25%] z-[9] min-[320px]:mr-[-35%] 2xl:mr-[-25%] xl:mr-[-25%] lg:mr-[-25%] md:mr-[-25%]">
            <p className="font-black text-4xl text-black 2xl:text-5xl min-[320px]:text-2xl lg:text-5xl md:text-5xl">Hello,</p>
            <p className="font-black text-4xl text-black 2xl:text-5xl min-[320px]:text-2xl lg:text-5xl md:text-5xl">my name is</p>
            <p className="font-black text-5xl text-white bg-sky-300 rounded-3xl no-offset-shadow 
            2xl:text-6xl 
            2xl:p-5
            2xl:rounded-3xl

            md:rounded-3xl
            md:text-6xl
            md:p-5

            lg:rounded-3xl
            lg:text-6xl
            lg:p-5

            min-[320px]:p-2
            min-[320px]:rounded-xl
            min-[320px]:text-3xl

            ">
              Stevan Vlajic
            </p>
          </div>
          <Image
            className="rounded-3xl w-full 2xl:w-[50%] md:w-7/12 lg:w-8/12 sm:w-7/12 min-[320px]:w-8/12"
            src="/me.png"
            alt="stevan vlajic"
            width={400}
            height={200}
          />
        </div>

        <div className="
        w-[30%]
        2xl:w-[30%]
        sm:w-9/12
        md:w-9/12
        min-[320px]:w-10/12
        ">
          <div className="border-4 p-6 no-offset-shadow border-[#E8F0FE] rounded-2xl mb-5 mt-3">
            <h1 className="font-black text-2xl 2xl:text-2xl border-b-4 border-sky-300 mb-3 ">
              Introduction
            </h1>
            <p className="font-normal 2xl:text-base">
              Hello, I'm <span className="font-bold">Stevan</span>, a{" "}
              <span className="font-bold">
                {" "}
                {getCurrentAge()} year old student{" "}
              </span>
              currently attending{" "}
              <span className="font-bold">HTBLA Leonding </span>
              in Austria. I am studying{" "}
              <span className="font-bold">media technology </span> and have a
              growing interest in coding. I'm excited to share my journey and
              showcase my skills in this portfolio.
            </p>
          </div>

          <div className="border-4 p-6 no-offset-shadow  border-[#E8F0FE] rounded-2xl mb-5">
            <h1
              className="
          font-black text-2xl border-b-4 border-[#FFA7CF] mb-3 2xl:text-2xl"
            >
              My interests
            </h1>
            <p className="font-normal 2xl:text-base">
              I'm currently learing <span className="font-bold">NextJS </span>{" "}
              and <span className="font-bold">Tailwind-CSS </span> because I
              love to stay up to date and keep track of new technologies.{" "}
              <span className="font-bold">Steve Jobs </span> once said: "The
              only way to do great work is to love what you do. If you haven't
              found it yet, keep looking. Don't settle." This quote{" "}
              <span className="font-bold">
                represents perfectly my interests{" "}
              </span>{" "}
              and my current mindset.
            </p>
          </div>
          <div className="border-4 p-6 no-offset-shadow border-[#E8F0FE] rounded-2xl">
            <h1 className="font-black text-2xl border-b-4 border-[#9AE6E1] mb-3 2xl:text-2xl">
              Last words
            </h1>
            <p className="font-normal 2xl:text-base">
              This portfolio is{" "}
              <span className="font-bold">currently under creation </span> and
              is fully created in{" "}
              <span className="font-bold">NextJS and Tailwind</span>, so there
              might be some bugs in it. But all in all I think I've done a{" "}
              <span className="font-bold">pretty good job </span> creating it.
              So feel free to explore the portfolio. Cheers, Stevan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
