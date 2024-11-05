function solution(sizes) {
    var answer = 0;
    let maxWidth = 0, maxHeight = 0;
    sizes.forEach(val => {
        if (val[0] < val[1]) val.reverse();
    })
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > maxWidth){
            maxWidth = sizes[i][0];
        }
        if (sizes[i][1] > maxHeight){
            maxHeight = sizes[i][1];
        }
    }
    return maxWidth * maxHeight;
}