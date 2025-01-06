def solution(sequence, k):
    start, end = 0, 0
    current_sum = sequence[0]
    min_len = len(sequence)
    answer = []

    while start < len(sequence) and end < len(sequence):
        if current_sum == k:
            if end - start < min_len:
                min_len = end - start
                answer = [start, end]
            current_sum -= sequence[start]
            start += 1
        elif current_sum < k:
            end += 1
            if end < len(sequence):
                current_sum += sequence[end]
        else:
            current_sum -= sequence[start]
            start += 1

    return answer
