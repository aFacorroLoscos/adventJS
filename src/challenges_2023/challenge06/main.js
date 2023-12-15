function maxDistance(movements) {
  let count = 0
  let extr = 0
  for(let i = 0; i < movements.length; i++){
    let newLetter = movements.charAt(i)
    if(newLetter == ">") count++
    else if(newLetter == "<") count--
    else extr++
  }
  return Math.abs(count) + extr
}

module.exports = maxDistance;  