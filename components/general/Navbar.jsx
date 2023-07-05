"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();

  function isActive(path) {
    return currentPath.includes(path);
  }

  function isHome(path) {
    return currentPath === path;
  }

  return (
    <nav className="flex justify-center items-center px-3 py-2 rounded-full no-offset-shadow bg-white select-none 2xl:text-base 2xl:px-6 2xl:py-3 sm:text-sm md:text-base lg:text-base xl:text-base min-w-[320px]">
      <motion.div
        className={`${
          isHome("/") ? "bg-sky-300 text-white font-bold" : "text-gray-600"
        } rounded-full px-2 py-1 font-bold sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base 2xl:px-5 2xl:py-2`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/">Home</Link>
      </motion.div>

      <motion.div
        className={`${
          isActive("/about")
            ? "bg-sky-300 text-white font-bold"
            : "text-gray-600"
        } rounded-full px-2 py-1 font-bold sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base 2xl:px-5 2xl:py-2`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/about/me">About</Link>
      </motion.div>

      <motion.div
        className={`${
          isActive("/projects")
            ? "bg-sky-300 text-white font-bold"
            : "text-gray-600"
        } rounded-full px-2 py-1 font-bold sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base 2xl:px-5 2xl:py-2`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/projects">Projects</Link>
      </motion.div>

      <motion.div
        className={`${
          isActive("/contact")
            ? "bg-sky-300 text-white font-bold"
            : "text-gray-600"
        } rounded-full px-2 py-1 font-bold sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base 2xl:px-5 2xl:py-2`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/contact">Contact</Link>
      </motion.div>

      <motion.div
        className={`${
          isActive("/certs")
            ? "bg-sky-300 text-white font-bold"
            : "text-gray-600"
        } rounded-full px-2 py-1 font-bold sm:px-1.5 sm:py-1 lg:px-2 lg:py-1 sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base 2xl:px-5 2xl:py-2`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/certs">Certs</Link>
      </motion.div>
    </nav>
  );
}
