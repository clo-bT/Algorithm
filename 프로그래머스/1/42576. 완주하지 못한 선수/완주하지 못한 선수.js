function solution(participant, completion) {
    const participantCount = new Map();

    participant.forEach(name => {
        participantCount.set(name, (participantCount.get(name) || 0) + 1);
    });

    completion.forEach(name => {
        if (participantCount.has(name)) {
            participantCount.set(name, participantCount.get(name) - 1);
        }
    });

    for (const [name, count] of participantCount.entries()) {
        if (count > 0) {
            return name;
        }
    }
}
