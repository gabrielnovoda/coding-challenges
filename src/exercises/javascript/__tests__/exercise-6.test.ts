import { exercise6 } from "../exercise-6";

describe("exercise6", () => {
  test("handles an empy array", () => {
    expect(exercise6([])).toEqual([]);
  });

  test("handles an array with only one element", () => {
    expect(exercise6([42])).toEqual([42]);
  });

  test("handles an array with no duplicates correctly", () => {
    expect(exercise6([0, "hello", 42, 8]).sort()).toEqual(
      [8, 0, "hello", 42].sort()
    );
  });

  test("handles an array with duplicated numbers", () => {
    expect(exercise6([0, "hello", 42, 8, 8]).sort()).toEqual(
      [0, "hello", 42, 8].sort()
    );
  });

  test("handles an array with duplicated, prioritizing numbers over equivalent strings", () => {
    expect(exercise6([0, "hello", 2, 42, "2", 4, "6", 6, 8, 6]).sort()).toEqual(
      [0, "hello", 2, 42, 4, 6, 8].sort()
    );
  });
});
