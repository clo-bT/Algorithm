function solution(progresses, speeds) {
    var answer = [];
    for (let i = 0; i < progresses.length; i++) {
        speeds[i] = Math.ceil((100-progresses[i])/speeds[i])
    };
    let cnt = 1;
    for (let i = 0; i < progresses.length; i++) {
        if (i+1<progresses.length) {
            if (speeds[i] >= speeds[i+1]) {
                cnt++;
                speeds[i+1] = speeds[i]
            } else {
                answer.push(cnt)
                cnt = 1
            }
        } else {
            answer.push(cnt)
        }
    }
    return answer;
}