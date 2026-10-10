import React from "react";

function ProductDescriptionSkeleton() {
  return (
    <section className="container mx-auto my-5 px-3 sm:px-4 md:my-10">
      <div className="flex w-full animate-pulse flex-col items-center gap-6 sm:gap-8 md:gap-10">
        {/* Product information card */}
        <div className="flex w-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-4">
            {/* Product image */}
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-gray-200 sm:h-18.5 sm:w-18.5" />

            {/* Product name and details */}
            <div className="min-w-0 flex-1 space-y-3">
              <div className="h-5 w-36 max-w-full rounded bg-gray-200 sm:h-6 sm:w-48" />
              <div className="h-3 w-40 max-w-full rounded bg-gray-200" />
              <div className="h-3 w-52 max-w-full rounded bg-gray-200" />
            </div>
          </div>

          {/* Today's price */}
          <div className="flex min-w-28 flex-col items-center justify-center rounded-2xl bg-[#f0f5f0] px-4 py-4 sm:min-w-32">
            <div className="mb-2 h-3 w-16 rounded bg-gray-200" />
            <div className="mb-2 h-8 w-20 rounded bg-gray-200" />
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="mt-2 h-6 w-16 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Price summary card */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white/70 p-4 sm:p-5">
          {/* Section title */}
          <div className="mb-5 h-5 w-36 rounded bg-gray-200" />

          {/* Minimum, maximum, and average price */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-4"
              >
                <div className="mb-3 h-3 w-24 rounded bg-gray-200" />
                <div className="mb-3 h-6 w-28 max-w-full rounded bg-gray-200" />
                <div className="h-3 w-36 max-w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Market prices heading */}
          <div className="mb-4 mt-6 h-5 w-48 max-w-full rounded bg-gray-200" />

          {/* Market prices table */}
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            {/* Table header */}
            <div className="grid min-w-150 grid-cols-5 gap-4 border-b border-gray-200 px-4 py-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-4 w-16 rounded bg-gray-200" />
              ))}
            </div>

            {/* Table rows */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`grid min-w-150 grid-cols-5 gap-4 px-4 py-4 ${
                  index % 2 === 1 ? "bg-[#f0f5f0]" : ""
                }`}
              >
                {Array.from({ length: 5 }).map((_, cellIndex) => (
                  <div
                    key={cellIndex}
                    className="h-4 w-20 max-w-full rounded bg-gray-200"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDescriptionSkeleton;
