from collections import defaultdict
def solution(edges):
    in_edge = defaultdict(int) # 들어오는 간선
    out_edge = defaultdict(int) # 나가는 간선

    for start, end in edges:
        out_edge[start] += 1
        in_edge[end] += 1

    created_node = None
    stick_cnt = 0
    eight_cnt = 0

    for node in set(in_edge.keys()).union(set(out_edge.keys())):
        # 생성된 정점
        if in_edge[node] == 0 and out_edge[node] >= 2:
            created_node = node
        # 막대 모양
        elif out_edge[node] == 0:
            stick_cnt += 1
        # 8자 모양
        elif out_edge[node] == 2 and in_edge[node] >= 2:
            eight_cnt += 1
    # 도넛 모양
    if created_node is not None:
        doughnut_cnt = out_edge[created_node] - stick_cnt - eight_cnt
    else:
        doughnut_cnt = 0

    return [created_node, doughnut_cnt, stick_cnt, eight_cnt]
