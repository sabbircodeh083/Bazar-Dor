import ProductCard from "@/components/shared/ProductCard";
import type { IProduct } from "@/types/types";
import React from "react";

async function AllProducts() {
  const res = await fetch(
    `https://${process.env.ATL_API}/api/bazardor/products`,
  );
  const data: IProduct[] = await res.json();

  return (
    <div className="container mx-auto my-10 space-y-5" id="all-products">
      <div className="space-x-2 text-center md:text-start">
        <span className="text-lg font-bold">সব পণ্য</span>
        <br />
        <span className="text-[#788079] text-[13px]">{`মোট ${data.length}টি পণ্য দেখানো হচ্ছে`}</span>
      </div>
      <div className="grid grid-cols-1  rounded-lg md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
