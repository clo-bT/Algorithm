function factorial(num) {
    let result = 1;
    for (let i = num;i>=2;i--) {
        result *= i
    }
    return result;
}
function solution(n) {
    var answer = 0;
    let left = 1, right = 10, mid;
    while(left<=right) {
        mid = Math.floor((left + right)/2)
        let fact = factorial(mid)
        if (fact <= n) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return answer;
}