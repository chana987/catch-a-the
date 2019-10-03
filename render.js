const Renderer = function() {
  const renderGame = function(frogs, level, time) {
    $(".num-level").text(level)
    $(".num-time").text(time)
    $(".main").empty()
    for (let frog of frogs) {
      let newFrog = `<div class="frog" data-id="${frog.id}" style="background:${frog.color};
      left:${frog.location[0]}%;
      top:${frog.location[1]}%;
      width:${frog.location[1]}px;
      height:${frog.location[1]}px"></div>`
      $(".main").append(newFrog)
    }
  }
  return { renderGame }
}
