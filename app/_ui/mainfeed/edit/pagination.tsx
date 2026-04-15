"use client";

export default function Pagination({
  currentPage,
  totalPageCount,
}: {
  currentPage: number;
  totalPageCount: number;
}) {
  return (
    <div>
      Current Page {currentPage}; Total Pages {totalPageCount}
    </div>
  );
}
