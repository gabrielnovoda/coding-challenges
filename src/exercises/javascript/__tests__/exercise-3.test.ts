import { exercise3 } from "../exercise-3";

describe("exercise3", () => {
  test("handles an object with string values", () => {
    expect(exercise3({ id: "123", status: "active" })).toEqual({
      "123": "id",
      active: "status",
    });
  });

  test("handles an object with numeric values", () => {
    expect(exercise3({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("handles an object with mixed numeric and string values", () => {
    expect(exercise3({ key1: "value1", key2: 100 })).toEqual({
      value1: "key1",
      "100": "key2",
    });
  });

  test("handles an empty object", () => {
    expect(exercise3({})).toEqual({});
  });
});
