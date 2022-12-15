export function splitArrayIntoChunksByValue(arr: number[], splitValue: number): number[][] {
    let zeroIndex = 0;

    return arr.reduce((acc, value) => {

        if (!acc[zeroIndex]) {
            acc.push([]);
        }

        if (value !== splitValue) {
            acc[zeroIndex].push(value);
        } else {
            acc.push([]);
            zeroIndex++;
        }
        return acc;

    }, [] as number[][]);

}

export function detectNegativeNumbersAndExtractMaxProductSubarray(arr: number[]): number[] {
    let negativeNumbersCount = 0;
    arr.forEach((value) => {
        if (value < 0) {
            negativeNumbersCount++;
        }
    });

    if (negativeNumbersCount % 2 === 0) {
        return arr;
    }

    // Find all negative numbers.
    const negativeNumbers = arr.filter((value) => value < 0);
    // Sort ascending.
    negativeNumbers.sort();

    // Find the smallest negative number and remove it.

    // Check if the smallest value is the first or last element.
    for (let i = 0; i < arr.length; i++) {
        const smallestNegativeNumber = negativeNumbers[i];
        if (smallestNegativeNumber === arr[0]) {
            arr.shift();
            break;
        } else if (smallestNegativeNumber === arr[arr.length - 1]) {
            arr.pop();
            break;
        }
    }

    return arr;

}