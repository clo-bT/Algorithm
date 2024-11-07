function solution(word) {
    let answer = 0;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let found = false;
    
    function dfs(current) {
        if(current === word) {
            found = true;
            return;
        }
        if (current.length >= 5) {
            return;
        }
        for (let i = 0; i < vowels.length; i++) {
            if (found) return;
            answer ++;
            dfs(current + vowels[i])
        }
    }
    dfs('')
    return answer;
   
    return answer;
}