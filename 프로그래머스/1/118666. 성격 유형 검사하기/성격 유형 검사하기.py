def solution(survey, choices):
    score_table = {
        "R": 0, "T": 0,
        "C": 0, "F": 0,
        "J": 0, "M": 0,
        "A": 0, "N": 0
    }

    choice_scores = [-3, -2, -1, 0, 1, 2, 3]

    for i in range(len(survey)):
        first, second = survey[i] 
        score = choice_scores[choices[i] - 1] 

        if score < 0:
            score_table[first] += abs(score)
        elif score > 0:
            score_table[second] += score

    result = ""
    result += "R" if score_table["R"] >= score_table["T"] else "T"
    result += "C" if score_table["C"] >= score_table["F"] else "F"
    result += "J" if score_table["J"] >= score_table["M"] else "M"
    result += "A" if score_table["A"] >= score_table["N"] else "N"

    return result
