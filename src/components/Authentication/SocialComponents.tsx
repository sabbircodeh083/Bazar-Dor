"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { toast } from "react-toastify";

function SocialComponents() {
  const hendleSignInWithGoogle = async () => {
    const { data: googleResData, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error("সাইন ইন সফল হয়নি! আবার চেষ্টা করুন।");
    } else {
      toast.success("সাইন ইন সফল হয়েছে !!!");
    }
  };
  const hendleSignInWithGitHub = async () => {
    const { data: githubResData, error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    if (error) {
      toast.error("সাইন ইন সফল হয়নি! আবার চেষ্টা করুন।");
    } else {
      toast.success("সাইন ইন সফল হয়েছে !!!");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer hover:border-green-400"
          onClick={hendleSignInWithGoogle}
        >
          <i className="fa-brands fa-google text-base text-[#4285F4]" />
          Google দিয়ে চালিয়ে যান
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer hover:border-green-400"
          onClick={hendleSignInWithGitHub}
        >
          <i className="fa-brands fa-github text-base" />
          GitHub দিয়ে চালিয়ে যান
        </button>
      </div>
    </div>
  );
}

export default SocialComponents;
