function solution(array, commands) {
    var answer = [];
    commands.forEach(val => {
        let tmpArray = array.slice(val[0]-1, val[1]);
        tmpArray.sort((a, b) => a - b);
        answer.push(tmpArray[val[2]-1]);
    })
    return answer;
}