function solution(maps) {
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    while (queue.length > 0) {
        let [x, y, num] = queue.shift();
        if (x === maps.length - 1 && y === maps[0].length - 1) {
            return num;
        }
        for (const [dx, dy] of direction) {
            const nx = x + dx, ny = y + dy;
            if (0 <= nx && nx < maps.length && 0 <= ny && ny < maps[0].length && 
                !visited[nx][ny] && maps[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, num + 1]);
            }
        }
    }
    return -1;
}
