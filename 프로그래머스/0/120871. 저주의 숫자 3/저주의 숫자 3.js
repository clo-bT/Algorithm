function solution(n) {
    let arr = [];  
    let i = 1;  

    while (arr.length < n) { 
        if (i % 3 !== 0 && !i.toString().includes('3')) {  
            arr.push(i);
        }
        i++; 
    }

    return arr[arr.length - 1]; 
}
