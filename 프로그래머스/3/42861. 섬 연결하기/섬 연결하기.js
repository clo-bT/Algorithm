function solution(n, costs) {
    var answer = 0;
    const graph = Array.from({ length : n }, () => []);
    for (const cost of costs) {
        graph[cost[0]].push([cost[1], cost[2]]);
        graph[cost[1]].push([cost[0], cost[2]]);
    }

    const priorityQueue = [];
    const visited = Array(n).fill(false);
    
    priorityQueue.push([0, 0]);  // [비용, 섬 번호]

    while (priorityQueue.length > 0) {
        // 최소 비용 간선
        priorityQueue.sort((a, b) => a[0] - b[0]);
        const [cost, current] = priorityQueue.shift();

        if (visited[current]) continue;
        
        visited[current] = true;
        answer += cost;

        for (const [next, nextCost] of graph[current]) {
            if (!visited[next]) {
                priorityQueue.push([nextCost, next]);
            }
        }
    }

    return answer;
}
