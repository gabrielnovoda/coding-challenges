import { exercise9 } from "../exercise-9";

describe("exercise9", () => {
  test("handles a synchronous function with 2 arguments", async () => {
    const syncFn = (x: number, y: number) => x + y;
    const asyncFn = exercise9(syncFn, 500);

    const promise = asyncFn(5, 10);

    expect(promise instanceof Promise).toBeTruthy();
    expect(await promise).toEqual(15);
  });

  test("handles a synchronous function if delay is 0", async () => {
    const syncFn = (x: number) => x * 2;
    const asyncFn = exercise9(syncFn, 0);

    const promise = asyncFn(10);

    expect(promise instanceof Promise).toBeTruthy();
    expect(await promise).toEqual(20);
  });

  test("handles a synchronous function with no arguments", async () => {
    const syncFn = () => "Hello, World!";
    const asyncFn = exercise9(syncFn, 300);

    const promise = asyncFn();

    expect(promise instanceof Promise).toBeTruthy();
    expect(await promise).toEqual("Hello, World!");
  });

  test("handles a synchronous function with different types of arguments", async () => {
    const syncFn = (name: string, age: number) => `${name} is ${age} years old`;
    const asyncFn = exercise9(syncFn, 100);

    const promise = asyncFn("Alice", 30);

    expect(promise instanceof Promise).toBeTruthy();
    expect(await promise).toEqual("Alice is 30 years old");
  });
});
