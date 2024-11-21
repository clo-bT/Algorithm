function solution(keyinput, board) {
    var answer = [0,0];
    const row = Math.floor(board[0]/2);
    const col = Math.floor(board[1]/2);
    const direction = {
        'up' : [0,1],
        'down' : [0,-1],
        'left' : [-1,0],
        'right' : [1,0]
    }
    keyinput.forEach(command => {
        if (
            (-1)*row <= answer[0]+direction[command][0]
           && answer[0]+direction[command][0] <= row
           && (-1)*col <= answer[1]+direction[command][1]
           && answer[1]+direction[command][1] <= col
        ) {
            answer[0] += direction[command][0]
            answer[1] += direction[command][1]
        }
    })
    return answer;
}