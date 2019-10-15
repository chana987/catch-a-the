const Renderer = function() {
  const renderGame = function(creatures, level, time) {
    $(".num-level").text(level)
    $(".num-time").text(time)
    $(".main").empty()
    $(".num-creatures").text(creatures.length)
    for (let creature of creatures) {
      // create creatures on screen
      let newCreature = `<div class="creature" data-id="${creature.id}" 
      style="left:${creature.location[0]}%;
      top:${creature.location[1]}%;">
      <i class="fas fa-spider" 
      style="color:${creature.color};
      font-size:${creature.location[1] > 10 ? creature.location[1] : 10}px"></i></div>`
      $(".main").append(newCreature)
    }
  }
  const renderTime = function(time) {
    $(".num-time").text(time)
  }

  return {
    renderGame,
    renderTime
  }
}
