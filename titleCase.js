function titleCase(str) {
    let newStr = str.toLowerCase()
  
    let newStr2 = newStr.split(' ')
    let a = []
    let sentence = ''
  
    for (let s in newStr2) {
        let g = newStr2[s][0].toUpperCase()
      let h = newStr2[s].slice(1)
      let i = g + h
      a.push(i)
      sentence = a.join(' ')
  
    }
    return sentence
    
  }
  
  console.log(titleCase("I'm a little tea pot"))