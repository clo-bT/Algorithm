function solution(video_len, pos, op_start, op_end, commands) {
    // 시간을 초로
    const timeToSeconds = (time) => {
        const [m, s] = time.split(":").map(Number);
        return m * 60 + s;
    };
    // 초를 시간으로
    const secondsToTime = (totalSeconds) => {
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    let current = timeToSeconds(pos);
    const theEnd = timeToSeconds(video_len);
    const opStart = timeToSeconds(op_start);
    const opEnd = timeToSeconds(op_end);

    if (opStart <= current && current <= opEnd) {
        current = opEnd;
    }
    
    commands.forEach((command) => {
        current += command === "prev" ? -10 : 10;

        if (current < 0) {
            current = 0;
        } else if (current > theEnd) {
            current = theEnd;
        }

        if (opStart <= current && current <= opEnd) {
            current = opEnd;
        }
    });

    return secondsToTime(current);
}
