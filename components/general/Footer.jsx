import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-5 bg-sky-300 mt-auto py-5 justify-center items-center">
      <h1 className="text-8xl text-white font-black">Footer</h1>

      <div className="flex flex-col rounded-lg bg-white py-4 px-10 w-60 text-left">
        <h3 className="font-black text-2xl border-b-4 border-sky-300 mb-2">Contact</h3>
        <div className="font-bold">
          <div className="font-medium">
            <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-sky-300 hover:text-white"><Link href="">PENIS</Link></li>
            <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-sky-300 hover:text-white"><Link href="">PENIS</Link></li>
            <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-sky-300 hover:text-white"><Link href="">PENIS</Link></li>
            <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-sky-300 hover:text-white"><Link href="">PENIS</Link></li>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-white py-4 px-10 w-60 text-left">
        <h3 className="font-black text-2xl border-b-4 border-[#FFA7CF] mb-2">Top projects</h3>
        <div className="font-medium">
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#FFA7CF] hover:text-white"><Link href="https://github.com/Stevan06v/sensorify">Sensorify</Link> </li>
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#FFA7CF] hover:text-white"><Link href="https://github.com/Stevan06v/nextjs-hidden-service">Hidden service</Link></li>
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#FFA7CF] hover:text-white"><Link href="https://github.com/Stevan06v/plantify">Plantify</Link></li>
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#FFA7CF] hover:text-white"><Link href="https://github.com/Stevan06v/coffee-machine">Coffee machine</Link></li>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-white py-4 px-10 w-60 text-left">
        <h3 className="font-black text-2xl border-b-4 border-[#9AE6E1] mb-2">Legal</h3>
        <div className="font-medium">
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#9AE6E1] hover:text-white"><Link href="">Terms</Link></li>
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#9AE6E1] hover:text-white"><Link href="">Privacy policy</Link></li>
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#9AE6E1] hover:text-white"><Link href="">Cookies</Link></li>
          <li className="p-1 rounded-md transition duration-150 ease-in hover:bg-[#9AE6E1] hover:text-white"><Link href="">Imprint</Link></li>
        </div>
      </div>

    </footer>
  );
}
