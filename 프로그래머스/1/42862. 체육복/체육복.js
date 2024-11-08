function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    let filterLost = lost.filter((l) => !reserve.includes(l));
    let filterReserve = reserve.filter((r) => !lost.includes(r));
    answer += lost.length - filterLost.length;
    
    filterLost.sort((a, b) => a - b);
    
    
    filterLost.forEach((l) => {
        if (filterReserve.length === 0) {
            return;
        }
        
        if (filterReserve.includes(l-1)) {
            filterReserve = filterReserve.filter((r) => r !== l - 1);
            answer++;
        }
        else if(filterReserve.includes(l+1)) {
            filterReserve = filterReserve.filter((r) => r !== l + 1);
            answer++;
        }
        
    })
    return answer;
}