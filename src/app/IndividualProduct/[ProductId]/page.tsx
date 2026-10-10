import React from "react";
import { IProduct } from "@/types/types";
import { unitNames } from "@/lib/units";
import { notFound } from "next/navigation";

async function ProductDescription({
  params,
}: {
  params: { ProductId: number | string };
}) {
  const { ProductId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${ProductId}`,
  );
  const product: IProduct = await res.json();

  if (!res.ok || !product.id) {
    notFound();
  }
  const maxPrice = Math.max(...product.markets.map((market) => market.max));
  const minPrice = Math.min(...product.markets.map((market) => market.min));

  return (
    <section className="container mx-auto my-5 md:my-10">
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        {/* firstbox */}
        <div className=" w-full flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-18.5 w-18.5 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-4xl">
              {product.image}
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {product.nameBn}
              </h2>

              <p className="text-sm text-gray-500">
                প্রতি কেজি · চাল
                {`প্রতি ${unitNames[product.unit]} · ${product.categoryNameBn}`}
              </p>

              <p className="mt-2 text-xs text-gray-700 sm:text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold text-black">
                  {product.change.dir === "up"
                    ? "বেড়েছে"
                    : product.change.dir === "down"
                      ? "কমেছে"
                      : "অপরিবর্তিত"}
                </span>
                {Math.abs(product.today - product.yesterday) === 0
                  ? ""
                  : ` · ${Math.abs(product.today - product.yesterday)} টাকা`}
              </p>
            </div>
          </div>

          <div className="flex min-w-27 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#f0f5f0] px-3 py-4">
            <span className="text-xs text-gray-500">আজকের দাম</span>

            <strong className="text-3xl font-bold text-gray-900">
              {product.today}
            </strong>

            <span className="text-sm text-gray-500">
              টাকা / {unitNames[product.unit]}
            </span>

            {product.change.dir === "up" && (
              <div className="mt-1 flex items-center gap-1 rounded-full bg-[#fceeee] px-2 py-1 text-xs font-semibold text-[#dc4444]">
                <span>▲</span>
                <span> {`${product.change.pct.toLocaleString("bn-BD")}%`}</span>
              </div>
            )}

            {product.change.dir === "down" && (
              <div className="mt-1  flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-500">
                <span>▼</span>
                <span>
                  {" "}
                  {`${Math.abs(product.change.pct).toLocaleString("bn-BD")}%`}
                </span>
              </div>
            )}

            {product.change.dir === "flat" && (
              <div className="mt-1 flex items-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-[#4d554f]">
                <span>-</span>
                <span> {`0.0%`}</span>
              </div>
            )}
          </div>
        </div>

        {/* secondboxwithTable */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white/70 p-4 sm:p-5">
          <h2 className="mb-4 text-base font-bold text-gray-800">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-xl font-bold text-green-600">
                {minPrice.toLocaleString("bn-BD")}{" "}
                <span className="text-sm font-normal">টাকা</span>
              </p>
              <p className="text-xs text-gray-600">সবচেয়ে কম দামের বাজার</p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-xl font-bold text-red-500">
                {maxPrice.toLocaleString("bn-BD")}{" "}
                <span className="text-sm font-normal">টাকা</span>
              </p>
              <p className="text-xs text-gray-600">সবচেয়ে বেশি দামের বাজার</p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-1 text-xl font-bold text-green-600">
                {((maxPrice + minPrice) / 2).toLocaleString("bn-BD")}{" "}
                <span className="text-sm font-normal">টাকা</span>
              </p>
              <p className="text-xs text-gray-600">
                প্রতি কেজি-এর হিসাবে
                {`প্রতি ${unitNames[product.unit]}-এর হিসাবে`}
              </p>
            </div>
          </div>

          <h2 className="mb-3 mt-6 text-base font-bold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-150 border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="px-4 py-3 font-semibold">বাজার</th>
                  <th className="px-4 py-3 font-semibold">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-semibold">
                    সর্বনিম্ন
                  </th>
                  <th className="px-4 py-3 text-right font-semibold">
                    সর্বোচ্চ
                  </th>
                  <th className="px-4 py-3 text-right font-semibold">গড়</th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((item, index) => (
                  <tr
                    key={item.market}
                    className={`border-b border-gray-300 last:border-b-0 ${
                      index % 2 === 1 ? "bg-[#f0f5f0]" : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-4 py-3 text-gray-800">
                      {item.market}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-600">
                      {item.division}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-gray-600">
                      {item.min.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-gray-600">
                      {item.max.toLocaleString("bn-BD")} টাকা
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-gray-800">
                      {((item.min + item.max) / 2).toLocaleString("bn-BD")} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDescription;
