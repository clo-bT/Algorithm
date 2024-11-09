function solution(n, lost, reserve) {
    const students = Array(n+1).fill(1);
    let answer = 0;

    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    answer = students.filter(v => v >= 1).length - 1
    return answer;
}