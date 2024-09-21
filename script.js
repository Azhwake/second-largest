// Good Luck 💪🏾
function secondLargest(arr) {
    let sortedArr = arr.sort((a, b) => b - a);  
    return sortedArr[1]; 
}


console.log(secondLargest([23, 66, 50, 12, 6]));  // ➞ 50
console.log(secondLargest([65, 34, 100, 22, 85]));  // ➞ 85
console.log(secondLargest([67, 22, 19, 12, 80]));  // ➞ 67