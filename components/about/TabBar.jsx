'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const currentRoute = usePathname();

  function isActive(route){
    return currentRoute.includes(route);
  }

  function isRouter(route){
    return currentRoute == route;
  }
    if(isActive('/about')){
      return (
        <section className="flex stify-center gap-2">
          <Link href="/about/me" className={`${isRouter('/me') ? "" : "" }`}>Me</Link>
          <Link href="/about/languages" className={`${isActive('/languages') ? "" : "" }`}>Languages</Link>
          <Link href="/about/technologies" className={`${isActive('/hobbies') ? "" : "" }`}>Technologies</Link>
          <Link href="/about/hobbies" className={`${isActive('/hobbies') ? "" : "" }`}>Hobbies</Link>
        </section>
  
      );
    }
}
