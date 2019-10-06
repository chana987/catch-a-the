const FrogGame = function() {
  let _frogs = []
  let level = 1
  let time = 2
  let timer
  let frogCounter = 0

  const addFrog = function() {
    frogCounter += 1
    // generate random location
    const generateLocation = function() {
      // get viewport dimensions
      let height = $(".main").height()
      let width = $(".main").width()
      let y
      let x
      do {
        y = Math.ceil(Math.random() * 100)
      } while (height - (y * height) / 100 < y)
      do {
        x = Math.ceil(Math.random() * 100)
      } while (width - (x * width) / 100 < y)
      let location = [x, y]
      return location
    }
    // generate color
    const generateColor = function() {
      const generateNum = function() {
        let num = Math.ceil(Math.random() * 255)
        return num
      }
      color = `rgb(${generateNum()}, ${generateNum()}, ${generateNum()})`
      return color
    }
    let frog = {
      location: generateLocation(),
      color: generateColor(),
      id: frogCounter
    }
    // add to array
    _frogs.push(frog)
  }

  const removeFrog = function(frogID) {
    // remove frog from array
    const id = _frogs.findIndex(i => i.id === frogID)
    _frogs.splice(id, 1)
  }

  const getFrogs = function() {
    return _frogs
  }

  const gameOver = function() {}

  const upLevel = function() {}

  const countdown = function() {
    time -= 1
    if (time <= 3) {
      // let color = $(".time-left").css("color")
      // const changeColor = function(color) {
      //   (color === "red") ? $(".time-left").css("color", "yellow") : $(".time-left").css("color", "red")
      // }
      // setInterval(function() {
      //   changeColor(color)
      // }, 300)
      if (time === 0) {
        alert("Time's up!")
        clearInterval(timer)
        getFrogs().splice(0)
        renderer.renderGame(frogGame.getFrogs(), "-", "-")
      }
    }
  }

  return {
    addFrog: addFrog,
    removeFrog: removeFrog,
    getFrogs: getFrogs,
    time: time,
    level: level,
    countdown: countdown
  }
}
