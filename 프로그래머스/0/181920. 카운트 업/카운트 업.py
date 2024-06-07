def solution(start_num, end_num):
    answer = []
    while start_num <= end_num:
        answer.append(start_num)
        start_num += 1
    return answer