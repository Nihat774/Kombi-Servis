import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
    <hr className="h-[3px] bg-blue-600 -mx-[30px] md:-mx-[70px] my-5" />
      <footer className="flex md:flex-row flex-col justify-center gap-2 items-center text-xl">
        <p>kombiustasixirdalan.az by</p>
        <Link className="text-blue-600 hover:underline" target="_blank" href="https://nihatmammadov.vercel.app/">
          nihathanafi
        </Link>
      </footer>
    </>
  );
}
export default Footer;
