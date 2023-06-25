'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function Navbar(){

  const currentPath = usePathname();

  function isActive(path){
    return currentPath == path;
  }

  return(
      <nav className='inline-flex justify-center items-center px-6 py-3 rounded-full no-offset-shadow bg-white'>
          <Link href="/" className={`${isActive('/') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}>Home</Link>
          <Link href="/contacts" className={`${isActive('/contacts') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold `}>Contact</Link>
          <Link href="/projects" className={`${isActive('/projects') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold`}>Projects</Link>
          <Link href="/links" className={`${isActive('/links') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold `}>Links</Link>
          <Link href="/certs"className={`${isActive('/certs') ? 'bg-sky-300 text-white font-bold' : 'text-gray-600'} rounded-3xl px-5 py-2 font-bold `}>Certs</Link> 
      </nav>
  );
}
