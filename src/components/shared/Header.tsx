import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navber from "@/components/shared/Navber";
import DateAndTime from "@/components/shared/DateAndTime";
import MarqueeComponent from "@/components/shared/marquee";
import ButtonsAndProfileIcon from "@/components/shared/Buttons&ProfileIcon";

function Header() {
  return (
    <>
      <header className="w-full">
        <section className="container mx-auto flex flex-col items-center gap-2 px-3 py-2 sm:px-4 lg:px-6">
          {/* Logo, website name, and profile */}
          <div className="flex w-full items-center justify-between gap-2 py-2">
            {/* Logo and website information */}
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <Link href="/" className="shrink-0">
                <Image
                  className="rounded-lg bg-green-600 p-1.5 sm:p-2"
                  src="/logo-icon.png"
                  alt="বাজার দর Logo"
                  width={45}
                  height={45}
                  priority
                />
              </Link>

              <div className="min-w-0">
                <p className="truncate text-lg font-bold text-black sm:text-xl md:text-2xl">
                  বাজার দর
                </p>
                <div className="text-xs sm:text-sm">
                  <DateAndTime />
                </div>
              </div>
            </div>

            {/* Profile and authentication buttons */}
            <div className="shrink-0">
              <ButtonsAndProfileIcon />
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full">
            <Navber />
          </div>
        </section>
      </header>

      {/* Scrolling market information */}
      <div className="w-full overflow-hidden">
        <MarqueeComponent />
      </div>
    </>
  );
}

export default Header;
