function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let x = 0
    let arr2 = arr.sort(function(a,b){return a-b})
    for (let i = 0; i < arr2.length; i++) {
      if (num === arr2[i] || num < arr2[i]) {
        x = i
        break
        
      } else {
        x = i + 1
      } 
    }
    return x
  }
  
  getIndexToIns([10, 20, 30, 40, 50], 35);