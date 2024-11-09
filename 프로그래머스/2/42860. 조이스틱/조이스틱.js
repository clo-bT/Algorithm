function solution(name) {
    let answer = 0;
    let n = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        const letter = name.charCodeAt(i) - 'A'.charCodeAt(0);
        answer += Math.min(letter, 26-letter);

        let nextIndex = i + 1;

        while (nextIndex < name.length && name[nextIndex] === 'A') {
          nextIndex += 1;
        }
        n = Math.min(
          n,
          i * 2 + name.length - nextIndex,
          i + (name.length - nextIndex) * 2 
        );
    }
    answer += n;
    return answer;
}
