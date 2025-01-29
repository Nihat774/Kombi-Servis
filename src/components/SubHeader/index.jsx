"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function SubHeader() {
  const pathname = usePathname()
    const navLinks = [
        { id:1,href: "/", title: "Ana Səhifə" },
        { id:2,href: "/about", title: "Haqqımızda" },
        { id:3,href: "/contact", title: "Əlaqə" },
      ];
  return (
    <>
      <div>
        <nav className="flex justify-between  bg-blue-600 border-t text-white py-3 px-5 md:px-[17vw]">
          {navLinks.map(({ href, title,id }) => {
            return (
              <React.Fragment key={id}>
                <Link href={href} className={`text-md md:text-xl hover:border-b hover:pb-1 ${pathname == href?"border-b pb-1":""}`} >
                  {title}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </>
  )
}

export default SubHeader
