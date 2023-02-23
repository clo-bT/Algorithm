N = int(input()) #3
A = list(map(int,input().split())) #3 4 5
B, C = map(int,input().split()) #2 2
ans = 0
for i in A:
    if i>=B:
        i -= B
        ans+=1
    elif i < B:
        i = 0
        ans += 1
    if i % C == 0:
        ans += i//C
    elif i%C!=0:
        ans += i//C + 1

print(ans)