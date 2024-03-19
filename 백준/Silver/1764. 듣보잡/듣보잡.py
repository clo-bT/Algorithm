import sys
input = sys.stdin.readline

# N, M 입력 받기 3 4
N, M = map(int, input().split())
# 듣지 못한 리스트 입력 받아
notlisten = set([input() for _ in range(N)])
notseen = set([input() for _ in range(M)])
ans = sorted(list(notlisten & notseen))
print(len(ans))
for i in ans:
  print(i, end="")