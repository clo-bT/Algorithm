function num(n) {
    if (n === 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3;i<=Math.sqrt(n);i+=2){
        if(n % i === 0) return false;
    }
    return true;
}
function solution(n) {
    var answer = [];
    for (let i = 1;i<=n;i++) {
        if (n % i === 0 && num(i)){
            answer.push(i)
        }
    }
    return answer;
}