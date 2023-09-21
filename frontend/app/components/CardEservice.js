import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const CardEservice = ({ icon, title, desc }) => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      data-aos="fade-up"
      className="bg-[#EEEEEE] gap-1 transition md:text-justify text-left text-black lg:rounded-lg rounded-xl my-3 px-10 font-mont text-md py-7  flex flex-col items-start md:mx-5 "
    >
      <p className="text-left ">
        <Image
          src={icon}
          alt="Image"
          width={10}
          height={10}
          className={`w-10 h-10`}
        />
      </p>
      <p className="text-[#008080] font-bold text-2xl">{title}</p>
      <p data-aos="flip-down" className="my-3">
        {desc}
      </p>
    </div>
  );
};

export default CardEservice;
