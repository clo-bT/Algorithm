N, K = map(int,input().split()) #4개, 7kg
arr = [[0,0]]+[list(map(int,input().split())) for _ in range(N)]
dp = [[0]*(K+1) for _ in range(N+1)]
for i in range(1, N + 1):
    for j in range(1, K + 1):
        weight = arr[i][0] 
        value = arr[i][1]
       
        if j < weight:
            dp[i][j] = dp[i - 1][j] #weight보다 작으면 위의 값을 그대로 가져온다
        else:
            dp[i][j] = max(value + dp[i - 1][j - weight], dp[i - 1][j])

print(dp[N][K])