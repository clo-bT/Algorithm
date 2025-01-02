def solution(cap, n, deliveries, pickups):
    answer = 0
    delivery, pickup = 0, 0
    
    for i in range(n-1, -1, -1):
        delivery += deliveries[i]
        pickup += pickups[i]
        
        while delivery > 0 or pickup > 0:
            # 한 번에 처리할 수 있는 양을 빼고, 음수로 가는 것 방지
            delivery -= cap
            pickup -= cap
            answer += (i + 1) * 2
            
    return answer
