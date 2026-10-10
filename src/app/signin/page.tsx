import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <section>
      <div>
        <div className="min-h-screen bg-[#f0f5f0] px-4 py-8">
          <div className="mx-auto max-w-md">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">সাইন ইন</h1>
              <p className="mt-2 text-sm text-gray-500">
                বিশ্বস্ত চাল, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 sm:p-6">
              <form className="space-y-4">
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

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer hover:border-green-400"
                >
                  <i className="fa-brands fa-google text-base text-[#4285F4]" />
                  Google দিয়ে চালিয়ে যান
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer hover:border-green-400"
                >
                  <i className="fa-brands fa-github text-base" />
                  GitHub দিয়ে চালিয়ে যান
                </button>
              </div>

              <p className="mt-5 text-center text-sm text-gray-600">
                অ্যাকাউন্ট নেই?{" "}
                <a
                  href="/sign-up"
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
