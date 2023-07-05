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
      <div className="flex my-16 justify-center">
        <div className="flex justify-center">
          <div className="text-left mr-[-25%] z-[9] h-fit">
            <p className="font-black text-4xl text-black">Hello,</p>
            <p className="font-black text-4xl text-black">my name is</p>
            <br />
            <p className="font-black text-5xl text-white p-5 bg-sky-300 rounded-3xl no-offset-shadow w-fit">
              Stevan Vlajic
            </p>
          </div>
          <Image
            className="rounded-3xl"
            src="/me.png"
            alt="stevan vlajic"
            width={400}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="w-96 ">
          <div>
            <h1 className="font-black text-2xl border-b-4 border-sky-300 mb-3">
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

          <div>
            <h1 className="font-black text-2xl border-b-4 border-[#FFA7CF] mb-3">
              My interests
            </h1>
            <p className="font-normal">
              I'm currently learing  <span className="font-bold">NextJS </span> and <span className="font-bold">Tailwind-CSS </span> because I love to stay up to date and 
              keep track of new technologies. <span className="font-bold">Steve Jobs </span> once said: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
              This quote <span className="font-bold">represents perfectly my interests </span> and my current mindset. 
            </p>
          </div>

          <div>
            <h1 className="font-black text-2xl border-b-4 border-[#9AE6E1] mb-3">
              Last words
            </h1>
            <p className="font-normal">
              This portfolio is  <span className="font-bold">currently under creation </span> and is fully created in <span className="font-bold">NextJS and Tailwind</span>, so there might be some bugs in it.
              But all in all I think I've done a <span className="font-bold">pretty good job </span> creating it. So feel free to explore the portfolio. Cheers, Stevan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}