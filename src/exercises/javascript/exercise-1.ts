/**
 * Implement a function that takes a string of space separated numbers,
 * and returns a string with the highest and lowest number separated by space.
 *
 * Input: "1 2 -3 41 6"
 * Output: "16 -3"
 */
// 
export const exercise1 = (input: string): string => {
    // let min = Number.MAX_VALUE;
    // let max = Number.MIN_VALUE; // why this didn't work

    let min = Infinity;
    let max = -Infinity;

    const numberList = input.trim().split(" ").map(Number);
    console.log("NUMBERLIST =>>>>>>>", numberList);
    for (const num of numberList) {
        if (num > max) {
            max = num;
        }

        if (num < min) {
            min = num;
        }
    }
    return `${max} ${min}`;
};
