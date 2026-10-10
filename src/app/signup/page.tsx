"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

import { toast } from "react-toastify";

function SignUpPage() {
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    if (data.password !== data.confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি একই নয়। আবার চেষ্টা করো।");
    } else {
      const { data: resData, error } = await authClient.signUp.email({
        name: data.name as string,
        email: data.email as string,
        password: data.password as string,
      });
      if (error) {
        toast.error("সাইন আপ সফল হয়নি! আবার চেষ্টা করুন।");
      } else {
        toast.success("সাইন আপ সফল হয়েছে !!!");
        redirect("/");
      }
    }
  };

  return (
    <section>
      <div>
        <div className="min-h-screen bg-[#f0f5f0] px-4 py-3 lg:py-8">
          <div className="mx-auto max-w-md">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                অ্যাকাউন্ট তৈরি করুন
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/80 p-5 sm:p-6">
              <form className=" space-y-1 lg:space-y-4" onSubmit={handleSignUp}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    নাম
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="যেমন: রহিম উদ্দিন"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

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
                    autoComplete="email"
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
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    পাসওয়ার্ড নিশ্চিত করুন
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="আবার লিখুন"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 cursor-pointer"
                >
                  অ্যাকাউন্ট তৈরি করুন
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
                অ্যাকাউন্ট আছে?{" "}
                <a
                  href="/sign-in"
                  className="font-medium text-green-700 hover:text-green-800"
                >
                  সাইন ইন করুন
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

export default SignUpPage;
