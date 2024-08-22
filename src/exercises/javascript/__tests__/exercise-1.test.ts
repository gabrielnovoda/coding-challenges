import { exercise1 } from "../exercise-1";

describe("exercise1", () => {
  test("handles positive numbers correctly", () => {
    expect(exercise1("10 20 30 40 5")).toEqual("40 5");
  });

  test("handles negative numbers correctly", () => {
    expect(exercise1("-10 -20 -30 -40 -5")).toEqual("-5 -40");
  });

  test("handles a mix of positive and negative numbers", () => {
    expect(exercise1("3 9 -2 15 -10")).toEqual("15 -10");
  });

  test("works with single number", () => {
    expect(exercise1("42")).toEqual("42 42");
  });

  test("handles numbers with leading/trailing spaces", () => {
    expect(exercise1("   4  5  1  9   -3  ")).toEqual("9 -3");
  });
});
