def solution(arr):
    maxN = 0
    for a in arr:
        if len(a) > maxN:
            maxN = len(a)
    N = max(len(arr), maxN)
    answer = [[0]*N for _ in range(N)]
    for i in range(len(arr)):
        for j in range(maxN):
            if arr[i][j]:
                answer[i][j] = arr[i][j]
    return answer