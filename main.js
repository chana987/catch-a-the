const frogGame = FrogGame()
const renderer = Renderer()

const startTimer = function() {
  setInterval(function() {
    frogGame.countdown()
    renderer.renderTime(frogGame.time)
}, 1000)
}

renderer.renderGame(frogGame.getFrogs(), "-", "-")

$(".start").on("click", function() {
  frogGame.startGame()
  renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  startTimer()
})

$(".main").on("click", ".frog", function() {
  let frogID = $(this).data("id")
  frogGame.removeFrog(frogID)
  $(".num-frogs").text(frogGame.getFrogs().length)
  renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  if (frogGame.getFrogs().length === 0) {
    clearInterval(startTimer)
    frogGame.upLevel()
    renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
    startTimer()
  }
})

if (frogGame.gameOver()) {
  clearInterval(startTimer)
  renderer.renderGame(frogGame.getFrogs(), "-", "-")
}