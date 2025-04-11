function solution(rectangle, characterX, characterY, itemX, itemY) {
    const size = 102;
    const map = Array.from(Array(size), () => Array(size).fill(0));

    // 좌표를 2배로
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1 * 2; i <= x2 * 2; i++) {
            for (let j = y1 * 2; j <= y2 * 2; j++) {
                map[i][j] = 1;
            }
        }
    });

    // 내부를 0으로 채움
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1 * 2 + 1; i < x2 * 2; i++) {
            for (let j = y1 * 2 + 1; j < y2 * 2; j++) {
                map[i][j] = 0;
            }
        }
    });

    const visited = Array.from(Array(size), () => Array(size).fill(false));
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    const queue = [[characterX * 2, characterY * 2, 0]];
    visited[characterX * 2][characterY * 2] = true;

    while (queue.length) {
        const [x, y, dist] = queue.shift();

        if (x === itemX * 2 && y === itemY * 2) {
            return dist / 2;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (
                nx >= 0 && nx < size &&
                ny >= 0 && ny < size &&
                !visited[nx][ny] &&
                map[nx][ny] === 1
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return 0; // 도달 불가
}
