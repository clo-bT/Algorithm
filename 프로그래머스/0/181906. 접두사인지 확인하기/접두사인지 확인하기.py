def solution(my_string, is_prefix):
    answer = 0
    if is_prefix in my_string:
        for i in range(len(is_prefix)):
            if is_prefix[i] == my_string[i]:
                answer = 1
                continue
            else:
                answer = 0
                break
    return answer