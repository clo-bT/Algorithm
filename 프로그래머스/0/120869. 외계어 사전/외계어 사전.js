function solution(spell, dic) {
    const word = spell.sort().join('');
    return dic.some(val => val.split('').sort().join('') === word) ? 1 : 2;
}
