import Link from "next/link";
import React from "react";
import { ICategory } from "@/types/types";

async function Navber() {
  const res = await fetch(
    `https://${process.env.ATL_API}/api/bazardor/categories`,
  );

  const categories: ICategory[] = await res.json();

  return (
    <nav className="w-full border-t border-gray-200">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <ul className="flex w-max min-w-full flex-row items-center justify-start gap-2 py-3 sm:gap-4 md:flex-wrap md:justify-start md:gap-x-6">
          {categories.map((category) => (
            <li key={category.id} className="shrink-0">
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-bold text-gray-800 transition hover:bg-green-50 hover:text-green-700 sm:text-base"
              >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navber;
