"use client";

import { setContentArray, setPageArray } from "@/app/_lib/utils";

export default function Pagination({
  currentPage,
  totalPageCount,
}: {
  currentPage: number;
  totalPageCount: number;
}) {
  const pageSet = setPageArray(currentPage, totalPageCount);
  const paginationString = setContentArray(pageSet);

  return (
    <>
      <div>
        Current Page {currentPage}; Total Pages {totalPageCount}
      </div>
      <div></div>
    </>
  );
}
