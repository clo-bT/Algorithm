function solution(dots) {
    dots.sort()
    const a = dots[1][1] - dots[0][1]
    const b = dots[2][0] - dots[0][0]
    return Math.abs(a * b);
}