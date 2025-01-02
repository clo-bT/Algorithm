def solution(s):
    answer = ''
    numlist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    stringdict = {'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}
    
    while len(s)>0:
        if s[0] in numlist:
            answer += s[0]
            s = s[1:]
        else:
            if s[0:3] in stringdict.keys():
                answer += stringdict[s[0:3]]
                s = s[3:]
            elif s[0:4] in stringdict.keys():
                answer += stringdict[s[0:4]]
                s = s[4:]
            elif s[0:5] in stringdict.keys():
                answer += stringdict[s[0:5]]
                s = s[5:]
    return int(answer)