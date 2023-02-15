n, m = map(int,input().split()) #4 2
arr = list(map(int,input().split())) #[4,2,3,1]
for i in range(m):
    arr.sort()
    s = arr[0] + arr[1]
    arr[0], arr[1] = s, s
print(sum(arr))

