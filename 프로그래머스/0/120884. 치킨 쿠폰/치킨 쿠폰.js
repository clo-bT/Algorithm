function solution(chicken) {
    var answer = 0;
    var coupon = 0;
    while (chicken>=10) {
        answer += Math.floor(chicken/10);
        coupon = chicken % 10;
        chicken = Math.floor(chicken/10);
        chicken += coupon;
    }    
    return answer;
}