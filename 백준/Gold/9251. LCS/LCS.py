a = list(str(input()))
b = list(str(input()))
N, K = len(a), len(b)

#배열 생성
arr = [[0 for _ in range(N + 1)] for _ in range(K + 1)]
answer = 0


#규칙에 따라 순차적으로 숫자를 넣어준다.
for i in range(N):
    for j in range(K):
        if a[i] == b[j]:
            arr[j+1][i+1] = arr[j][i] + 1
            answer = max(answer, arr[j+1][i+1])
        else:
            arr[j+1][i+1] = max(arr[j][i+1], arr[j+1][i])

print(answer)