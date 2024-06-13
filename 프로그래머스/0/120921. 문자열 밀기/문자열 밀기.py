def solution(A, B):
    li = [A]
    for _ in range(len(A)-1):
        a = li[-1]
        li.append(a[-1]+a[:len(a)-1])
    if B in li:
        return li.index(B)
    else:
        return -1