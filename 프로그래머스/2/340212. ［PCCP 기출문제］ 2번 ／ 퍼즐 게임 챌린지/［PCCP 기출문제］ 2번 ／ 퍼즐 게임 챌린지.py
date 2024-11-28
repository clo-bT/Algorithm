def solution(diffs, times, limit):
    answer = 0
    left, right = 1, limit
    
    while (left <= right):
        mid = (left + right)//2
        tmp = times[0]
        
        for i in range(1, len(diffs)):
            if mid < diffs[i] :
                tmp += (times[i] + times[i-1]) * (diffs[i] - mid) + times[i]
            else:
                tmp += times[i]
                
        if tmp <= limit:
            answer = mid
            right = mid - 1
        else:
            left = mid + 1
    return answer