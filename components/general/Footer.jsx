import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="bg-sky-300 mt-auto py-5">
        
        <center>
        <Image
          src="/under-construction.png"
          width={200}
          height={200}
        />
        </center>

      </footer>
  );
}
