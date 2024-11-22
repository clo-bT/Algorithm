function solution(my_string) {
    const cal = my_string.split(' ');
    var answer = Number(cal[0]);
    
    for (let i = 0;i<cal.length;i++) {
        if(cal[i] === '+') {
            answer += Number(cal[i+1]);
        } else if(cal[i] === '-') {
            answer -= Number(cal[i+1]);
        }
    }
    return answer;
}