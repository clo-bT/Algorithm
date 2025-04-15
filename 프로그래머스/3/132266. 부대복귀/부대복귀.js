function solution(n, roads, sources, destination) {
    // 인접 리스트 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 거리 배열 초기화
    const distance = Array(n + 1).fill(-1);
    
    // BFS
    const queue = [destination];
    distance[destination] = 0;

    while (queue.length) {
        const current = queue.shift();
        for (let neighbor of graph[current]) {
            if (distance[neighbor] === -1) {
                distance[neighbor] = distance[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    // sources 각각에 대해 거리 결과 구하기
    return sources.map(source => distance[source]);
}
