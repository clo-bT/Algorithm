from collections import defaultdict
def solution(id_list, report, k):
    answer = [0] * (len(id_list))
    report_dict = defaultdict(list)
    
    newreport = list(set(report))
    
    for new in newreport:
        ter, tee = new.split()
        report_dict[tee].append(ter)
    for key, value in report_dict.items():
        if len(value) >= k:
            for v in value:
                answer[id_list.index(v)] += 1

    return answer