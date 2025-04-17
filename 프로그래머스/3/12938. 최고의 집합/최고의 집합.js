function solution(N, S) {
    // S가 N보다 작을 때 자연수 N개로 만들 수 없음
    if (S < N) {
        return [-1];
    }
    
    // 몫과 나머지를 구함
    const quotient = Math.floor(S / N);
    const remainder = S % N;

    const result = new Array(N).fill(quotient);
    
    // 나머지 만큼 1을 더함
    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }
    result.sort((a, b) => a - b);
    return result;
}
