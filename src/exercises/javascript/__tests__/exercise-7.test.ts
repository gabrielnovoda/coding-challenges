import { exercise7 } from "../exercise-7";

type TResult = ReturnType<typeof exercise7>;

const normalizeResult = (result: TResult) => {
  return {
    ...result,
    truthy: result.truthy.sort(),
    falsy: result.falsy.sort(),
  };
};

describe("exercise7", () => {
  test("handles an empty array", () => {
    expect(exercise7([])).toEqual({
      truthy: [],
      falsy: [],
    });
  });

  test("handles an array with only truthy values", () => {
    expect(normalizeResult(exercise7([1, {}, [], "hello"]))).toEqual(
      normalizeResult({
        truthy: [1, "hello", {}, []],
        falsy: [],
      })
    );
  });

  test("handles an array with only falsy values", () => {
    expect(normalizeResult(exercise7([0, "", false, null, undefined]))).toEqual(
      normalizeResult({
        truthy: [],
        falsy: [0, "", undefined, false, null],
      })
    );
  });

  test("handles an array with mixed value types", () => {
    expect(
      normalizeResult(exercise7([0, 1, "false", "", null, {}, []]))
    ).toEqual(
      normalizeResult({
        truthy: [1, "false", {}, []],
        falsy: [0, "", null],
      })
    );
  });
});
