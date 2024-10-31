function solution(nums) {
    let newNums = new Set(nums);
    return Math.min(Math.floor(nums.length/2),newNums.size);
}