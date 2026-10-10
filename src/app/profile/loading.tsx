import React from "react";

function ProfilePageSkeleton() {
  return (
    <section className="min-h-screen animate-pulse bg-[#f0f5f0] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Page heading */}
        <div className="mb-5">
          <div className="h-7 w-36 rounded bg-gray-200 sm:h-8 sm:w-44" />
          <div className="mt-2 h-3 w-52 max-w-full rounded bg-gray-200 sm:h-4 sm:w-64" />
        </div>

        {/* User information card */}
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            {/* Profile image */}
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200 sm:h-14 sm:w-14" />

            {/* User name and email */}
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-4 w-32 max-w-full rounded bg-gray-200 sm:h-5 sm:w-40" />
              <div className="h-3 w-40 max-w-full rounded bg-gray-200 sm:h-4 sm:w-48" />
            </div>
          </div>

          {/* Sign-out button */}
          <div className="h-9 w-28 self-start rounded-lg border border-gray-200 bg-gray-200 sm:self-center" />
        </div>

        {/* Information form card */}
        <div className="mt-4 rounded-xl border border-gray-200 bg-white/70 p-4 sm:mt-5 sm:p-5">
          {/* Section heading */}
          <div className="mb-6 h-5 w-16 rounded bg-gray-200" />

          <div className="space-y-3">
            {/* Name label */}
            <div className="h-3 w-10 rounded bg-gray-200 sm:h-4" />

            {/* Name input */}
            <div className="h-10 w-full rounded-lg border border-gray-200 bg-gray-100" />

            {/* Update button */}
            <div className="h-9 w-full rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePageSkeleton;
