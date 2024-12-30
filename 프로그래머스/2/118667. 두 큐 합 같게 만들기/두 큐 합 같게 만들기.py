from collections import deque

def solution(queue1, queue2):
    deque1 = deque(queue1)
    deque2 = deque(queue2)
    sum_q1 = sum(deque1)
    sum_q2 = sum(deque2)
    target = (sum_q1 + sum_q2) // 2

    # 두 큐 합이 홀수면 -1 return
    if (sum_q1 + sum_q2) % 2 != 0:
        return -1

    max_moves = len(deque1) + len(deque2) * 2
    moves = 0

    while moves <= max_moves:
        if sum_q1 == target:
            return moves
        elif sum_q1 > target:
            # deque1에서 deque2로
            num = deque1.popleft()
            deque2.append(num)
            sum_q1 -= num
            sum_q2 += num
        else:
            # deque2에서 deque1으로
            num = deque2.popleft()
            deque1.append(num)
            sum_q2 -= num
            sum_q1 += num

        moves += 1

    return -1
