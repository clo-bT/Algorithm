# 소수의 정의
# 본인과 1 이외의 약수가 아예 없는 숫자
# 루트까지만 보면 된다

from math import sqrt

def isprimenumber(num):
    i = 0
    
    if num == 0:
        return False
    elif num == 1:
        return False
    
    target = int(sqrt(num))
    for i in range(2,target+2):
        if num%i == 0:
            break
        else:
            pass
    if i == target + 1:
        return True
    else:
        return False

# 순열로 볼지 고민중
# 문제는 앞에가 0일 때가 문제

from itertools import permutations

def solution(numbers):
    B = []
    answer = 0
    n = len(numbers)
    N = list(numbers)
    for i in range(1,n+1):
        P = list(permutations(N,i))
        A = []
        for p in P:
            a = ''.join(p)
            A.append(a)
        for a in A:
            if a == str(int(a)):
                if isprimenumber(int(a)) == True and a not in B:
                    B.append(a)
                else:
                    pass
            else:
                pass
        answer = len(B)
    return answer