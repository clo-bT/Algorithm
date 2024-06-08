def solution(babbling):
    answer = 0
    li = ["aya", "ye", "woo", "ma"]
    for i in range(4):
        for j in range(4):
            if i != j:
                li.append(li[i]+li[j])
    for i in range(4):
        for j in range(4):
            for k in range(4):
                if i != j and i != k and j != k:
                    li.append(li[i]+li[j]+li[k])
    for i in range(4):
        for j in range(4):
            for k in range(4):
                for r in range(4):
                    if i != j and i != k and i != r and j != k and j != r and k != r:
                        li.append(li[i]+li[j]+li[k]+li[r])
    for bab in babbling:
        if bab in li:
            answer += 1
    return answer