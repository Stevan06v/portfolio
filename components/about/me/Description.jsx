import React from "react"
import Image from "next/image"

export default function Description() {
  return (


    <section>

      <div className="flex justify-center">
        <div className="text-left mr-[-15%] mt-[-5%] z-[9]">
          <p className="font-black text-4xl text-black">Hello,</p>
          <p className="font-black text-4xl text-black">my name is</p>
          <br />
          <p className="font-black text-5xl text-white p-5 bg-sky-300 rounded-3xl no-offset-shadow">
            Stevan Vlajic
          </p>
        </div>
        <Image className="rounded-3xl" src="/me.png" width={400} height={600} />
      </div>
    </section>



  )
}
