import Link from "next/link";
import React from "react";
import { ICategory } from "@/types/types";
async function Navber() {
  const res = await fetch(
    `https://${process.env.ATL_API}/api/bazardor/categories`,
  );
  const categories: ICategory[] = await res.json();

  return (
    <div className="container mx-0 flex justify-start items-center">
      <ul className="flex flex-row gap-4 justify-center items-center py-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/category/${category.slug}`}
              className=" hover:text-red-500"
            >
              <div className="flex font-bold flex-row gap-2 mr-4 justify-start items-center">
                <p>{category.icon}</p>
                <p className="text-black">{category.nameBn}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navber;
