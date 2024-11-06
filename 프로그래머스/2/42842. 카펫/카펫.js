function solution(brown, yellow) {
    let answer = [];
    const amount = brown + yellow;
    const result = yaksoo(amount);
    if (result.length == 1) {
        return result[0];
    }
    result.forEach(([a, b]) => {
            if ((a-2) * (b-2) == yellow) {
                answer.push([a,b])
            }
        })
    return answer[0];
}
function yaksoo(num) {
    let arr = [];
    for (let i = 3; i <= Math.sqrt(num) ; i++) {
        if (num % i === 0) {
            arr.push([num/i, i]);
        }
    }
    return arr;
}