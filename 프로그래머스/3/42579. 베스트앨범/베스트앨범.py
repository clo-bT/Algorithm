def solution(genres, plays):
    '''
    answer = []
    dic = {}
    play = {}
    for i in range(len(genres)):
        if genres[i] in play.keys():
            play[genres[i]] += plays[i]
        else:
            play[genres[i]] = plays[i]
        if genres[i] in dic.keys():
            dic[genres[i]].append((plays[i], i))
        else:
            dic[genres[i]] = [(plays[i], i)]
    play = sorted(play.items(), key=lambda x:x[0], reverse = True)
    for key, _ in play:
        tmp = sorted(dic[key], key = lambda x:(-x[0], x[1]))
        answer.append(tmp[0][1])
        if len(tmp) > 1:
            answer.append(tmp[1][1])
    return answer
    '''
    answer = []
    genre_play_count = {}  # {장르: 총 재생 횟수}
    genre_songs = {}  # {장르: [(재생 횟수, 고유 번호)]}

    # genres와 plays를 순회하며 각 장르별로 총 재생 횟수와 곡 정보 저장
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        
        if genre in genre_play_count:
            genre_play_count[genre] += play
        else:
            genre_play_count[genre] = play
        
        if genre in genre_songs:
            genre_songs[genre].append((play, i))
        else:
            genre_songs[genre] = [(play, i)]

    # 총 재생 횟수에 따라 장르를 내림차순으로 정렬
    sorted_genres = sorted(genre_play_count.items(), key=lambda x: x[1], reverse=True)

    # 각 장르별로 곡들을 재생 횟수에 따라 내림차순, 재생 횟수가 같으면 고유 번호에 따라 오름차순 정렬
    for genre, _ in sorted_genres:
        songs = sorted(genre_songs[genre], key=lambda x: (-x[0], x[1]))
        # 가장 많이 재생된 두 곡의 고유 번호를 answer에 추가
        answer.extend([song[1] for song in songs[:2]])
    
    return answer