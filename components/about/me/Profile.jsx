import React from "react";
import Image from "next/image";

export default function Profile() {
  return <Image className="rounded-3xl" src="/me.png" width={400} height={600}/>;
}
