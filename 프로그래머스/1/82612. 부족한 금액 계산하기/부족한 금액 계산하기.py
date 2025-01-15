def solution(price, money, count):
    return price * ((1+count)*count//2) - money if price * ((1+count)*count//2) - money>0 else 0
