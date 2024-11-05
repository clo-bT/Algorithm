function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPermutations(arr) {
    const results = new Set();

    const generate = (current, remaining) => {
        if (current.length > 0) {
            results.add(parseInt(current.join('')));
        }
        for (let i = 0; i < remaining.length; i++) {
            if (i > 0 && remaining[i] === remaining[i - 1]) continue;
            generate([...current, remaining[i]], remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    };

    generate([], arr);
    return Array.from(results);
}

function solution(numbers) {
    let answer = 0;
    const numberList = numbers.split('');
    
    const uniqueNumbers = getPermutations(numberList);
    
    uniqueNumbers.forEach(num => {
        if (isPrime(num)) answer++;
    });

    return answer;
}

