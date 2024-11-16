function num(n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 0;
    if (n % 2 === 0) return 1;
    for (let i = 3; i <= Math.sqrt(n); i+=2) {
        if (n % i === 0) return 1;
    }
    return 0;
}
function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n;i++) {
        answer += num(i)
    }
    return answer;
}