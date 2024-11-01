function solution(participant, completion) {
    const countMap = new Map();
    participant.forEach(name => {
        countMap.set(name, (countMap.get(name) || 0) + 1);
    })
    completion.forEach(name => {
        countMap.set(name, countMap.get(name) - 1);
    })
    for (const [name, count] of countMap.entries()) {
        if (count > 0) {
            return name;
        }
    }
}