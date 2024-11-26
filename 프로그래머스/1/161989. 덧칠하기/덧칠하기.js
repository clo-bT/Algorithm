function solution(n, m, section) {
    let answer = 0;
    let current = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] > current) {
            answer++;
            current = section[i] + m - 1;
        }
    }
    
    return answer;
}
