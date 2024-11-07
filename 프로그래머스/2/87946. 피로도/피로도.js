function solution(k, dungeons) {
  let answer = 0;
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - current[1]);
        visited[i] = false;
      }
    }
  }

  dfs(0, k);

  return answer;
}
