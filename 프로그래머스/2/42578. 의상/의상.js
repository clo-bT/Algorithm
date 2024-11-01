function solution(clothes) {
    let answer = 1;
    const closet = new Map();

    clothes.forEach(([name, kind]) => {
        closet.set(kind, (closet.get(kind) || 0) + 1);
    });

    for (const number of closet.values()) {
        answer *= (number + 1);
    }

    return answer - 1;
}
