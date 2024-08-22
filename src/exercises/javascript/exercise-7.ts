/**
 * Implement a function that takes an array and groups the values into
 * two arrays: one with truthy values and the other with falsy values.
 *
 * Note: Use `reduce` array method.
 *
 * Input: [0, "hello", false, 42, "", null]
 * Output: {"truthy": ["hello", 42], "falsy": [0, false, "", null]}
 */
export const exercise7 = (
  input: TValue[]
): { truthy: TValue[]; falsy: TValue[] } => {};

type TValue = string | number | object | null | undefined | boolean;
