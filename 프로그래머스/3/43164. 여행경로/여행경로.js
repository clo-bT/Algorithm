function solution(tickets) {
    let answer = [];
    tickets.sort((a, b) => a[1].localeCompare(b[1]));

    const visited = new Array(tickets.length).fill(false);

    function dfs(current, route) {
        if (route.length === tickets.length + 1) {
            answer.push(route);
            return;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === current) {
                visited[i] = true;
                dfs(tickets[i][1], [...route, tickets[i][1]])
                visited[i] = false;
            }
        }
        return false;
    }

    dfs('ICN', ['ICN']);
    return answer[0];
}
