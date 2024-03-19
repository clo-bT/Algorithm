import sys
input = sys.stdin.readline
A, B = map(int,input().split())
C = int(input())
if B+C<60:
    print(A, B+C)
elif B+C == 60:
    if A+1 >= 24:
        print(A-23, 0)
    else:
        print(A+1, 0)
elif B+C>60:
    if A+(B+C)//60 >= 24:
        print(A+(B+C)//60-24, B+C-((B+C)//60)*60)
    else:
        print(A+(B+C)//60, B+C-((B+C)//60)*60)