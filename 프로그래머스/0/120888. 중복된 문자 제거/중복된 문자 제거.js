function solution(my_string) {
    var answer = '';
    for (const string of my_string) {
        if (answer.includes(string)) {
            continue;
        }
        answer += string
    }
    return answer;
}