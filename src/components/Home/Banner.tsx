import DateAndTime from "@/components/shared/DateAndTime";
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#dfe8e1] bg-[#fbfdfc] px-4 py-3 sm:px-5 md:flex-row md:items-center md:gap-4 md:px-6 md:pt-3 md:pb-15">
      {/* Left Content */}
      <div className="flex min-w-0 flex-col items-start">
        {/* Date */}
        <span className="rounded-full bg-[#e1f3e8] px-3 py-1 text-xs font-medium text-[#078443]">
          <DateAndTime />
        </span>

        {/* Title */}
        <h1 className="mt-3 text-2xl font-bold text-[#202923] sm:text-3xl md:text-3xl">
          আজকের বাজারের দাম এক নজরে
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm leading-6 text-[#858b86]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        {/* Button */}
        <button className="mt-6 rounded-lg bg-[#078b45] px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-[#06783b] cursor-pointer">
          <a href="#all-products" className="scroll-behavior: smooth;">
            সব পণ্য দেখুন
          </a>
        </button>
      </div>

      {/* Right Illustration */}
      <div className="flex w-full shrink-0 items-center justify-center md:w-auto md:justify-end">
        <Image
          src="/bazar-hero.png"
          alt="Market illustration"
          width={240}
          height={190}
          className="h-auto w-40 object-contain sm:w-48 md:w-60"
        />
      </div>
    </section>
  );
}

export default Banner;
