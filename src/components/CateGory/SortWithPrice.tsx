"use client";

import React, { useState } from "react";
import { IProduct } from "@/types/types";
import ProductCard from "@/components/shared/ProductCard";

function SortWithPrice({ products }: { products: IProduct[] }) {
  const [sortedProducts, setSortedProducts] = useState(products);
  function handleSort(indicator: string) {
    if (indicator === "price-low") {
      const newProductList = sortedProducts.sort((a, b) => a.today - b.today);
      setSortedProducts([...newProductList]);
    } else if (indicator === "price-high") {
      const newProductList = sortedProducts.sort((a, b) => b.today - a.today);
      setSortedProducts([...newProductList]);
    }
  }
  return (
    <div className="containre mx-1 md:mx-auto">
      {/* dropdown */}
      <div className="flex items-center justify-end gap-3 rounded-2xl border border-gray-200 bg-white/70 px-5 py-4 mb-2 md:mb-4">
        <span className="text-sm text-gray-500">সাজান</span>

        <select
          className="select select-sm rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="default">ডিফল্ট</option>
          <option value="price-low">দাম কম থেকে বেশি</option>
          <option value="price-high">দাম বেশি থেকে কম</option>
        </select>
      </div>

      {/* ponnoTitle */}
      <div>
        <p className="text-sm text-center md:text-start text-gray-500">
          {`মোট ${products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default SortWithPrice;
