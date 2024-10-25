import math
def solution(progresses, speeds):
    len_p = len(progresses)
    answer = []
    for i in range(len_p):
        speeds[i] = math.ceil((100-progresses[i])/speeds[i])
        # [7, 3, 9]
    cnt = 1
    for i in range(len_p):
        if i + 1 < len_p:
            if speeds[i] >= speeds[i+1]:
                cnt += 1
                speeds[i+1] = speeds[i]
            else:
                answer.append(cnt)
                cnt = 1
        else:
            answer.append(cnt)
            
    return answer