function solution(numbers, k) {
    let answer = 0, tmp = 0;
    const l = numbers.length;
    for (let i = 0; i < k; i++) {
        answer = numbers[tmp % l]
        tmp += 2
    }
    return answer;
}