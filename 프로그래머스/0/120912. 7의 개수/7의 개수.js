function solution(array) {
    let answer = 0;
    const num = array.join('')
    for (let i = 0;i<num.length;i++) {
        if (num[i] === '7') {
            answer ++;
        }
    }
    return answer;
}