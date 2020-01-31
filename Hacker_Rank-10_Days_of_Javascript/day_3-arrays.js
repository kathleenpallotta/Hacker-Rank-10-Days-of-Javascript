/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    let largest = 0;
    let secondLargest = nums[0];
    // Complete the function
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= largest) {
            largest = nums[i];
        }
    }
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}
