import React from "react";

function HomeSkeleton() {
  return (
    <div className="mx-1 animate-pulse py-5 md:mx-auto md:container">
      {/* Banner skeleton */}
      <section className="mb-8">
        <div className="flex min-h-48 flex-col justify-center gap-4 rounded-2xl bg-gray-200 p-6 sm:min-h-64 sm:p-10 md:min-h-80">
          <div className="h-4 w-28 rounded bg-gray-300" />
          <div className="h-7 w-3/4 max-w-lg rounded bg-gray-300 sm:h-10" />
          <div className="h-4 w-full max-w-md rounded bg-gray-300" />
          <div className="h-10 w-32 rounded-lg bg-gray-300" />
        </div>
      </section>

      {/* Increased products skeleton */}
      <ProductSectionSkeleton />

      {/* Decreased products skeleton */}
      <ProductSectionSkeleton />

      {/* All products skeleton */}
      <section className="mt-8">
        <div className="mb-5 h-6 w-36 rounded bg-gray-200 sm:w-48" />

        {/* Search and filter controls */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-10 w-full rounded-lg bg-gray-200 sm:max-w-xs" />
          <div className="h-10 w-full rounded-lg bg-gray-200 sm:w-40" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductSectionSkeleton() {
  return (
    <section className="mb-8">
      {/* Section title */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="h-6 w-40 max-w-full rounded bg-gray-200 sm:w-52" />
        <div className="h-4 w-16 rounded bg-gray-200" />
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
      {/* Product name and icon */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-gray-200" />
          <div className="h-3 w-1/2 rounded bg-gray-200" />
        </div>
      </div>

      {/* Today's price */}
      <div className="mb-4 space-y-2">
        <div className="h-3 w-20 rounded bg-gray-200" />
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

      {/* Bottom action */}
      <div className="mt-4 h-9 w-full rounded-lg bg-gray-200" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="animate-pulse">
      <HomeSkeleton />
    </div>
  );
}
