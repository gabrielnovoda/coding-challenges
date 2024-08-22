import { exercise11 } from "../exercise-11";

describe("exercise11", () => {
  test("calculates the correct number of days between two dates", () => {
    expect(exercise11("2024-08-14", "2024-08-20")).toBe(6);
    expect(exercise11("2024-12-25", "2025-01-01")).toBe(7);
  });

  test("handles dates in reverse order", () => {
    expect(exercise11("2024-08-20", "2024-08-14")).toBe(6);
  });

  test("handles the same date as input", () => {
    expect(exercise11("2024-08-14", "2024-08-14")).toBe(0);
  });
});
