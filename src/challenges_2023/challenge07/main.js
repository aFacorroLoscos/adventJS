function drawGift(size, symbol) {
  // Code here
  let cube = " ".repeat(size-1) + "#".repeat(size) + "\n"

  if(size != 1){
    for(let i = size - 1; i > 1; i--){
      cube += " ".repeat(i - 1) + "#" + symbol.repeat(size - 2)
      cube += "#" + symbol.repeat(size - i - 1) + "#\n" 
    }
    cube += "#".repeat(size)+ symbol.repeat(size - 2) + "#\n"
    // Parte baja del cubo
    for(i = 1; i < size-1; i++){
      cube += "#" + symbol.repeat(size -2)
      cube += "#" + symbol.repeat(size - i - 2) + "#\n" 
    }
    cube += "#".repeat(size) + "\n"
  }
  return cube
}
module.exports = drawGift;  