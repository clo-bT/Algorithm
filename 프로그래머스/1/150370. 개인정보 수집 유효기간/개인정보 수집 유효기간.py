def solution(today, terms, privacies):
    answer = []
    # today 정리
    ty, tm, td = map(int, today.split("."))
    today_days = ty * 12 * 28 + tm * 28 + td

    # terms 정리
    term_dict = {}
    for term in terms:
        name, months = term.split()
        term_dict[name] = int(months)
    
    for i, privacy in enumerate(privacies):
        date, term = privacy.split()
        y, m, d = map(int, date.split("."))
        
        months = term_dict[term]
        m += months
        y += (m - 1) // 12
        m = (m - 1) % 12 + 1
        d -= 1
        if d == 0:
            m -= 1
            d = 28
        if m == 0:
            y -= 1
            m = 12

        expire_days = y * 12 * 28 + m * 28 + d
        if today_days > expire_days:
            answer.append(i + 1)
    
    return answer
