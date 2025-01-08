from collections import defaultdict
def solution(k, tangerine):
    answer = 0
    count = defaultdict(int)
    
    for tan in tangerine:
        count[tan] += 1
    sorted_count = sorted(count.values(), reverse=True)
    
    total = 0
    for c in sorted_count:
        total += c
        answer += 1
        if total >= k:
            break
    
    return answer
