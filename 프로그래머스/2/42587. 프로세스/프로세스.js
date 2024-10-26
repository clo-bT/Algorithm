function solution(priorities, location) {
    var answer = 0;
    let arr = []
    let max_p = Math.max(...priorities);
    
    for (let i = 0; i<priorities.length; i++) {
        arr.push(i);
    }
    while (priorities.length != 0) {
        let max_p = Math.max(...priorities);
        if (priorities[0] < max_p) {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            answer += 1;
            priorities.shift();
            if (arr.shift() == location) {
                return answer;
            }
        }
    }
    return answer;
}