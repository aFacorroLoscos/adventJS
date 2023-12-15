function createChristmasTree(ornaments, height) {
  let arbol = ""
  let ador = 1
  let values = 0
  for(let i = 0; i < height ; i++){
    arbol += " ".repeat(height - i - 1)
    for(let j = 0; j < ador - 1 ; j++){
      arbol += ornaments[values % ornaments.length] + " "
      values++
    }
    arbol += ornaments[values % ornaments.length]
    values++
    ador++
    arbol += "\n"
  }

  return arbol + " ".repeat(height - 1) + "|" + "\n"
}

module.exports = createChristmasTree;  