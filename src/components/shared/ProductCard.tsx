import React from "react";
import { IProduct } from "@/types/types";
import { unitNames } from "@/lib/units";
import Link from "next/link";

function ProctedCard({ product }: { product: IProduct }) {
  return (
    <Link
      href={`/IndividualProduct/${product.id}`}
      className="cursor-pointer hover:border hover:border-green-500 rounded-2xl"
    >
      <div className="w-full  rounded-2xl border border-[#dfe8e1] bg-[#fbfdfc] p-4">
        {/* Product Information */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
            {product.image}
          </div>

          <div>
            <h3 className="text-base font-bold text-[#202923]">
              {product.nameBn}
            </h3>
            <p className="text-xs text-[#858b86]">{`প্রতি ${unitNames[product.unit]}`}</p>
          </div>
        </div>

        {/* Price and Change */}
        <div className="mt-3 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-[#858b86]">আজকের দাম</p>
            <p className="text-[#202923]">
              <span className="text-base text-[18px] font-bold ">{`${product.today} `}</span>

              <span className="font-normal text-[13px]">টাকা</span>
            </p>
          </div>

          {product.change.dir === "up" && (
            <div className="mb-1 flex items-center gap-1 rounded-full bg-[#fceeee] px-2 py-1 text-xs font-semibold text-[#dc4444]">
              <span>▲</span>
              <span> {`${product.change.pct.toLocaleString("bn-BD")}%`}</span>
            </div>
          )}

          {product.change.dir === "down" && (
            <div className="mb-1 flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-500">
              <span>▼</span>
              <span>
                {" "}
                {`${Math.abs(product.change.pct).toLocaleString("bn-BD")}%`}
              </span>
            </div>
          )}

          {product.change.dir === "flat" && (
            <div className="mb-1 flex items-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-[#4d554f]">
              <span>-</span>
              <span> {`0.0%`}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProctedCard;
