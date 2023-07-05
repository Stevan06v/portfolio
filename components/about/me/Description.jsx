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
    <section className="flex justify-center">
      <section className="flex justify-end">

        <div className="flex justify-start md:flex md:justify-center md:items-center min-[320px]:items-center"> {/* md:flex md:justify-center md:justify-center md:items-center min-[320px]:items-center*/}
          <div className="flex-initial justify-center z-[9] h-fit md:mr-[-45%] sm:mr-[-34%] min-[320px]:mr-[-40%] min-[320px]:mt-[30%]">
            <p className="font-black text-4xl text-black sm:text-3xl md:text-3xl min-[320px]:text-3xl">
              Hello,
            </p>
            <p className=" font-black  text-4xl  text-black md:text-3xl sm:text-3xl min-[320px]:text-3xl">
              my name is
            </p>
            <p className=" font-black  text-6xl  text-white  p-5  bg-sky-300  rounded-3xl  no-offset-shadow  w-fit md:text-5xl sm:text-5xl sm:p-5 min-[320px]:text-4xl min-[320px]:w-max min-[320px]:p-2 min-[320px]:rounded-xl ">
              Stevan Vlajic
            </p>
          </div>
          <Image
            className="rounded-3xl  h-auto  w-auto  flex-initial md:w-7/12 md:m-auto lg:w-8/12 2xl:w-7/12 xl:w-6/12 sm:w-7/12 min-[320px]:w-8/12"
            src="/me.png"
            alt="stevan vlajic"
            width={400}
            height={0}
          />
        </div>

        <div
       
          className="   
          2xl:w-3/12
          sm:w-9/12
          sm:max-lg:m-auto
          md:w-9/12
          min-[320px]:w-10/12
          min-[320px]:m-auto
      "
        >
          <div className="border-4 p-6 no-offset-shadow border-[#E8F0FE] rounded-2xl mb-5 mt-3">
            <h1 className="font-black text-2xl border-b-4 border-sky-300 mb-3 ">
              Introduction
            </h1>
            <p className="font-normal">
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

          <div className="border-4 p-6 no-offset-shadow border-[#E8F0FE] rounded-2xl mb-5">
            <h1
              className="
          font-black text-2xl border-b-4 border-[#FFA7CF] mb-3"
            >
              My interests
            </h1>
            <p className="font-normal">
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
            <h1 className="font-black text-2xl border-b-4 border-[#9AE6E1] mb-3">
              Last words
            </h1>
            <p className="font-normal">
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
      </section>
    </section>
  );
}
