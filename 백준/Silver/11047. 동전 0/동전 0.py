N, K = map(int,input().split()) #10 4200
coins = []
for _ in range(N):
    coins.append(int(input()))
coins.sort(reverse=True)
answer = 0
for coin in coins:
    if K >= coin:
        answer += K // coin #몫만큼 더하기
        K %= coin #나머지 할당
        if K <= 0: # 만약 K가 0이면 반복문을 탈출합니다.
       		break
print(answer) # 거슬러 준 동전 + 화폐의 수