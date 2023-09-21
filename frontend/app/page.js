"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardEservice from "./components/CardEservice";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactUs from "./components/ContactUs";
import CoreMandate from "./components/Core-Mandate";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <main className="relative h-[90vh] w-full  text-center">
        <Image
          src="/purpose.jpg"
          alt=""
          width={600}
          height={700}
          layout="responsive"
          className="absolute -z-10 md:hidden brightness-50"
        />
        <Image
          src="/hero.jpg"
          alt=""
          width={600}
          height={100}
          layout="responsive"
          className=" hidden md:block"
        />
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="pt-20 md:absolute inset-0 top-5 md:top-10 lg:top-20"
        >
          <h1 className=" text-teal-900 text-3xl md:text-9xl font-bold mb-4">
            MX<span className="text-red-600">-Stat</span>
          </h1>
          <h3 className="text-white md:text-black text-medium md:text-2xl font-bold">
            Discover Your Peak Performance - Your Data Analysis Expert.{" "}
            {/* LET'S GET TODAY'S STATs */}
          </h3>
          <button
            onClick={() => router.push("/chart")}
            class="bg-teal-600 hover:bg-[#707070] mt-8 my-4 text-xs text-white font-medium py-2 px-4 lg:px-6 lg:py-4  rounded"
          >
            GO TO CHARTS
          </button>
        </div>
      </main>

      <section className="md:mt-24 mx-4 md:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm font-mont">
        <div
          data-aos="fade-up"
          className="bg-[white] lg:rounded-md md:text-justify text-left rounded-xl font-mont text-md py-5 lg:py-14 flex flex-col mx-5 "
        >
          <h1
            className={`leading-[4rem] text-3xl w-fit before:content-[''] before:bg-[#008080] font-bold text-[#008080] before:w-[75%] before:h-[3px] before:rounded-full font-outfit before:block`}
          >
            MX-Stat
          </h1>

          <p data-aos="flip-down" className="md:font-normal font-bold ">
            Empower your track and optimize your yearly performance. Input your
            data for the year with ease <br className="lg:flex hidden" /> and
            uncover valuable insights instantly
          </p>
        </div>
        <CardEservice
          icon="/icons/payments.svg"
          title="Visualization"
          desc=" Explore clear and interactive graphs that showcase your progress throughout the year."
        />
        <CardEservice
          icon="/icons/auth.svg"
          title="API Integration"
          desc="Easily integrate MX-Stat with your own personal app using our APIs, enhancing your app's data capabilities."
        />
        <CardEservice
          icon="/icons/reg.svg"
          title="Seamless Data Input"
          desc=" Effortlessly input your data for the year, ensuring nothing slips through the cracks"
        />
        <CardEservice
          icon="/icons/file.svg"
          title="Secure Data Sharing"
          desc="Integrate payment methods, allowing others to access and utilize your collected data for personal or research purposes."
        />
        <CardEservice
          icon="/icons/enquiry.svg"
          title="Data Collectors"
          desc=" Earn rewards as a data collector! Contribute securely to research initiatives and gain recognition"
        />
      </section>
      <CoreMandate heading="Our Purpose" />
      <ContactUs />
    </>
  );
}
