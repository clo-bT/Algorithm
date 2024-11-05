function solution(numbers) {
    const string = numbers.map(String);
    
    string.sort((a, b) => (b + a) - (a + b));
    const answer = string.join('');
    
    return answer[0] === '0' ? '0' : answer;
}