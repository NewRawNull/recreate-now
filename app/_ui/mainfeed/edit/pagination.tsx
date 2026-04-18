"use client";

import { setContentArray, setPageArray } from "@/app/_lib/utils";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination({
  currentPage,
  totalPageCount,
}: {
  currentPage: number;
  totalPageCount: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page: number = Number(searchParams.get("page")) || 1;

  const pageSet = setPageArray(currentPage, totalPageCount);
  const paginationString = setContentArray(pageSet);

  return (
    <div className="flex justify-center gap-6">
      {currentPage !== 1 ? (
        <Link
          href={`${pathname}?${new URLSearchParams({ page: (currentPage - 1).toString() })}`}
          className="flex flex-row justify-center items-center bg-white text-gray-800 hover:bg-gray-800 hover:text-white duration-200 p-2 outline outline-gray-500 leading-none rounded"
        >
          <FaAngleLeft size={20} />
        </Link>
      ) : null}
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
      {currentPage !== totalPageCount ? (
        <Link
          href={`${pathname}?${new URLSearchParams({ page: (currentPage + 1).toString() })}`}
          className="flex flex-row justify-center items-center bg-white text-gray-800 hover:bg-gray-800 hover:text-white duration-200 p-2 outline outline-gray-500 leading-none rounded"
        >
          <FaAngleRight size={20} />
        </Link>
      ) : null}
    </div>
  );
}
