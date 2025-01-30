import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
    <hr className="h-[3px] bg-blue-600  my-5" />
      <footer className="flex md:flex-row flex-col  flex-1 justify-center gap-2 items-center text-xl pb-3">
        <p>V1 kombiustasixirdalan.az by</p>
        <Link className="text-blue-600 hover:underline" target="_blank" href="https://nihatmammadov.vercel.app/">
          nihathanafi
        </Link>
      </footer>
    </>
  );
}
export default Footer;
