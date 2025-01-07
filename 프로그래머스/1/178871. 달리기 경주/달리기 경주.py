def solution(players, callings):
    race = {player: index for index, player in enumerate(players)}

    for call in callings:
        current = race[call] 
        players[current], players[current - 1] = players[current - 1],players[current]

        race[players[current]] = current
        race[players[current - 1]] = current - 1

    return players
