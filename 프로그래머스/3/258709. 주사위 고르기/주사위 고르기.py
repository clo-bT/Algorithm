from itertools import combinations, product
from collections import Counter

def solution(dice):
    n = len(dice)
    half = n // 2
    max_rate = 0
    answer = []

    all_indices = list(combinations(range(n), half))

    for a_indices in all_indices:
        b_indices = [i for i in range(n) if i not in a_indices]
        
        a_dice = [dice[i] for i in a_indices]
        b_dice = [dice[i] for i in b_indices]
        
        a_sum_freq = Counter(sum(a) for a in product(*a_dice))
        b_sum_freq = Counter(sum(b) for b in product(*b_dice))
        
        win, lose = 0, 0
        total_cases = 0
        
        for a_sum, a_count in a_sum_freq.items():
            for b_sum, b_count in b_sum_freq.items():
                total_cases += a_count * b_count
                if a_sum > b_sum:
                    win += a_count * b_count
                elif a_sum < b_sum:
                    lose += a_count * b_count
        
        draw = total_cases - win - lose
        win_rate = win / total_cases if total_cases > 0 else 0
        lose_rate = lose / total_cases if total_cases > 0 else 0
        
        if win_rate > lose_rate:
            if win_rate > max_rate:
                max_rate = win_rate
                answer = sorted(a_indices)
        else:
            if lose_rate > max_rate:
                max_rate = lose_rate
                answer = sorted(b_indices)

    return [i + 1 for i in answer]
