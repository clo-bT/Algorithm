a = int(input())
def packtori(a):
    if a == 1:
        return a
    elif a == 0:
        return 1
    return a * packtori(a-1)

print(packtori(a))