def check_distance(place):
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상, 하, 좌, 우
    diagonal_directions = [(-1, -1), (-1, 1), (1, -1), (1, 1)]  # 대각선
    cross_directions = [(0, 2), (0, -2), (2, 0), (-2, 0)]  # 거리 2 직선

    for r in range(5):
        for c in range(5):
            if place[r][c] == 'P':  # 사람 발견
                # 상하좌우 거리 1 확인
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < 5 and 0 <= nc < 5 and place[nr][nc] == 'P':
                        return 0
                
                # 대각선 확인
                for dr, dc in diagonal_directions:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < 5 and 0 <= nc < 5 and place[nr][nc] == 'P':
                        if place[r][nc] != 'X' or place[nr][c] != 'X':  # 파티션 확인
                            return 0

                # 직선 거리 2 확인
                for dr, dc in cross_directions:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < 5 and 0 <= nc < 5 and place[nr][nc] == 'P':
                        if place[r + dr // 2][c + dc // 2] != 'X':  # 중간에 파티션 확인
                            return 0
    return 1


def solution(places):
    answer = []
    for place in places:
        answer.append(check_distance(place))
    return answer
