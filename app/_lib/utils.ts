export function setPageArray(currentPage: number, totalPageCount: number) {
  const pageSet = new Set<number>();
  pageSet.add(1);
  pageSet.add(totalPageCount);
  if (currentPage > 1 && currentPage < totalPageCount) {
    pageSet.add(currentPage - 1);
    pageSet.add(currentPage);
    pageSet.add(currentPage + 1);
  }
  if (currentPage === 1 && totalPageCount !== 1) pageSet.add(2);
  if (currentPage === totalPageCount && totalPageCount !== 1)
    pageSet.add(totalPageCount - 1);

  return [...pageSet].sort((a, b) => a - b);
}

export function setContentArray(pageSet: number[]): string[] {
  return pageSet.flatMap((number, index) => {
    if (index === 0) return [number.toString()];

    const prev = pageSet[index - 1];
    const hasGap = number - prev > 1;

    return hasGap ? ["...", number.toString()] : [number.toString()];
  });
}
