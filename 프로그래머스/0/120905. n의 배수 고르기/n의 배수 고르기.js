function solution(n, numlist) {
    var answer = [];
    numlist.forEach((e) => {
        if (e % n === 0) {
            answer.push(e)
        }
    })
    return answer;
}