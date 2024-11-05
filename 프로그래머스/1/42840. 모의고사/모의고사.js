function solution(answers) {
    let tmp = [0,0,0];
    let answer = [];
    const firstMan = [...Array(2000)].flatMap(()=>[1,2,3,4,5])
    const secondMan = [...Array(1250)].flatMap(()=>[2,1,2,3,2,4,2,5])
    const thirdMan = [...Array(1000)].flatMap(()=>[3,3,1,1,2,2,4,4,5,5])
    for (let i = 0;i < answers.length;i++) {
        if (answers[i] == firstMan[i]) tmp[0] ++;
        if (answers[i] == secondMan[i]) tmp[1] ++;
        if (answers[i] == thirdMan[i]) tmp[2] ++;
    }
    const maxMan = Math.max(...tmp);
    for (let i = 0;i<3;i++) {
        if (maxMan == tmp[i]) answer.push(i+1)
    }
    return answer;
}