function solution(my_string) {
    var answer = [];
    var tmp = '';
    
    for (var i = 0; i < my_string.length; i++) {
        if (my_string[i] == ' ') {
            answer.push(tmp);
            tmp = '';
        } else {
            tmp += my_string[i];
        }
    }
    
    // 마지막 단어를 배열에 추가
    if (tmp !== '') {
        answer.push(tmp);
    }
    
    return answer;
}
