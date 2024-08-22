/**
 * Create a function that accepts an array of promises and returns
 * the value of the first promise that resolves.
 *
 * Note: None of the promises will reject with an error.
 */
export const exercise8 = <T extends Promise<any>>(
  input: T[]
): Promise<Awaited<T>> => {};
