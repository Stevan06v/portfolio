"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { addScaleCorrector, motion } from "framer-motion";

export default function TabBar() {
  const currentRoute = usePathname();

  function isActive(route) {
    return currentRoute.includes(route);
  }

  function isRoute(route) {
    return currentRoute == route;
  }

  if (isActive("/about")) {
    return (
      <section className="flex stify-center text-gray-600 border-b-sky-300 border-b-4 w-fit mx-auto gap-3">
        <Link
          href="/about/me"
          className={`${
            isRoute("/about/me") ? "bg-sky-300 text-white" : "bg-white"
          } rounded-t-lg px-7 py-2 font-bold`}
        >
          Me
        </Link>
        <Link
          href="/about/languages"
          className={`${
            isActive("/languages") ? "bg-sky-300 text-white" : "bg-white"
          } rounded-t-lg px-7 py-2 font-bold`}
        >
          Languages
        </Link>
        <Link
          href="/about/technologies"
          className={`${
            isActive("/technologies") ? "bg-sky-300 text-white" : "bg-white"
          }  rounded-t-lg px-7 py-2 font-bold`}
        >
          Technologies
        </Link>
        <Link
          href="/about/hobbies"
          className={`${
            isActive("/hobbies") ? "bg-sky-300 text-white" : "bg-white"
          }  rounded-t-lg px-7 py-2 font-bold`}
        >
          Hobbies
        </Link>
      </section>
    );
  }
}
