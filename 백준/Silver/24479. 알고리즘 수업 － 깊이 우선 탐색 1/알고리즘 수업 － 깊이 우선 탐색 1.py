def dfs(t):
  global cnt
  visited[t] = cnt
  line[t].sort()
  for i in line[t]:
    if visited[i] == 0:
      cnt += 1
      dfs(i)
      
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N, M, R = map(int, input().split())
line = [[] for _ in range(N+1)]
visited = [0] * (N+1)
cnt = 1

for _ in range(M):
  a, b = map(int, input().split())
  line[a].append(b)
  line[b].append(a)

dfs(R)
for i in range(1,N+1):
  print(visited[i])