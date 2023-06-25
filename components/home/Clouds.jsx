import React from "react";
import Cloud from "./Cloud";

export default function Clouds() {
  return (

      <div className="grid grid-cols-2 grid-rows-4 place-items-center">
        <section className="flex">
          <Cloud />
          <div className="text-left ml-[-35%] mt-[10%] z-[99]">
            <p className="font-black text-5xl text-black">Hello,</p>
            <p className="font-black text-5xl text-black">my name is</p>
            <br />
            <p className="font-black text-7xl text-white p-5 bg-sky-300 rounded-3xl no-offset-shadow">
              Stevan Vlajic
            </p>
          </div>
        </section>

        <div></div>
        <div></div>

        <section className="flex">
          <div className="text-right mr-[-38%] mt-[15%] z-[99]">
            <p className="font-black text-5xl text-black">Feel free</p>
            <p className="font-black text-5xl text-black">to visit my</p>
            <br />
            <p className="font-black text-7xl bg-[#FFA7CF] text-white p-5 bg-baby rounded-3xl no-offset-shadow">
              Portfolio
            </p>
          </div>
          <Cloud />
        </section>

        <section className="flex">
          <Cloud />
          <div className="text-left ml-[-30%] mt-[10%] z-[99]">
            <p className="font-black text-5xl text-black">Get some,</p>
            <p className="font-black text-5xl text-black">inspirational</p>
            <br />
            <p className="font-black text-7xl text-white p-5 bg-[#9AE6E1] rounded-3xl no-offset-shadow">
              Quotes
            </p>
          </div>
        </section>

        <div></div>
        <div></div>

        <section className="flex">
          <div className="text-right mr-[-38%] mt-[15%] z-[99]">
            <p className="font-black text-5xl text-black">Make</p>
            <p className="font-black text-5xl text-black">my day</p>
            <br />
            <p className="font-black text-7xl bg-sky-300 text-white p-5 bg-baby rounded-3xl no-offset-shadow">
              Coffee
            </p>
          </div>
          <Cloud />
        </section>
      </div>

  );
}
