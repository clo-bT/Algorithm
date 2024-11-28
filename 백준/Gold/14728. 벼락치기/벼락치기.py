N, T = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)] 

dp = [[0]*(T+1) for _ in range(N+1)]
for i in range(1,N+1):
    for j in range(1,T+1):
        time = arr[i-1][0]
        score = arr[i-1][1]
        if j < time:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(score + dp[i-1][j-time], dp[i-1][j])
print(dp[N][T])