"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className=" bg-[#808080] h-[70vh] w-full md:py-10 flex flex-col md:flex-row items-center justify-between">
      <div className="pl-2 pt-10 md:pl-24">
        <h1 className=" text-teal-900 text-3xl md:text-5xl font-bold mb-4">
          MX-Stat:
        </h1>
        <h3 className="text-white text-medium md:text-2xl font-bold">
          LET'S GET TODAY'S STATs
        </h3>
        <button
          onClick={() => router.push("/chart")}
          class="bg-teal-500 hover:bg-teal-600 mt-8 my-4 text-xs text-white font-medium py-2 px-4  rounded"
        >
          GO TO CHARTS
        </button>
      </div>
      <div>
        <Image
          src="/gif.gif"
          width={10}
          height={10}
          className="w-full h-[70vh]"
          objectFit="cover"
        />
      </div>
    </main>
  );
}
