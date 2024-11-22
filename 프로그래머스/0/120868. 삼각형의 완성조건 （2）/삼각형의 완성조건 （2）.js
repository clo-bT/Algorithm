function solution(sides) {
    sides.sort((a, b) => a - b);
    const big = sides[1] + sides[0]
    const small = sides[1] - sides[0]
    return big - small - 1;
}