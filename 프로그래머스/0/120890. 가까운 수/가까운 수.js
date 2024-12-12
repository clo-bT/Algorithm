function solution(array, n) {
    var answer = 0;
    let tmp = Infinity;
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        let num = Math.abs(array[i] - n);
        if (num < tmp) {
            tmp = num;
            answer = array[i];
        }
    }

    return answer;
}
