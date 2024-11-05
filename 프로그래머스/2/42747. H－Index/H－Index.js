function solution(citations) {
    var answer = citations.length;
    while (answer > 0) {
        let tmp = 0;
        
        citations.forEach(val => {
            if (val >= answer) tmp ++;
        })
        if (tmp >= answer) {
            return answer;
        } else {
            answer --;
        }
    }
    return 0;
}