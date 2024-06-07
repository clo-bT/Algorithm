def solution(my_string, is_suffix):
    answer = 0
    if is_suffix in my_string:
        i = -1
        for _ in range(len(is_suffix)):
            if my_string[i] == is_suffix[i]:
                answer = 1
                i -= 1
                continue
            else:
                answer = 0
                break
    return answer