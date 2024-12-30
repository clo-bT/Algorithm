def solution(users, emoticons):
    discountRates = [10, 20, 30, 40]  # 할인율
    answer = [0, 0]  # [가입자 수, 매출]

    def dfs(idx, discounts):
        if idx == len(emoticons):
            subscribers = 0
            totalPrice = 0

            for rate, maxPrice in users:
                total = 0
                for i, price in enumerate(emoticons):
                    if discounts[i] >= rate:
                        total += int(price * (100 - discounts[i]) / 100)

                if total >= maxPrice:
                    subscribers += 1
                else:
                    totalPrice += total

            if subscribers > answer[0] or (subscribers == answer[0] and totalPrice > answer[1]):
                answer[0] = subscribers
                answer[1] = totalPrice

            return

        for rate in discountRates:
            discounts[idx] = rate
            dfs(idx + 1, discounts)

    dfs(0, [0] * len(emoticons))
    
    return answer
