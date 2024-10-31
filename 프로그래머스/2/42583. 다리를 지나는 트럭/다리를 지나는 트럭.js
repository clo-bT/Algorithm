function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    // 다리를 건너는 트럭 배열
    let bridges = Array(bridge_length).fill(0);
    let bridge_sum = 0;
    
    answer ++;
    bridge_sum += truck_weights[0];
    bridges.shift();
    bridges.push(truck_weights.shift());
    
    while (bridge_sum > 0) {
        answer ++;
        bridge_sum -= bridges.shift();
        if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
            bridge_sum += truck_weights[0];
            bridges.push(truck_weights.shift());
        } else {
            bridges.push(0);
        }
    }
    return answer;
}