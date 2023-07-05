import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentDate = new Date();
  const options = { day: "numeric", month: "short" };

  return (
    <footer className="flex gap-5 bg-sky-300 mt-auto py-5 justify-center items-center sm:flex-col sm:gap-0">
      <h1 className="text-8xl text-white font-black">
        {currentDate.toLocaleString("en-US", options).toUpperCase()}
      </h1>

      <div className="flex flex-col rounded-lg bg-white py-4 px-10 w-60 text-left">
        <h3 className="font-black text-2xl border-b-4 border-sky-300 mb-2">
          Contact
        </h3>
        <div className="font-bold">
          <div className="font-medium">
            <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-sky-300 hover:text-white">
              <Link href="" target="_blank">
                06604669179
              </Link>
            </li>
            <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-sky-300 hover:text-white">
              <Link
                href="mailto:stevanvlajic.business@gmail.com"
                target="_blank"
              >
                Hire me
              </Link>
            </li>
            <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-sky-300 hover:text-white">
              <Link href="" target="_blank">
                LinkedIn
              </Link>
            </li>
            <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-sky-300 hover:text-white">
              <Link href="" target="_blank">
                Xing
              </Link>
            </li>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-white py-4 px-10 w-60 text-left">
        <h3 className="font-black text-2xl border-b-4 border-[#FFA7CF] mb-2">
          Top projects
        </h3>
        <div className="font-medium">
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#FFA7CF] hover:text-white">
            <Link href="https://github.com/Stevan06v/sensorify" target="_blank">
              Sensorify
            </Link>{" "}
          </li>
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#FFA7CF] hover:text-white">
            <Link
              href="https://github.com/Stevan06v/nextjs-hidden-service"
              target="_blank"
            >
              Hidden service
            </Link>
          </li>
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#FFA7CF] hover:text-white">
            <Link href="https://github.com/Stevan06v/plantify" target="_blank">
              Plantify
            </Link>
          </li>
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#FFA7CF] hover:text-white">
            <Link
              href="https://github.com/Stevan06v/coffee-machine"
              target="_blank"
            >
              Coffee machine
            </Link>
          </li>
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-white py-4 px-10 w-60 text-left">
        <h3 className="font-black text-2xl border-b-4 border-[#9AE6E1] mb-2">
          Legal
        </h3>
        <div className="font-medium">
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#9AE6E1] hover:text-white">
            <Link href="" target="_blank">
              Terms
            </Link>
          </li>
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#9AE6E1] hover:text-white">
            <Link href="" target="_blank">
              Privacy policy
            </Link>
          </li>
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#9AE6E1] hover:text-white">
            <Link href="" target="_blank">
              Cookies
            </Link>
          </li>
          <li className="p-1 cursor-pointer rounded-md transition duration-150 ease-in-out hover:bg-[#9AE6E1] hover:text-white">
            <Link href="" target="_blank">
              Imprint
            </Link>
          </li>
        </div>
      </div>
    </footer>
  );
}
