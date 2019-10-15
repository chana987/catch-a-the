const game = Game()
const renderer = Renderer()
let running

const flashTime = function(time) {
  let x = 1
  if (time <= 4) {
    let flash = setInterval(function() {
      $(".time-left").css("color")
      if (x === 1) {
        $(".time-left").css("color", "red")
        x = 2;
      } else {
        $(".time-left").css("color", "yellow")
        x = 1;
      }
      if (game.getCreatures().length === 0) {
        clearInterval(flash)
      }
    }, 500);  
  }
}

const startTimer = function() {
  let counter = setInterval(function() {
    flashTime(game.time)
    running = true
    game.time -= 1
    if (game.time === 0) {
      game.gameOver()
      running = false
      clearInterval(counter)
    }
    renderer.renderTime(game.time)
  }, 1000)
}

renderer.renderGame(game.getCreatures(), "0", "0")

$(".start").on("click", function() {
  game.startGame()
  renderer.renderGame(game.getCreatures(), game.level, game.time)
  if (game.running === false) {
    renderer.renderGame(game.getCreatures(), "0", game.time)
  }
  startTimer()
})

$(".main").on("click", ".creature", function() {
  let creatureID = $(this).data("id")
  game.removeCreature(creatureID)
  $(".num-Creatures").text(game.getCreatures().length)
  renderer.renderGame(game.getCreatures(), game.level, game.time)
  if (game.getCreatures().length === 0) {
    game.upLevel()
    renderer.renderGame(game.getCreatures(), game.level, game.time)
  }
})
