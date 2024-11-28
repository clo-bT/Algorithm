N, T = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

dp = [0] * (T + 1)

for time, score in arr:
    for j in range(T, time - 1, -1):
        dp[j] = max(dp[j], dp[j - time] + score)

print(dp[T])
