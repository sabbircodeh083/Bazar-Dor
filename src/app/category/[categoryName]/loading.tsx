import React from "react";

function CategoryProductsSkeleton() {
  return (
    <div className="container mx-auto my-3 px-3 md:my-10">
      {/* Category information skeleton */}
      <div className="mb-2 flex animate-pulse items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white/70 px-5 py-5 md:mb-4 md:justify-start">
        <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-200" />

        <div className="flex-1 space-y-2">
          <div className="mx-auto h-5 w-36 rounded bg-gray-200 md:mx-0" />
          <div className="mx-auto h-3 w-52 max-w-full rounded bg-gray-200 md:mx-0" />
        </div>
      </div>

      {/* Sorting controls skeleton */}
      <div className="mb-4 flex animate-pulse flex-col gap-3 rounded-xl border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="h-5 w-32 rounded bg-gray-200" />

        <div className="flex flex-wrap gap-2">
          <div className="h-9 w-24 rounded-lg bg-gray-200" />
          <div className="h-9 w-28 rounded-lg bg-gray-200" />
          <div className="h-9 w-24 rounded-lg bg-gray-200" />
        </div>
      </div>

      {/* Product cards skeleton */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border border-gray-200 bg-white/70 p-4"
          >
            {/* Product heading */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 space-y-2">
              <div className="h-3 w-24 rounded bg-gray-200" />
              <div className="h-7 w-32 rounded bg-gray-200" />
            </div>

            {/* Price comparison */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-gray-100 p-3">
                <div className="mb-2 h-3 w-16 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
              </div>

              <div className="rounded-lg bg-gray-100 p-3">
                <div className="mb-2 h-3 w-16 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
              </div>
            </div>

            {/* Bottom details */}
            <div className="mt-4 h-9 w-full rounded-lg bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProductsSkeleton;
