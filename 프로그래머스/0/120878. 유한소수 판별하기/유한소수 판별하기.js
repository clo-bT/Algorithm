function solution(a, b) {
    var num = 1
    for (i=1;i<=Math.min(a,b);i++) {
        if (a % i == 0 && b % i == 0) num = i;
    }
    b /= num
    while (b % 2 == 0) b/=2
    while (b % 5 == 0) b/=5
    return b==1?1:2
}