import { exercise8 } from "../exercise-8";

describe("exercise8", () => {
  test("handles an array with one promise", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(10), 500)
    );

    const result = await exercise8([promise1]);
    expect(result).toEqual(10);
  });

  test("handles an array with multiple promises", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(10), 500)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(20), 300)
    );
    const promise3 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(30), 1000)
    );

    const result = await exercise8([promise1, promise2, promise3]);
    expect(result).toEqual(20);
  });

  test("handles an array with promises resolving at the same time", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(10), 300)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(20), 300)
    );

    const result = await exercise8([promise1, promise2]);
    expect(result).toEqual(10);
  });

  test("handles promises with different types", async () => {
    const promise1 = new Promise<string>((resolve) =>
      setTimeout(() => resolve("first"), 500)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(42), 300)
    );

    const result = await exercise8([promise1, promise2]);
    expect(result).toEqual(42);
  });
});
