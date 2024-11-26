function solution(s, skip, index) {
    let answer = '';
    let skipArr = Array.from(skip).map(sk => sk.charCodeAt(0));
    let alpArr = [];
    
    for (let i = 97; i < 123; i++) { 
        if (!skipArr.includes(i)) {
            alpArr.push(i);
        }
    }
    
    let len = alpArr.length; 
    for (let i = 0; i < s.length; i++) {
        let curIndex = alpArr.indexOf(s.charCodeAt(i));
        let newIndex = (curIndex + index) % len;
        answer += String.fromCharCode(alpArr[newIndex]);
    }
    return answer;
}
