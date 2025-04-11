function calculate(sequence) {
    const pulse0 = sequence.map((value, i) => value * ((-1) ** i));
    const pulse1 = sequence.map((value, i) => value * ((-1) ** (i + 1)));

    return [pulse0, pulse1];
}

function solution(sequence) {
    const [pulse0, pulse1] = calculate(sequence);

    const maxSubarray = (arr) => {
        let maxSum = arr[0], currSum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            currSum = Math.max(arr[i], currSum + arr[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    };

    const max0 = maxSubarray(pulse0);
    const max1 = maxSubarray(pulse1);

    return Math.max(max0, max1);
}
