function solution(diffs, times, limit) {
    var answer = 0;

    function calTime(diff, level, time_cur, time_prev) {
        if (diff <= level) {
            return time_cur;
        }
        return (diff - level) * (time_prev + time_cur) + time_cur;
    }

    let left = 1, right = limit, mid, tmp;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        tmp = times[0];
        
        for (let i = 1; i < diffs.length; i++) {
            tmp += calTime(diffs[i], mid, times[i], times[i - 1]);
        }
        
        if (tmp <= limit) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1; 
        }
    }

    return answer;
}
