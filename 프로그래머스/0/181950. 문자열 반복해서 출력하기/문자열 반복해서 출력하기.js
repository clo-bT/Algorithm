const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const str = input[0];
    const n = Number(input[1]);

    // 입력된 문자열 str을 n번 반복하여 결과를 생성
    const repeatedString = str.repeat(n);

    // 결과 출력
    console.log(repeatedString);

    process.exit(0);  // 프로그램 종료
});
