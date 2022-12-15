import {
    detectNegativeNumbersAndExtractMaxProductSubarray,
    splitArrayIntoChunksByValue
} from "./problems";

test('detectNegativeNumbersAndExtractMaxProductSubarray', () => {
    const fn = detectNegativeNumbersAndExtractMaxProductSubarray;
    expect(fn([1, 5, -3, -1, -2])).toEqual([1, 5, -3, -1]);
    expect(fn([-2, 5, -3, -1])).toEqual([-2, 5, -3]);
    expect(fn([-2, 5, -1, -1])).toEqual([-2, 5, -1]);
    expect(fn([1, 5, -3, -1])).toEqual([1, 5, -3, -1]);
    expect(fn([-2, 1, 5, -1, -3])).toEqual([1, 5, -1, -3]);
    expect(fn([2, 3, 6, -1])).toEqual([2, 3, 6]);
});

test('maximum product subarray', () => {

    const arr = [2, 3, 6, -1, 0, 8, 3, 0, 5, 7];
    // 1. Look for 0 value and split the array into subarrays.
    // 2. Find the maximum product of each subarray.
    // 2. Check if subarray has an even or odd no of negative numbers.
    //    If even, let it be, if odd, remove the first negative number.
    // 3. Compare the maximum product of each subarray and return the maximum.

    let result = splitArrayIntoChunksByValue(arr, 0);

    expect(result[0]).toEqual([2, 3, 6, -1]);
    expect(result[1]).toEqual([8, 3]);
    expect(result[2]).toEqual([5, 7]);

    result = result.map((subarray) => {
        return detectNegativeNumbersAndExtractMaxProductSubarray(subarray);
    });

    expect(result[0]).toEqual([2, 3, 6]);
    expect(result[1]).toEqual([8, 3]);
    expect(result[2]).toEqual([5, 7]);

    const b = result.map((subArray) => {
        return subArray.reduce((acc, value) => {
            return acc * value;
        }, 1);
    });
    expect(b[0]).toEqual(36);
    expect(b[1]).toEqual(24);
    expect(b[2]).toEqual(35);

    const c = Math.max(...b);

    expect(c).toEqual(36);
});