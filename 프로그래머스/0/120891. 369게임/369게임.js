function solution(order) {
    let answer = 0;
    order = String(order);
    for (let i = 0;i<order.length;i++) {
        if (order[i]==='3' || order[i]==='6' || order[i]==='9') answer++;
    }
    return answer;
}