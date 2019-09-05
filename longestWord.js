function findLongestWordLength(str) {
    let arr = str.split(' ')
    let longest = arr[0].length
    for (let words in arr) {
      
      if (arr[words].length > longest) {
        longest = arr[words].length
      }
    } 
    console.log(longest)
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");