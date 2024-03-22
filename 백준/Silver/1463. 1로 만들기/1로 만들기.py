# import sys
# input = sys.stdin.readline
from collections import deque

a = int(input())
queue = deque()
queue.append(a)
ans = 0
visited = [0]* (a + 1)
while queue:
  a = queue.popleft()
  if a == 1:
    ans = visited[a]
    break
  else:
    if a % 3 == 0 and visited[a//3] == 0:
      queue.append(a//3)
      visited[a//3] = visited[a]+1
    if a % 2 == 0 and visited[a//2] == 0:
      queue.append(a//2)
      visited[a//2] = visited[a]+1
    if a - 1 > 0 and visited[a-1] == 0:
      queue.append(a-1)
      visited[a-1] = visited[a]+1
print(ans)
