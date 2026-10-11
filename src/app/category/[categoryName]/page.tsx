import React from "react";
import { IProduct } from "@/types/types";
import SortWithPrice from "@/components/CateGory/SortWithPrice";
import { notFound } from "next/navigation";

async function CategoryProducts({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = await params;
  const res = await fetch(
    `https://${process.env.ATL_API}/api/bazardor/products?category=${categoryName}`,
  );
  const data: IProduct[] = await res.json();

  if (!Array.isArray(data) || data.length === 0 || !data[0]?.id) {
    notFound();
  }

  return (
    <div>
      <div className="container mx-auto my-3 md:my-10">
        {/* firstBox */}
        <div className="flex justify-center md:justify-start items-center gap-3 rounded-2xl border border-gray-200 bg-white/70 px-5 py-5 mb-2 md:mb-4">
          <span className="text-3xl">{data[0]?.image}</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {data[0]?.nameBn}
            </h2>
            <p className="text-sm text-gray-500">
              {`${data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন`}
            </p>
          </div>
        </div>
        <SortWithPrice products={data}></SortWithPrice>
      </div>
    </div>
  );
}

export default CategoryProducts;
