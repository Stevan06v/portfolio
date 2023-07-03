'use client';

import React from 'react';
import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
  return (    
      <motion.div
          className="bg-sky-300 fixed top-0 left-0 right-0 h-3 origin-left z-[11] no-offset-shadow"
          style={{ scaleX: scrollYProgress }}
      />
  )
}

export default ScrollProgress