/* ===*** OTHER LEETCODE PROBLEMS 888=== */

// TwoSum: find indices in items in array that add up target amount
// hardest part of problem: two loops to find each index
let nums = [2, 7, 11, 17, 23, 29, 31, 37, 41, 43, 47, 53]

const twoSum = (nums, target) => {
    // 1st for-loop starts at 0, scans all elements to the right to the penultimate index
    for (let x = 0; x <= nums.length - 1; x++) {
        // 2nd for-loop starts one index to right of 1st loop, and scans all elements to the right through the end of the array
        for (let y = 1; y <= nums.length; y++) {
            // when the numbers in each for-loop sum to target, 
            if (nums[x] + nums[y] === target) {
                //return the index for both numbers
                return [x, y];    
            }
        }
    }
}

// log the values by invoking twoSum and passing in arguments of the starting array and the target value
console.log(twoSum(nums, 58));


/* NEXT UP: try hash map version */

