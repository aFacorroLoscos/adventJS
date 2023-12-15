function organizeGifts(gifts) {
  let re = /[0-9]+[a-z]+/g
  let array = gifts.length != "" ? gifts.match(re) : []
  let result = ""
  for(let i = 0;i < array.length; i++){
    let number = array[i].match(/[0-9]+/g)
    let letters = array[i].match(/[a-z]+/g)  
    result += ("["+ letters[0] +"]").repeat(number[0]/50)
    result += ("{"+ letters[0] +"}").repeat((number[0] % 50) / 10 )
    if((number[0] % 50) % 10 > 0){
      result += "(" + (letters[0]).repeat((number[0] % 50) % 10) + ")" 
    }
  }
  return result
}
module.exports = organizeGifts;  