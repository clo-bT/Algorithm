function solution(s){
    var li = [];
    for (let i=0; i < s.length; i++) {
        if (s[i] == "(") {
            li.push(1);
        } else if (s[i] == ")") {
            if (li.length == 0) {
                return false;
            } else {
                li.pop()
            }
        } 
    }
    if (li.length != 0) {
        return false;
    }
    return true;
}