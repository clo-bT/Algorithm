import math

def solution(n, times):
    answer = 0
    left, right = 1, max(times) * n
    while left <= right:
        mid = (left + right) // 2
        tmp = 0
        for time in times:
            tmp += math.floor(mid/time)
        if tmp >= n:
            answer = mid
            right = mid - 1
        else :
            left = mid + 1
    return answer