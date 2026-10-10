import React from "react";
import Marquee from "react-fast-marquee";
import { IProduct } from "@/types/types";
import { unitNames } from "@/lib/units";
// import "react-marquee-text/dist/style.css";

export default async function MarqueeComponent() {
  const res = await fetch(
    `https://${process.env.ATL_API}/api/bazardor/products`,
  );
  const products: IProduct[] = await res.json();

  return (
    <section className=" w-full border-y border-gray-200">
      <div className="flex bg-white ">
        <Marquee direction="left" className="py-1 rounded-e-lg" speed={80}>
          {products.map((product) => (
            <span key={product.id} className=" text-black py-1">
              <span className="ml-5 mr-2 text-center">
                {product.categoryIcon}
              </span>
              <span className="text-balck font-bold">{product.nameBn}</span>
              <span>{` ${product.today.toLocaleString("bn-BD")}টাকা/${unitNames[product.unit]}`}</span>
              <span>
                {` `}
                {product.change.dir === "up" && (
                  <>
                    <i className="fa-solid fa-caret-up text-red-500 mx-1"></i>
                    <span className="text-red-500 font-bold">
                      {`${product.change.pct.toLocaleString("bn-BD")}%`}
                    </span>
                  </>
                )}

                {product.change.dir === "down" && (
                  <>
                    <i className="fa-solid fa-caret-down text-green-500 mx-1"></i>
                    <span className="text-green-500 font-bold">
                      {`${Math.abs(product.change.pct).toLocaleString("bn-BD")}%`}
                    </span>
                  </>
                )}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
