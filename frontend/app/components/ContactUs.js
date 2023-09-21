import Image from "next/image";
import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-20 bg-[url('/contactBg.png')] flex flex-col md:gap-7 py-5 md:py-8 px-3 md:p-10 lg:mx-[9rem] md:mx-5">
      <h1 className="text-black font-bold md:font-extrabold text-[28px] md:text-[42px] font-mont">
        Get in touch
      </h1>
      <div className="flex flex-col md:flex-row justify-between md:gap-5">
        <div
          data-aos="zoom-out"
          className="w-full bg-[url('/contactusMobile.svg')] bg-no-repeat bg-contain md:bg-[url('/contactAvatar.svg')] relative md:w-[488px] h-[261px] md:h-[546px]"
        >
          <span className="text-[#008080] bottom-10 left-1 md:bottom-16 md:left-4 flex gap-2 absolute text-xs md:text-sm font-bold w-fit rounded-2xl bg-[#F9EBBA] py-1 md:py-[10px] px-3">
            <Image
              src="/icons/mailIcon.svg"
              width={20}
              height={20}
              alt="icon"
            />
            info@mx-stat
          </span>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
