import math
def convert(n, k):
    if n == 0:
        return "0"
    result = []
    while n > 0:
        result.append(str(n % k))
        n //= k
    return ''.join(result[::-1])

def isPrime(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return 0
    return 1
    
def solution(n, k):
    answer = 0
    converted_n = convert(n, k)
    arr = converted_n.split("0")
    for num in arr:
        if num and isPrime(int(num)) == 1:
            answer += 1
    return answer