import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f0f5f0] px-4 text-center">
        <h1 className="text-8xl font-bold text-red-600">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
