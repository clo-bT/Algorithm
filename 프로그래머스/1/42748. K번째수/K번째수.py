def solution(array, commands):
    answer = []
    for command in commands:
        a,b,c = command
        tmp = array[a-1:b]
        tmp.sort()
        print(tmp)
        answer.append(tmp[c-1])
    return answer