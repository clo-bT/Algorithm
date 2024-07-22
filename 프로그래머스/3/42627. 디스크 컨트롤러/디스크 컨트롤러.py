import heapq
def solution(jobs):
    start, now = -1, 0
    answer = 0
    i = 0
    working = []
    while i < len(jobs):
        for job in jobs:
            if start < job[0] <= now:
                heapq.heappush(working, [job[1], job[0]])
        if working:
            a = heapq.heappop(working)
            start = now
            now += a[0]
            answer += now - a[1]
            i += 1
        else:
            now += 1
    return answer // len(jobs)
    