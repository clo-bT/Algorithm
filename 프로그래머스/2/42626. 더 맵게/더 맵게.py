import heapq
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    while scoville:
        if len(scoville) == 1 and scoville[0] < K:
            return -1
        a = heapq.heappop(scoville)
        if a < K:
            b = a + heapq.heappop(scoville) * 2
            heapq.heappush(scoville, b)
            answer += 1
    return answer
        
            