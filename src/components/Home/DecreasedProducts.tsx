import ProductCard from "@/components/shared/ProductCard";
import type { IProduct } from "@/types/types";
import React from "react";

async function DecreasedProducts() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data: IProduct[] = await res.json();
  const increasedProducts = data.filter(
    (product) => product.change.dir === "down",
  );

  const sortedIncreasedProducts = increasedProducts
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="container mx-auto my-10 space-y-5">
      <div className="space-x-2 text-center md:text-start">
        <span className="text-green-600">▼</span>
        <span className="text-lg font-bold">আজ দাম কমেছে</span>
      </div>
      <div className="grid grid-cols-1  rounded-lg md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortedIncreasedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default DecreasedProducts;
