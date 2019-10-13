const frogGame = FrogGame()
const renderer = Renderer()
let running 

const startTimer = function() {
  let counter = setInterval(function() {
    running = true
    frogGame.time -= 1
    if (frogGame.time === 0) {
      frogGame.gameOver()
      running = false
      clearInterval(counter)
    }
    renderer.renderTime(frogGame.time)
  }, 1000)
}
  
// if (frogGame.time <= 3 && frogGame.time > 0) {
//   var x;
//   function changecolors() {
//     x = 1;
//     setInterval(change, 500);
//   }
//   function change() {
//     let color = document.getElementById("time-left").style.color
//     if (x === 1) {
//       console.log(color)
//       color = "red";
//       x = 2;
//     } else {
//       color = "green";
//       x = 1;
//     }
//   }
// }

renderer.renderGame(frogGame.getFrogs(), "2", "0")

$(".start").on("click", function() {
  frogGame.startGame()
  renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  if (frogGame.running === false) {
    renderer.renderGame(frogGame.getFrogs(), "0", frogGame.time)
  }
  startTimer()
})

$(".main").on("click", ".frog", function() {
  let frogID = $(this).data("id")
  frogGame.removeFrog(frogID)
  $(".num-frogs").text(frogGame.getFrogs().length)
  renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  if (frogGame.getFrogs().length === 0) {
    frogGame.upLevel()
    renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
  }
})
