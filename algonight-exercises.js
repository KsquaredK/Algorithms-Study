//LEETCODE PROBLEMS - beginner 1.11.2022
// worked with John Gale

function procedure(num){

    let multiple = 1;
    let firstArray = [];
    // 30, 60, 90
    for (multiple; num * multiple <= 100; multiple++){
      firstArray.push(num * multiple);
      // console.log(firstArray);
    }
    
    // 3, 6, 9
    let secondArray = [];
    for (let j = 0; j < firstArray.length; j++){
      secondArray.push([...firstArray[j] + ''].map(Number).reduce((a, b) => a + b));
      // console.log(secondArray);
    }
  
    return secondArray.reduce((a, b) => a + b);
    
  
  }
  
  
  console.log(procedure(30)); // -> 18
  console.log(procedure(12)); // -> 72
  console.log(procedure(41)) // -> 15
  console.log(procedure(32)); // -> 30
  console.log(procedure(18)); // -> 45




// SpinWords
// *****== Our solution:
//   function spinWords(str){
//     let phrase = str.split(" ");
//     // console.log(phrase)
    
//     let newPhrase = [];
    
//      phrase.map(element => {
//       if(element.length >= 5){
//         newPhrase.push(element.split('').reverse().join(''));
//       } else {
//         newPhrase.push(element);
//       }
//     })
//     // console.log(newPhrase);
    
//       return newPhrase.join(' ');
    
//     }

    // *****== Brian's solution:

    function spinWords(str){
        let phrase = str.split(" ");
        // console.log(phrase)
        
        return phrase.map(element => {
          if(element.length >= 5){
            return element.split('').reverse().join('');
          } else {
            return element;
          }
        }).join(' ');
        
    }
    
    console.log(spinWords("Hey fellow warriors")); // -> "Hey wollef sroirraw" 
    
    console.log(spinWords("This is a test")); // -> "This is a test"
    console.log(spinWords("This is another test")); // -> "This is rehtona test"
    console.log(spinWords("This ecnetnes is a ecnetnes")); // -> "This sentence is a sentence"
    console.log(spinWords("You are tsomla to the last test")); // -> "You are almost to the last test"
    console.log(spinWords("Just gniddik ereht is llits one more")); // -> "Just kidding there is still one more"



    //PathSum: elegant solution
    /* var hasPathSum = function(root, targetSum) {
    let result = false
    if (root === null) return false
    if (root.left === null && root.right === null) {
        if (root.val === targetSum) {
            // result = true
            return true
        }
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}; */


