"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

function ButtonsAndProfileIcon() {
  const { data: session, isPending } = authClient.useSession();
  const [modalStatus, setModalStatus] = useState(false);

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট সফল হয়নি! আবার চেষ্টা করুন।");
    } else {
      setModalStatus(false);
      toast.success("সাইন আউট সফল হয়েছে !!!");
      redirect("/signin");
    }
  };

  if (isPending) {
    return <p className="text-sm text-gray-500">লোড হচ্ছে...</p>;
  }

  return (
    <div className="relative flex items-center">
      {!session && (
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Link
            href="/signin"
            className="whitespace-nowrap text-sm font-bold text-black transition hover:text-green-800 sm:text-base"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="whitespace-nowrap rounded-lg bg-green-700 px-3 py-2 text-sm font-bold text-white transition hover:bg-green-800 sm:px-4 sm:text-base"
          >
            সাইন আপ
          </Link>
        </div>
      )}

      {session && (
        <>
          {/* Profile button */}
          <button
            type="button"
            onClick={() => setModalStatus((prev) => !prev)}
            aria-label="Toggle profile menu"
            aria-expanded={modalStatus}
            className="flex max-w-full cursor-pointer items-center gap-2 rounded-xl p-1 transition hover:bg-gray-100 sm:gap-3 sm:p-2"
          >
            {session.user?.image ? (
              <Image
                src={session.user.image}
                width={44}
                height={44}
                alt="Profile Picture"
                className="h-9 w-9 shrink-0 rounded-lg bg-[#f0f0f0] object-cover sm:h-11 sm:w-11"
              />
            ) : (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f0f0f0] sm:h-11 sm:w-11">
                <i className="fa-solid fa-user-secret text-xl text-gray-600 sm:text-2xl" />
              </span>
            )}

            <span className="max-w-28 truncate text-sm font-bold text-[#202a22] sm:max-w-40 sm:text-base md:max-w-52 md:text-lg">
              {session.user?.name}
            </span>

            <i
              className={`fa-solid fa-angle-down shrink-0 text-xs text-[#757c77] transition-transform sm:text-sm ${
                modalStatus ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile dropdown */}
          {modalStatus && (
            <div className="absolute right-0 top-full z-50 mt-3 w-[min(16rem,calc(100vw-2rem))] rounded-2xl border border-gray-200 bg-[#f9fbf9] p-4 shadow-xl">
              <div className="border-b border-gray-200 pb-3">
                <h3 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                  {session.user?.name}
                </h3>

                <p className="mt-1 break-all text-xs text-gray-500 sm:text-sm">
                  {session.user?.email}
                </p>
              </div>

              <div className="mt-2 space-y-1">
                <button
                  type="button"
                  onClick={() => setModalStatus(false)}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-100 cursor-pointer"
                >
                  <i className="fa-solid fa-user w-4 text-blue-500" />
                  আমার প্রোফাইল
                </button>

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-sm text-red-500 transition hover:bg-red-50 cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket w-4" />
                  সাইন আউট
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ButtonsAndProfileIcon;
