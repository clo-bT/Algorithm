function solution(scores) {
    const [a, b] = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (a < scores[i][0] && b < scores[i][1]) {
            return -1;
        }
    }
    
    scores.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    });

    let maxB = 0;
    const valid = [];

    for (const [a, b] of scores) {
        if (b >= maxB) {
            valid.push([a, b]);
            maxB = Math.max(maxB, b);
        }
    }

    const sum = valid.map(v => v[0] + v[1]);
    const myScore = a + b;

    // 내 점수보다 높은 사람 수 계산
    let rank = 1;
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] > myScore) {
            rank++;
        }
    }
    return rank;
}
