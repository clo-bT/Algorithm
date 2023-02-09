
n = int(input()) #5
def fib(n):
    if n == 1 or n == 2:
        return 1
    else:
        global cnt_fib 
        cnt_fib += 1
        return fib(n-1) + fib(n-2)

def dfib(n):
    f = [1,1]
    for i in range(2,n):
        global cnt_dfib
        cnt_dfib += 1
        res = f[i-1] + f[i-2]
        f.append(res)
    return f[n-1]

cnt_fib = 1
cnt_dfib = 0
fib(n)
dfib(n)
print(cnt_fib, cnt_dfib)