/* ===*** JAN 11, 2022 BEGINNER PROBLEMS ***===
Warmup 1: Multiples and Digit Sums (CW)
In this exercise, you will create a function that takes an integer, i. With it you must do the following:

Find all of its multiples up to and including 100,
Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),
And finally, get the total sum of each new digit sum.

Note: If the digit sum of a number is more than 9 (eg. 99 -> 9 + 9 = 18) then you do NOT have to break it down further until it reaches one digit.

Example (if i is 25):
Multiples of 25 up to 100 --> [25, 50, 75, 100]
Digit sum of each multiple --> [7, 5, 12, 1]
Sum of each new digit sum --> 25

Test cases:
procedure(30) -> 18
procedure(12) -> 72
procedure(41) -> 15
procedure(32) -> 30
procedure(18) -> 45



Warmup 2: Stop gninnipS My sdroW! (CW)
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Test cases: 
spinWords("Hey fellow warriors") -> "Hey wollef sroirraw" 
spinWords("This is a test") -> "This is a test"
spinWords("This is another test")-> "This is rehtona test"
spinWords("This ecnetnes is a ecnetnes") -> "This sentence is a sentence"
spinWords("You are tsomla to the last test") -> "You are almost to the last test"
spinWords("Just gniddik ereht is llits one more") -> "Just kidding there is still one more"


Beginner 1: Pascal's Triangle (LC118)
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 
 

Test cases:
generate(5) -> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
generate(1) -> [[1]]
generate(17) -> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1],[1,8,28,56,70,56,28,8,1],[1,9,36,84,126,126,84,36,9,1],[1,10,45,120,210,252,210,120,45,10,1],[1,11,55,165,330,462,462,330,165,55,11,1],[1,12,66,220,495,792,924,792,495,220,66,12,1],[1,13,78,286,715,1287,1716,1716,1287,715,286,78,13,1],[1,14,91,364,1001,2002,3003,3432,3003,2002,1001,364,91,14,1],[1,15,105,455,1365,3003,5005,6435,6435,5005,3003,1365,455,105,15,1],[1,16,120,560,1820,4368,8008,11440,12870,11440,8008,4368,1820,560,120,16,1]]

Constraints:
1 <= numRows <= 30



Beginner 2: Path Sum (LC112)
As there is no way to supply the necessary test cases for this problem in text format, please complete this problem at its LeetCode source:
https://leetcode.com/problems/path-sum/
Nonbeginner: Trench Map (Advent of Code 2022 Day 20)
--- Part One ---
You are using a set of scanners to map the floor of an ocean trench.

When you get back the image from the scanners, it seems to just be random noise. Perhaps you can combine an image enhancement algorithm and the input image (your puzzle input) to clean it up a little.

For example:

..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..##
#..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###
.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#.
.#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#.....
.#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#..
...####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.....
..##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#

#..#.
#....
##..#
..#..
..###

The first section is the image enhancement algorithm. It is normally given on a single line, but it has been wrapped to multiple lines in this example for legibility. The second section is the input image, a two-dimensional grid of light pixels (#) and dark pixels (.).

The image enhancement algorithm describes how to enhance an image by simultaneously converting all pixels in the input image into an output image. Each pixel of the output image is determined by looking at a 3x3 square of pixels centered on the corresponding input image pixel. So, to determine the value of the pixel at (5,10) in the output image, nine pixels from the input image need to be considered: (4,9), (4,10), (4,11), (5,9), (5,10), (5,11), (6,9), (6,10), and (6,11). These nine input pixels are combined into a single binary number that is used as an index in the image enhancement algorithm string.

For example, to determine the output pixel that corresponds to the very middle pixel of the input image, the nine pixels marked by [...] would need to be considered:

# . . # .
#[. . .].
#[# . .]#
.[. # .].
. . # # #

Starting from the top-left and reading across each row, these pixels are ..., then #.., then .#.; combining these forms ...#...#.. By turning dark pixels (.) into 0 and light pixels (#) into 1, the binary number 000100010 can be formed, which is 34 in decimal.

The image enhancement algorithm string is exactly 512 characters long, enough to match every possible 9-bit binary number. The first few characters of the string (numbered starting from zero) are as follows:

0         10        20        30  34    40        50        60        70
|         |         |         |   |     |         |         |         |
..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..##

In the middle of this first group of characters, the character at index 34 can be found: #. So, the output pixel in the center of the output image should be #, a light pixel.

This process can then be repeated to calculate every pixel of the output image.

Through advances in imaging technology, the images being operated on here are infinite in size. Every pixel of the infinite output image needs to be calculated exactly based on the relevant pixels of the input image. The small input image you have is only a small region of the actual infinite input image; the rest of the input image consists of dark pixels (.). For the purposes of the example, to save on space, only a portion of the infinite-sized input and output images will be shown.

The starting input image, therefore, looks something like this, with more dark pixels (.) extending forever in every direction not shown here:

...............
...............
...............
...............
...............
.....#..#......
.....#.........
.....##..#.....
.......#.......
.......###.....
...............
...............
...............
...............
...............

By applying the image enhancement algorithm to every pixel simultaneously, the following output image can be obtained:

...............
...............
...............
...............
.....##.##.....
....#..#.#.....
....##.#..#....
....####..#....
.....#..##.....
......##..#....
.......#.#.....
...............
...............
...............
...............

Through further advances in imaging technology, the above output image can also be used as an input image! This allows it to be enhanced a second time:

...............
...............
...............
..........#....
....#..#.#.....
...#.#...###...
...#...##.#....
...#.....#.#...
....#.#####....
.....#.#####...
......##.##....
.......###.....
...............
...............
...............

Truly incredible - now the small details are really starting to come through. After enhancing the original input image twice, 35 pixels are lit.

Start with the original input image and apply the image enhancement algorithm twice, being careful to account for the infinite size of the images. How many pixels are lit in the resulting image?

Your puzzle input can be found here.

To check your answer, highlight --> 5316

--- Part Two ---

You still can't quite make out the details in the image. Maybe you just didn't enhance it enough.

If you enhance the starting input image in the above example a total of 50 times, 3351 pixels are lit in the final output image.

Start again with the original input image and apply the image enhancement algorithm 50 times. How many pixels are lit in the resulting image?

Your puzzle input remains the same.

To check your answer, highlight --> 16728





*/

// Jan 18, 2022 cf arrays, delete elements in arr1 that are dupes of arr2

const findDiff = (arr1, arr2) => {
  let arr3 = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
    return arr3
}
console.log(findDiff([1,2,2,2,3],[2]))