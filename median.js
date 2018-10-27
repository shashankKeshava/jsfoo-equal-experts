/*
	2: Median
 	A median is a numerical value separating the upper half of a sorted array of numbers from the lower half. In a list where there are an odd number of entities, the median is the number found in the middle of the array. If the array contains an even number of entities, then there is no single middle value, instead the median becomes the average of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of the numbers from the lower half and find the median.

	Example:
  median([1, 2, 3, 4, 5]) == 3
*/

export const median = data => {
    const temp = data.sort((a, b) => a - b);
    const len = temp.length;
    if (len % 2 == 0) {
        const mid = len / 2;
        return (temp[mid - 1] + temp[mid]) / 2;
    } else {
        const mid = Math.ceil(len / 2);
        return temp[mid - 1];
    }
};

// median([3, 6, 20, 99, 10, 15]);
