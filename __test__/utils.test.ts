import { setPageArray, setContentArray } from "@/app/_lib/utils";

// used AI for this only since there's too many test case to consider

describe("setPageArray", () => {
  // --- your original tests (fixed) ---

  test("small page count", () => {
    expect(setPageArray(1, 2)).toEqual([1, 2]);
  });
  test("one page count", () => {
    expect(setPageArray(1, 1)).toEqual([1]);
  });
  test("mid small page count", () => {
    expect(setPageArray(2, 3)).toEqual([1, 2, 3]);
  });
  test("mid large page count", () => {
    expect(setPageArray(4, 10)).toEqual([1, 3, 4, 5, 10]);
  });
  test("mid mid page count", () => {
    expect(setPageArray(3, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  // --- boundary: first page ---
  test("first page of large set", () => {
    expect(setPageArray(1, 10)).toEqual([1, 2, 10]);
  });
  test("second page of large set", () => {
    expect(setPageArray(2, 10)).toEqual([1, 2, 3, 10]);
  });

  // --- boundary: last page ---
  test("last page of large set", () => {
    expect(setPageArray(10, 10)).toEqual([1, 9, 10]);
  });
  test("second to last page of large set", () => {
    expect(setPageArray(9, 10)).toEqual([1, 8, 9, 10]);
  });

  // --- always includes first and last ---
  test("always contains page 1", () => {
    expect(setPageArray(5, 20)).toContain(1);
  });
  test("always contains last page", () => {
    expect(setPageArray(5, 20)).toContain(20);
  });

  // --- always includes current page ---
  test("always contains current page", () => {
    const current = 7;
    expect(setPageArray(current, 20)).toContain(current);
  });

  // --- result is sorted ---
  test("result is in ascending order", () => {
    const result = setPageArray(5, 20);
    expect(result).toEqual([...result].sort((a, b) => a - b));
  });

  // --- no duplicates ---
  test("no duplicate pages", () => {
    const result = setPageArray(1, 5);
    expect(result.length).toBe(new Set(result).size);
  });
});

describe("setContentArray", () => {
  // --- basic cases ---
  test("single page", () => {
    expect(setContentArray([1])).toEqual(["1"]);
  });
  test("two consecutive pages", () => {
    expect(setContentArray([1, 2])).toEqual(["1", "2"]);
  });

  // --- gap insertion ---
  test("inserts ellipsis at start gap", () => {
    expect(setContentArray([1, 3, 4, 5, 10])).toEqual([
      "1",
      "...",
      "3",
      "4",
      "5",
      "...",
      "10",
    ]);
  });
  test("inserts ellipsis at end gap only", () => {
    expect(setContentArray([1, 2, 3, 10])).toEqual([
      "1",
      "2",
      "3",
      "...",
      "10",
    ]);
  });
  test("inserts ellipsis at start gap only", () => {
    expect(setContentArray([1, 9, 10])).toEqual(["1", "...", "9", "10"]);
  });
  test("inserts ellipsis at both ends", () => {
    expect(setContentArray([1, 4, 5, 6, 10])).toEqual([
      "1",
      "...",
      "4",
      "5",
      "6",
      "...",
      "10",
    ]);
  });

  // --- no ellipsis cases ---
  test("no ellipsis when all pages are consecutive", () => {
    expect(setContentArray([1, 2, 3, 4, 5])).toEqual(["1", "2", "3", "4", "5"]);
  });

  // --- invariants ---
  test("all numbers are converted to strings", () => {
    const result = setContentArray([1, 3, 4, 5, 10]);
    result.forEach((item) => expect(typeof item).toBe("string"));
  });
  test("never starts with ellipsis", () => {
    expect(setContentArray([1, 3, 4, 5, 10])[0]).not.toBe("...");
  });
  test("never ends with ellipsis", () => {
    const result = setContentArray([1, 3, 4, 5, 10]);
    expect(result[result.length - 1]).not.toBe("...");
  });
});
