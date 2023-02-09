'''
HINT
def recursion(s, l, r):
    if l >= r: return 1
    elif s[l] != s[r]: return 0
    else: return recursion(s, l+1, r-1)

def isPalindrome(s):
    return recursion(s, 0, len(s)-1)

print('ABBA:', isPalindrome('ABBA'))
print('ABC:', isPalindrome('ABC'))

'''

T= int(input()) #5

def recursion(s, l, r):
    global cnt
    cnt += 1
    if l>=r:
        return 1
    elif s[l] != s[r]:
        return 0
    else:
        return recursion(s, l+1, r-1)
    
def isPalindrome(s):
    return recursion(s, 0, len(s)-1)

for i in range(T):
    cnt = 0
    print(isPalindrome(input()), cnt)