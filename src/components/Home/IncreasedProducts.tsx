import ProductCard from "@/components/shared/ProductCard";
import type { IProduct } from "@/types/types";
import React from "react";

async function IncreasedProducts() {
  const res = await fetch(
    `https://${process.env.ATL_API}/api/bazardor/products`,
  );
  const data: IProduct[] = await res.json();
  const increasedProducts = data.filter(
    (product) => product.change.dir === "up",
  );

  const sortedIncreasedProducts = increasedProducts
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto my-10 space-y-5">
      <div className="space-x-2 text-center md:text-start">
        <span className="text-red-600">▲</span>
        <span className="text-lg font-bold">আজ দাম বেড়েছে</span>
      </div>
      <div className="grid grid-cols-1  rounded-lg md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortedIncreasedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default IncreasedProducts;
