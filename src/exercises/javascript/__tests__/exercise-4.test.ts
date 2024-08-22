import { exercise4 } from "../exercise-4";

describe("exercise4", () => {
  test("handles an empty array", () => {
    expect(exercise4([])).toEqual({});
  });

  test("handles an array with only one data type", () => {
    expect(exercise4([1, 2, 3, 4])).toEqual({
      number: [1, 2, 3, 4],
    });
  });

  test("handles an array with null and undefined values", () => {
    expect(exercise4([null, undefined])).toEqual({
      object: [null],
      undefined: [undefined],
    });
  });

  test("handles an array with mixed primitive and object types", () => {
    expect(exercise4([1, "string", { key: "value" }, true])).toEqual({
      number: [1],
      string: ["string"],
      boolean: [true],
      object: [{ key: "value" }],
    });
  });
});
