function findNaughtyStep(original, modified) {
    // Code here
    let naughtystep = ""
    if(original.length == 0){
      naughtystep = modified
    }
    else{
      let i = 0
      while(original[i]){
        if(original.charAt(i) != modified.charAt(i)){
          if((original.charAt(i - 1) == modified.charAt(i - 1)) && 
              (original.charAt(i + 1) == modified.charAt(i))){
            naughtystep = original.charAt(i)
          }
          else{
            naughtystep = modified.charAt(i)
          }
          break
        }
        i++
      }
      if(naughtystep == ""){
        naughtystep = modified.charAt(i)
      }
    }
    return naughtystep
}
module.exports = findNaughtyStep;  