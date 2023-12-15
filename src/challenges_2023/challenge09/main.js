function adjustLights(lights) {
  // Code here
  let changes = 0
  
  if(lights[0] != lights[lights.length - 1]){
    lights[0] = lights[lights.length - 1]
    changes++
  }
  let colorLight = lights[0]
  for(let i = 1; i < lights.length ; i++){
    if(colorLight == "🟢" && lights[i] == "🟢"){
      lights[i] = "🔴"
      changes++
    }
    else if(colorLight == "🔴" && lights[i] == "🔴"){
      lights[i] = "🟢"
      changes++
    }
    colorLight = lights[i]
  }
  return changes
}

module.exports = adjustLights;  