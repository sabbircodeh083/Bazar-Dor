"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট সফল হয়নি! আবার চেষ্টা করুন।", { position: "top-center" });
    } else {
      toast.success("সাইন আউট সফল হয়েছে !!!", { position: "top-center" });
      redirect("/signin");
    }
  };
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await authClient.updateUser({
        name: data.name as string,
      });
      toast.success("আপডেট সফল হয়েছে !!!", { position: "top-center" });
    } catch {
      toast.error("আপডেট সফল হয়নি! আবার চেষ্টা করুন।", { position: "top-center" });
    }
  };

  if (isPending) {
    return <p className="text-sm text-gray-500">লোড হচ্ছে...</p>;
  }
  return (
    <section>
      <div>
        <section className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Page heading */}
            <div className="mb-5">
              <h1 className="text-xl font-bold text-[#202a22] sm:text-2xl">
                আমার প্রোফাইল
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
              </p>
            </div>

            {/* User information card */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex min-w-0 items-center gap-3">
                {session?.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile Picture"
                    width={56}
                    height={56}
                    className="h-12 w-12 shrink-0 rounded-xl object-cover sm:h-14 sm:w-14"
                  />
                ) : (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 sm:h-14 sm:w-14">
                    <i className="fa-solid fa-user-secret text-2xl text-gray-500" />
                  </div>
                )}

                <div className="min-w-0">
                  <h2 className="truncate text-sm font-bold text-[#202a22] sm:text-base">
                    {session?.user.name}
                  </h2>
                  <p className="break-all text-xs text-gray-500 sm:text-sm">
                    {session?.user.email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSignOut}
                className="flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-red-400 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 sm:self-center sm:text-sm cursor-pointer"
              >
                <i className="fa-solid fa-arrow-right-from-bracket" />
                সাইন আউট
              </button>
            </div>

            {/* Information form card */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white/70 p-4 sm:mt-5 sm:p-5">
              <h2 className="mb-6 text-sm font-bold text-[#202a22] sm:text-base">
                তথ্য
              </h2>

              <form onSubmit={handleUpdate} className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    নাম
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={session?.user.name ?? ""}
                    className="w-full rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 cursor-pointer"
                >
                  আপডেট
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProfilePage;
