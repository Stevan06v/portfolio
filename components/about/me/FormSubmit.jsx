import React from "react";

export default function FormSubmit() {
  return (
    <section className="my-14 p-24">
      <div className="flex justify-center items-center gap-16">
        <div className="flex items-center gap-5 ">
          <div className="gap-5 border-4 p-20 no-offset-shadow border-[#E8F0FE] rounded-2xl">
            <h1 className="font-black text-4xl border-b-4 border-[#FFA7CF] mb-3 text-left">
              Hire me via form:{" "}
            </h1>
            <form
              action="https://formsubmit.co/stevanvlajic.business@gmail.com"
              method="POST"
            >
              <div className="flex items-center gap-3">
                <div className="flex-initial">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Full Name"
                    required
                    className="outline-none p-2 rounded-lg font-medium mb-2 bg-[#E8F0FE]"
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required
                    className="outline-none p-2  rounded-lg font-medium mb-2 bg-[#E8F0FE]"
                  />
                  <br />
                  <input
                    type="text"
                    name="Company"
                    placeholder="Company"
                    required
                    className="outline-none p-2 rounded-lg font-medium mb-2 bg-[#E8F0FE]"
                  />
                </div>
                <div className="flex-initial">
                  <select
                    name="Continent"
                    className="w-full outline-none p-2 rounded-lg font-medium mb-2 bg-[#E8F0FE]"
                  >
                    <option className="font-medium">Europe</option>
                    <option className="font-medium">Africa</option>
                    <option className="font-medium">Australia</option>
                    <option className="font-medium">Asia</option>
                    <option className="font-medium">North America</option>
                    <option className="font-medium">South America</option>
                  </select>

                  <select
                    name="Job type"
                    className="w-full outline-none p-2 rounded-lg font-medium mb-2 bg-[#E8F0FE]"
                  >
                    <option className="font-medium">Job</option>
                    <option className="font-medium">Internship</option>
                  </select>  
                </div>
                <br />
              </div>
              <textarea
                name="Message"
                placeholder="Message"
                rows="3"
                cols="50"
                className="bg-[#E8F0FE] outline-none p-2 rounded-lg font-medium mb-2 w-full"
                required
              ></textarea>
              <button
                type="submit"
                className="m-auto flex justify-center bg-sky-300 text-white font-bold rounded-lg px-5 py-2"
              >
                send
              </button>
            </form>
          </div>
        </div>

        <div className="gap-5 border-4 p-20 no-offset-shadow border-[#E8F0FE] rounded-2xl">
          <h1 className="text-left font-black text-4xl border-b-4 border-sky-300 mb-3 ">
            Write me directly:{" "}
          </h1>
          <h2 className="font-bold text-xl border-b-4 border-[#9AE6E1]">
            Contact Information
          </h2>

          <li className="list-disc m-2 w-full font-medium">
            Business-Email:{" "}
            <b className="bg-sky-300 p-1 rounded-md text-white">
              <a href="mailto:stevanvlajic.business@gmail.com">
                stevanvlajic.business@gmail.com
              </a>{" "}
            </b>
          </li>
          <li className="list-disc m-2 w-full font-medium">
            Personal Email:{" "}
            <b className="bg-[#FFA7CF] p-1 rounded-md text-white">
              <a href="mailto:stevanvlajic5@gmail.com">
                stevanvlajic5@gmail.com
              </a>{" "}
            </b>
          </li>
          <li className="list-disc m-2 w-full font-medium">
            Instagram: {" "}
            <b className="bg-[#9AE6E1] p-1 rounded-md text-white">
              <a href="https://www.instagram.com/stevan._v/" target="_blank">
                 stevan06v
              </a>
            </b>{" "}
          </li>
        </div>
      </div>
    </section>
  );
}
