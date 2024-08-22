import { exercise2 } from "../exercise-2";

describe("exercise2", () => {
  test("handles numbers with unique digits", () => {
    expect(exercise2(145263)).toEqual(654321);
  });

  test("handles single digit numbers", () => {
    expect(exercise2(7)).toEqual(7);
  });

  test("handles already sorted digits", () => {
    expect(exercise2(987)).toEqual(987);
  });

  test("handles numbers with repeated digits", () => {
    expect(exercise2(112233)).toEqual(332211);
  });

  test("handles zero as input", () => {
    expect(exercise2(0)).toEqual(0);
  });
});
