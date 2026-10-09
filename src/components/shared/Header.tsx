import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navber from "@/components/shared/Navber";
import DateAndTime from "@/components/shared/DateAndTime";
import MarqueeComponent from "@/components/shared/marquee";
//import MarqueeComponent from "@/components/shared/Marquee";

function Header() {
  return (
    <>
      <section className="container mx-auto flex flex-col justify-center items-center gap-2 py-2">
        <div className=" w-full flex flex-row justify-between items-center py-2">
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              className="bg-green-600 px-2 py-2 rounded-lg"
              src="/logo-icon.png"
              alt="Logo"
              width={45}
              height={45}
            />
            <div>
              <p className="text-black text-2xl font-bold">বাজার দর</p>
              <DateAndTime />
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-end items-center">
            <Link
              href="#"
              className="text-black font-bold  hover:text-red-500 "
            >
              সাইন ইন
            </Link>
            <Link
              href="#"
              className="text-white font-bold bg-green-700 px-2 py-1.5 rounded-lg hover:bg-red-700 "
            >
              সাইন আপ
            </Link>
          </div>
        </div>
        <Navber></Navber>
      </section>
      <MarqueeComponent />
    </>
  );
}

export default Header;
