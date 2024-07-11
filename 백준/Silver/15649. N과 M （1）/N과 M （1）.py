N, M = map(int,input().split()) # 4 2
'''
result = []
arr = [0]*N
for i in range(N):
    arr[i] = i+1 #[1,2,3,4]
m = 1
for i in range(N, N-M, -1):
    m *= i

for i in range(N):
    for j in range(1, N):
        result = []
        if i != j:
            result.append(arr[i])
            result.append(arr[j])
        if len(result) != 0:
            print(*result)
'''
result = []
def dfs():
    if len(result)==M:
        print(' '.join(map(str,result)))
        return
    
    for i in range(1,N+1):
        if i not in result:
            result.append(i)
            dfs()
            result.pop()
 
dfs()