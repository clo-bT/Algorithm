N, M = map(int,input().split()) #5장,21넘지않게
arr = list(map(int,input().split())) #[5,6,7,8,9]
sum_arr = []
for a in arr:
    for b in arr:
        for c in arr:
            if a!=b and a!=c and b!=c:
                sum_t = a + b + c
                if sum_t <= M:
                    sum_arr.append(sum_t)
print(max(sum_arr))
