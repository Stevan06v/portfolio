'use client'
import Image from "next/image";

export default function Cloud() {
  return (
    <div>
        <Image
            src="/cloud.png"
            width={750}
            height={600}
            alt="CLOUD"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
    </div>
  )
}

