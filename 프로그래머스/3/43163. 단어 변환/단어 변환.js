function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    let queue = [[begin, 0]];
    while (queue.length > 0) {
        const [current, num] = queue.shift();
        if (current === target) {
            return num;
        }
        for (const word of words) {
            let tmp = 0;
            for (let i = 0;i<current.length;i++) {
                
                if (current[i] !== word[i]) {
                    tmp++;
                }
            }
            if (tmp === 1) {
                queue.push([word, num+1])
            }
        }
    }
    return 0;
}