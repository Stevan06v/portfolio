import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-5 bg-sky-300 mt-auto py-5 justify-center items-center">
      <h1 className="text-8xl text-white font-black">Footer</h1>
      <div className="flex flex-col rounded-lg bg-white p-3">
        <h3 className="">About</h3>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
      </div>
      <div className="flex flex-col rounded-lg bg-white p-3">
        <h3>Links</h3>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
      </div>
      <div className="flex flex-col rounded-lg bg-white p-3">
        <h3>Legal</h3>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
        <Link href="">PENIS</Link>
      </div>
    </footer>
  );
}
