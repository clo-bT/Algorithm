T = int(input())
i = 666
arr = []
while True:
    if '666' in str(i):
        arr.append(i)
    i += 1
    if len(arr) == T:
        break
print(arr[-1])

