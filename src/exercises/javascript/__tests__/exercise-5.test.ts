import { exercise5 } from "../exercise-5";

describe("exercise5", () => {
  test("handles an empty string as input", () => {
    expect(exercise5("")).toEqual("");
  });

  test("handles a string with one word correctly", () => {
    expect(exercise5("word1")).toEqual("word1");
  });

  test("sorts the words in the string according to the embedded numbers", () => {
    expect(exercise5("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
  });

  test("sorts the words with the same prefix but different numbers", () => {
    expect(exercise5("alpha1 alpha3 alpha2")).toEqual("alpha1 alpha2 alpha3");
  });

  test("sorts the words when numbers are in reverse order", () => {
    expect(exercise5("4word 3this 2is 1sentence")).toEqual(
      "1sentence 2is 3this 4word"
    );
  });
});
