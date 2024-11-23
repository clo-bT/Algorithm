function solution(name, yearning, photo) {
    var answer = [];
    let memory = new Map();
    for (let i = 0; i < name.length; i++) {
        memory[name[i]] = yearning[i];
    }
    for (const p of photo) {
        let tmp = 0;
        p.forEach(e => {
            if (memory[e]) {
                tmp += memory[e]
            }
        })
        answer.push(tmp)
    }
    return answer;
}