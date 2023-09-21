"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { IoIosArrowForward, IoMdCheckboxOutline } from "react-icons/io";
// import { Button, SubHeading } from "../atoms";
import { useEffect } from "react";

const CoreMandate = ({ heading, sub_heading }) => {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const mandates = [
    "Performance Enhancement: MX-Stat aims to improve performance by delivering quick responses, especially when working with real-time or near-real-time data. This purpose is essential for users who require timely and efficient data analysis.",
    "Security and Privacy Assurance: MX-Stat prioritizes the security and privacy of user data. It will implement robust security measures to safeguard sensitive information, protecting it from unauthorized access, breaches, or leaks. This ensures that users can trust the application with their data.",
    "User-Friendly Experience: MX-Stat offers an intuitive and user-friendly interface. This purpose is geared towards enhancing the user experience, making it easy for users to interact with the application and understand the results, even if they are not tech-savvy.",
    "Data Integration and Versatility: MX-Stat provides the capability to seamlessly connect and interact with various data sources, such as databases, APIs, or third-party services. This purpose enables users to work with diverse data sets and sources, enhancing the versatility of the application for different use cases.",
  ];
  return (
    <section className={`py-14 px-4 md:px-10 bg-white md:flex  items-start`}>
      <Image
        data-aos="fade-down"
        alt="Our Purpose gif"
        src={"/purpose.jpg"}
        width={400}
        height={700}
        className={`mb-10 rounded-2xl`}
        loading="lazy"
      />

      <div className={`flex-1 lg:px-14`}>
        {sub_heading ? (
          <div data-aos="fade-down" data-aos-duration="4000">
            <h2 className={`text-2xl font-outfit text-center mt-8`}>
              {heading}
            </h2>
            <p
              className={`text-[#12592E] font-nunito font-black text-sm leading-3 text-center mb-[15px]`}
            >
              {sub_heading}
            </p>
          </div>
        ) : (
          <h2
            className={`w-full text-2xl font-outfit font-normal opacity-80 leading-5 py-2 after:content-[''] after:block after:w-[74px] after:mt-[9.5px] after:h-[2px] after:rounded-full [&_after after:bg-[#12b97d]`}
          >
            {heading}
          </h2>
        )}

        {mandates.map((mandate, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="4000"
            key={index}
            className={`flex my-5`}
          >
            <p className={`text-xl`}>
              <IoMdCheckboxOutline size={19} />
            </p>

            <p
              className={`pr-14 pl-3 text-[16px] font-outfit leading-[21.76px]`}
            >
              {mandate}
            </p>
          </div>
        ))}

        <button
          data-aos="zoom-in"
          data-aos-duration="4000"
          onClick={() => router.push("/chart")}
          className={`bg-teal-600 text-white w-[164px] border-4 font-outfit flex items-center text-center px-4 py-2 justify-between rounded-sm leading-[21.76px] hover:bg-[#707070]`}
        >
          Go to Charts
          <span className={`text-white text-base`}>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CoreMandate;
