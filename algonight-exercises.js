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