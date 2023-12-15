function cyberReindeer(road, time) {
  // Code here
  let result = [road]
  let roadValue = "."
  let posNext = 1
  road = road.split('');
  for(let i = 1; i < time; i++){
    if(i == 5){
      road = road.join('');
      road = road.replaceAll("|", "*")
      if(roadValue == "|"){
        roadValue = "*"
      }
      road = road.split('');
    }
    if(road[posNext] != "|"){
      road[posNext - 1] = roadValue
      roadValue = road[posNext]
      road[posNext] = "S"
      posNext++
    }
    result.push(road.join(''))
  }
  return result
}

module.exports = cyberReindeer;  