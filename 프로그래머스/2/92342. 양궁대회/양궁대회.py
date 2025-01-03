from itertools import combinations_with_replacement

def solution(n, info):
    max_diff = 0
    answer = [-1]
    info = info[::-1]
    
    for comb in combinations_with_replacement(range(11), n):
        ryan = [0] * 11
        for i in comb:
            ryan[i] += 1

        ryan_score, apeach_score = 0, 0
        for i in range(11):
            if ryan[i] > info[i]:
                ryan_score += i
            elif info[i] > 0:
                apeach_score += i

        diff = ryan_score - apeach_score

        if diff > max_diff:
            max_diff = diff
            answer = ryan

    return answer[::-1]
