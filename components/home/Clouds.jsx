import React from "react";
import Cloud from "./Cloud";

export default function Clouds() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-4 gap-x-80">
        <section>
          <Cloud />
          

        </section>

        <div></div>
        <div></div>

        <section>
          <Cloud />
        </section>

        <section>
          <Cloud />
        </section>

        <div></div>
        <div></div>

        <section>
          <Cloud />
        </section>

        
      </div>
    </div>
  );
}
