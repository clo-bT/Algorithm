function solution(score) {
    var answer = [];
    var avg = [];
    for (i=0;i<score.length;i++) {
        avg.push(score[i][0]+score[i][1])
    }
    var sorted = avg.slice().sort((a,b) => b-a);
    for (i=0;i<score.length;i++){
        answer.push(sorted.indexOf(avg[i])+1)
    }
    return answer;
}