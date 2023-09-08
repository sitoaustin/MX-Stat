"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <footer
      className={`text-base bg-[#006666] flex flex-col items-center md:h-[25vh] p-8 gap-4 ${
        pathname === "/" ? "mt-44 md:mt-0" : ""
      }`}
    >
      <Link href={"/"}>
        <Image
          src="/mxlogo.png"
          width={70}
          height={70}
          alt=""
          className="rounded-full w-14 h-14"
        />
      </Link>
      <div className="flex flex-col md:flex-row items-center">
        <span>&copy; Copyright- Website Authors: &nbsp;</span>
        <span>
          <Link href="https://github.com/sitoaustin" className="text-[#00008B]">
            Sixtus Onyedibe Nakachukwu
          </Link>
          &nbsp; And &nbsp;
          <Link
            href="https://github.com/nwekemaxwell"
            className="text-[#00008B]"
          >
            Maxwell Nweke Lotanna
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
