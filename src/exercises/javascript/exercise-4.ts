/**
 * Create a function that takes an array of mixed data types and returns an object where the keys
 * are the data types (e.g., 'number', 'string', etc.), and the values are arrays of elements
 * from the input array that match each data type.
 *
 * Note: Use the `reduce` array method.
 *
 * Input: [1, "2", 3, "true", false, 42, "hello"]
 * Output: {number: [1, 3, 42], string: ["2", "true", "hello"], boolean: [false]}
 */
export const exercise4 = (input: any[]): Partial<{ [K in TKey]: any[] }> => {};

const type = typeof ({} as any);
type TKey = typeof type;
