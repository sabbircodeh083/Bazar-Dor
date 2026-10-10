"use client";

import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import SocialComponents from "@/components/Authentication/SocialComponents";

function SignInPage() {
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const { data: resData, error } = await authClient.signIn.email({
      email: data.email as string,
      password: data.password as string,
      callbackURL: "/",
    });
    if (error) {
      toast.error("সাইন ইন সফল হয়নি! আবার চেষ্টা করুন।");
    } else {
      toast.success("সাইন ইন সফল হয়েছে !!!");
    }
  };
  return (
    <section>
      <div>
        <div className="min-h-screen bg-[#f0f5f0] px-4 py-4 lg:py-8">
          <div className="mx-auto max-w-md">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">সাইন ইন</h1>
              <p className="mt-2 text-sm text-gray-500">
                বিশ্বস্ত চাল, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 sm:p-6">
              <form
                className=" spcae-y-2  md:space-y-4"
                onSubmit={handleSignIn}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    ইমেইল
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    পাসওয়ার্ড
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    minLength={8}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition cursor-pointer hover:bg-green-800"
                >
                  সাইন ইন
                </button>
              </form>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-500">অথবা</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <SocialComponents />

              <p className="mt-5 text-center text-sm text-gray-600">
                অ্যাকাউন্ট নেই?{" "}
                <a
                  href="/signup"
                  className="font-medium text-green-700 hover:text-green-800"
                >
                  সাইন আপ করুন
                </a>
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-gray-500 transition hover:text-green-700"
              >
                ← হোম পেজে ফিরে যান
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
