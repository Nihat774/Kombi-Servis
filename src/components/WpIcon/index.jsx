import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

function Icon() {
  return (
    <>
      <Link href="https://wa.me/+994702002447" target="_blank" className="animate-shake fixed z-50 right-[8%] bottom-[10%] cursor-pointer bg-green-500 rounded-lg">
        <FaWhatsapp className=" text-5xl p-2 text-white" />
      </Link>
    </>
  );
}

export default Icon;
