function hasTargetSum(array, target) {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Loop through the remaining elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the current two elements is equal to the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no two elements sum to the target, return false
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25);
hasTargetSum([1, 2, 5], 4);
hasTargetSum([-7, 10, 4, 8], 3);
hasTargetSum([1, 2, 3, 4], 5);
hasTargetSum([2, 2, 3, 3], 4);
hasTargetSum([4], 5);


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
