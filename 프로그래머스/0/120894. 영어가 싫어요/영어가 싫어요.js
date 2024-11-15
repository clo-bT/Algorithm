function solution(numbers) {
    let answer = '', i = 0;
    while (i<numbers.length) {
        if (numbers[i] === 'o') {
            answer += 1;
            i += 3;
        } else if (numbers[i] === 't') {
            if (numbers[i+1] ==='w') {
                answer += 2;
                i += 3;
            } else {
                answer += 3;
                i += 5;
            }
        } else if (numbers[i] === 'f') {
            if (numbers[i+1] ==='o') {
                answer += 4;
                i += 4;
            } else {
                answer += 5;
                i += 4;
            }
        } else if (numbers[i] === 's') {
            if (numbers[i+1] ==='i') {
                answer += 6;
                i += 3;
            } else {
                answer += 7;
                i += 5;
            }
        } else if (numbers[i] === 'e') {
            answer += 8;
            i += 5;
        } else if (numbers[i] === 'n') {
            answer += 9;
            i += 4;
        } else {
            answer += 0;
            i += 4;
        }
    }
    return Number(answer);
}