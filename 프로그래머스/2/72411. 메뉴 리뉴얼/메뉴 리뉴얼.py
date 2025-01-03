from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    
    for c in course:
        comb_count = Counter()
        
        for order in orders:
            for comb in combinations(sorted(order), c):
                comb_count[''.join(comb)] += 1
        
        if comb_count:
            max_count = max(comb_count.values())
            if max_count >= 2:
                for comb, count in comb_count.items():
                    if count == max_count:
                        answer.append(comb)
    
    return sorted(answer)
