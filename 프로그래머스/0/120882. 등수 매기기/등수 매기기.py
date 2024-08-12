def solution(score):
    answer = []
    avg = [sum(s) for s in score]
    sort = sorted(avg, reverse=True)
    for s in avg:
        answer.append(sort.index(s)+1)
    return answer