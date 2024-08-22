import { exercise10 } from "../exercise-10";

describe("exercise10", () => {
  test("executes asynchronous functions in sequence, passing results between them", async () => {
    const asyncFunc1 = (x: number) => Promise.resolve(x + 1);
    const asyncFunc2 = (x: number) => Promise.resolve(x * 2);
    const asyncFunc3 = (x: number) => Promise.resolve(x - 3);

    const result = await exercise10([asyncFunc1, asyncFunc2, asyncFunc3]);
    expect(result).toBe((0 + 1) * 2 - 3);
  });

  test("handles an error in one of the functions, passing 0 to the next function", async () => {
    const asyncFunc1 = (x: number) => Promise.resolve(x + 1);
    const asyncFunc2 = (_x: number) => Promise.reject("error");
    const asyncFunc3 = (x: number) => Promise.resolve(x * 2);

    const result = await exercise10([asyncFunc1, asyncFunc2, asyncFunc3]);
    expect(result).toBe(0 * 2);
  });

  test("returns 0 if the first function throws an error", async () => {
    const asyncFunc1 = (_x: number) => Promise.reject("error");
    const asyncFunc2 = (x: number) => Promise.resolve(x * 2);

    const result = await exercise10([asyncFunc1, asyncFunc2]);
    expect(result).toBe(0 * 2);
  });

  test("handles an empty array of functions", async () => {
    const result = await exercise10([]);
    expect(result).toBe(0);
  });

  test("processes functions that take different time to resolve", async () => {
    const asyncFunc1 = (x: number) =>
      new Promise<number>((resolve) => setTimeout(() => resolve(x + 1), 300));
    const asyncFunc2 = (x: number) =>
      new Promise<number>((resolve) => setTimeout(() => resolve(x * 2), 100));
    const asyncFunc3 = (x: number) =>
      new Promise<number>((resolve) => setTimeout(() => resolve(x - 3), 200));

    const result = await exercise10([asyncFunc1, asyncFunc2, asyncFunc3]);
    expect(result).toBe((0 + 1) * 2 - 3);
  });
});
