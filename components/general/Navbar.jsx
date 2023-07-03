'use client';
import Link from 'next/link';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function Navbar() {

  const currentPath = usePathname();

  function isActive(path) {
    return currentPath == path;
  }

  return (
    <nav className='inline-flex justify-center items-center px-6 py-3 rounded-full no-offset-shadow bg-white select-none'>
      
      <motion.div
        className={`${isActive('/') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/" >Home</Link>
      </motion.div>

      <motion.div
        className={`${isActive('/contact') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/contact" >Contact</Link>
      </motion.div>

      <motion.div
        className={`${isActive('/projects') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/projects" >Projects</Link>
      </motion.div>


      <motion.div
        className={`${isActive('/links') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/links" >Links</Link>
      </motion.div>

      <motion.div
        className={`${isActive('/certs') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/certs" >Certs</Link>
      </motion.div>

    </nav >
  );
}
