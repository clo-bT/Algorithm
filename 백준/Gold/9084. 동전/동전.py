T = int(input())  # 테스트 케이스 수
for _ in range(T):
    n = int(input())  # 동전의 개수
    coins = list(map(int, input().split()))  # 동전의 종류
    k = int(input())  # 목표 금액

    dp = [0] * (k + 1)
    dp[0] = 1  # 0원을 만드는 방법은 1가지 (동전 없이 만들기)

    # 각 동전마다 dp 배열을 갱신
    for coin in coins:
        for j in range(coin, k + 1):
            dp[j] += dp[j - coin]

    print(dp[k])  # 목표 금액 k를 만들 수 있는 방법의 수
