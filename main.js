const frogGame = FrogGame()
const renderer = Renderer()
const startTimer = function(func) {
  func()
  frogGame.timer = setInterval(frogGame.countdown, 1000)
}

renderer.renderGame(frogGame.getFrogs(), "-", "-")

$(".start").on("click", function() {
  frogGame.time = 2
  frogGame.level = 1
  frogGame.getFrogs().splice(0)
  frogGame.addFrog()
  renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  startTimer(renderer.renderTime(frogGame.time))
})

$(".main").on("click", ".frog", function() {
  let frogID = $(this).data("id")
  frogGame.removeFrog(frogID)
  $(".num-frogs").text(frogGame.getFrogs().length)
  renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  if (frogGame.getFrogs().length === 0) {
    frogGame.level += 1
    frogGame.time += 1 
    for (let i = 0; i < frogGame.level; i++) {
      frogGame.addFrog()
    }
    renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  }
  startTimer(renderer.renderTime(frogGame.time))
})
