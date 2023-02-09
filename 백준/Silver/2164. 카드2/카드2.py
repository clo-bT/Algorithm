from collections import deque as dq
# 카드를 받아
N = int(input()) #6
queue = dq([])
for i in range(1,N+1):
    queue.append(i) #[1,2,3,4,5,6]
# 제일 위에 있는 카드를 버려 pop
while len(queue) >= 3:
    queue.popleft()
    a = queue.popleft()
    queue.append(a)
print(queue[-1])
# 그다음 제일 위에있는 카드를 순서를 바꿔?
# 위에꺼 반복해 언제까지? 한장 남을 때까지
# 한장 남은 것 중에 밑에 있는 거 [-1]를 프린트해.