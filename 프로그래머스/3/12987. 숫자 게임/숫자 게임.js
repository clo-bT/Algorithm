function solution(A, B) {
    // 투 포인터
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let point = 0;
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {
        if (B[j] > A[i]) {
            point++;
            i++;
            j++;
        } else {
            j++;
        }
    }

    return point;
}
