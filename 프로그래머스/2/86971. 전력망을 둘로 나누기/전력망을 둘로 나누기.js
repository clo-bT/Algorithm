function solution(n, wires) {
    let answer = n;
    const graph = Array.from({ length: n + 1 }, () => []);
    let visited = Array(n + 1).fill(false);
    
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    })
    
    function dfs(node) {
        visited[node] = true;
        let count = 1;
        for (const next of graph[node]) {
            if (!visited[next]) {
                count += dfs(next);
            }
        }
        return count;
    }
    
    for (const [v1, v2] of wires) {
        graph[v1] = graph[v1].filter(v => v!==v2);
        graph[v2] = graph[v2].filter(v => v!==v1);
        
        visited.fill(false);
        const count = dfs(1);
        
        answer = Math.min(answer, Math.abs(count - (n - count)));
        
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    return answer;
}