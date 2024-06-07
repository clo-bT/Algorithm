def solution(n, k):
    answer = []
    i = 1
    while n >= k*i:
        answer.append(k*i)
        i += 1
    return answer