/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let novoArray = [];
                nums.forEach(element => {
                    if (element % 2 == 0) {
                        novoArray.push(element * 2);
                    } else {
                        novoArray.push(element * 3);
                    }
                });
    return novoArray;
}
