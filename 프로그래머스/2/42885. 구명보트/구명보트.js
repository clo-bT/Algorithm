function solution(people, limit) {
    let answer = 0;
    let left = 0, right = people.length - 1;
    
    people.sort((a, b) => b - a);
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            right --;
        }
        left ++;
        answer ++;
    }
    return answer;
}