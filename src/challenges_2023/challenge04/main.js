function decode(message) {
  let rEx = /\([^\)\(]+\)/g
  while(message.includes(")")){
    let oV = message.match(rEx)[0]
    let nV = oV.substring(1, oV.length - 1)
    let rE = '';
    for (const cha of nV) {
      rE = cha + rE
    }
    message = message.replace(oV, rE)
  }

  return message
}

module.exports = decode;  