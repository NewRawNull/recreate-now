"use client";

import { setContentArray, setPageArray } from "@/app/_lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPageCount,
}: {
  currentPage: number;
  totalPageCount: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page: number = Number(searchParams.get("page")) || 1;

  const pageSet = setPageArray(currentPage, totalPageCount);
  const paginationString = setContentArray(pageSet);

  return (
    <div className="flex justify-center">
      <div className="flex flex-row rounded outline outline-gray-500 overflow-hidden">
        {paginationString.map((pageItem, idx) => {
          if (pageItem === "...") {
            return (
              <div
                key={idx}
                className="p-4 border-r border-gray-500 leading-none"
              >
                ...
              </div>
            );
          }
          const newParams = new URLSearchParams({ page: pageItem });
          if (idx !== paginationString.length - 1) {
            return (
              <Link
                key={idx}
                href={`${pathname}?${newParams.toString()}`}
                className={`p-4 border-r border-gray-500 leading-none ${pageItem === page.toString() ? "bg-gray-800 text-white underlined font-bold" : "bg-white text-gray-800 hover:bg-gray-800 hover:text-white duration-200"}`}
              >
                {pageItem}
              </Link>
            );
          } else {
            return (
              <Link
                key={idx}
                href={`${pathname}?${newParams.toString()}`}
                className={`p-4 leading-none ${pageItem === page.toString() ? "bg-gray-800 text-white underlined font-bold" : "bg-white text-gray-800 hover:bg-gray-800 hover:text-white duration-200"}`}
              >
                {pageItem}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
