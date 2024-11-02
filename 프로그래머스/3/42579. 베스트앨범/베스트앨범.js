function solution(genres, plays) {
    const recordMusic = new Map();
    const answer = [];
    
    for (let i = 0; i < genres.length; i++) {
        const playCount = plays[i];
        const genre = genres[i];

        if (!recordMusic.has(genre)) {
            recordMusic.set(genre, { songs: [[playCount, i]], totalPlays: playCount });
        } else {
            recordMusic.get(genre).songs.push([playCount, i]);
            recordMusic.get(genre).totalPlays += playCount;
        }
    }

    const sortedGenres = Array.from(recordMusic.entries()).sort((a, b) => b[1].totalPlays - a[1].totalPlays);


    for (const [genre, info] of sortedGenres) {
        const topSongs = info.songs
            .sort((a, b) => b[0] - a[0] || a[1] - b[1])
            .slice(0, 2);

        topSongs.forEach(song => answer.push(song[1]));
    }

    return answer;
}
