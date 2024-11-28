function solution(points, routes) {
    const pointMap = points.reduce((map, [r, c], index) => {
        map[index + 1] = { r, c };
        return map;
    }, {});

    const robotPaths = routes.map(route => {
        const path = [];
        for (let i = 0; i < route.length - 1; i++) {
            const start = pointMap[route[i]];
            const end = pointMap[route[i + 1]];
            
            if (start.r !== end.r) {
                const step = start.r < end.r ? 1 : -1;
                for (let r = start.r; r !== end.r; r += step) {
                    path.push({ r, c: start.c });
                }
            }
            if (start.c !== end.c) {
                const step = start.c < end.c ? 1 : -1;
                for (let c = start.c; c !== end.c; c += step) {
                    path.push({ r: end.r, c });
                }
            }
        }
        path.push(pointMap[route[route.length - 1]]);
        return path;
    });

    const positionCount = {};
    let collisionCount = 0;

    for (let t = 0; t < Math.max(...robotPaths.map(path => path.length)); t++) {
        const positions = new Map();

        robotPaths.forEach(path => {
            if (t < path.length) {
                const pos = `${path[t].r},${path[t].c}`;
                positions.set(pos, (positions.get(pos) || 0) + 1);
            }
        });

        for (const [, count] of positions) {
            if (count > 1) collisionCount++;
        }
    }

    return collisionCount;
}
