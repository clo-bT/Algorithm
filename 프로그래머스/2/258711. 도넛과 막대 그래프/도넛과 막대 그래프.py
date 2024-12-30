from collections import defaultdict
def solution(edges):
    in_edge = defaultdict(int)
    out_edge = defaultdict(int)
    
    for start, end in edges:
        in_edge[end] += 1
        out_edge[start] += 1
    
    created_node = None
    stick_cnt, eight_cnt, doughnut = 0, 0, 0
    
    for node in set(in_edge.keys()).union(set(out_edge.keys())):
        if in_edge[node] == 0 and out_edge[node] >= 2:
            created_node = node
        elif out_edge[node] == 0:
            stick_cnt += 1
        elif in_edge[node] >= 2 and out_edge[node] == 2:
            eight_cnt += 1
    if created_node is not None:
        doughnut = out_edge[created_node] - stick_cnt - eight_cnt

    return [created_node, doughnut, stick_cnt, eight_cnt]