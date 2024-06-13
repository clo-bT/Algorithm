def solution(board):
    answer = 0
    n = len(board)
    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                answer += 1
                for di, dj in [[-1,-1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]:
                    if 0<=i+di<n and 0<=j+dj<n and board[i+di][j+dj]==0:
                        answer += 1
                        board[i+di][j+dj] = 2
    return n**2 - answer