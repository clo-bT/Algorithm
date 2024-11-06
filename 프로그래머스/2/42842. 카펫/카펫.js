function solution(brown, yellow) {
    const total = brown + yellow;
    for (let i = 3; i <= Math.sqrt(total); i++) {
        if (total % i === 0) {
            const a = total / i;
            if ((a - 2) * (i - 2) === yellow) {
                return [a, i];
            }
        }
    }
}
