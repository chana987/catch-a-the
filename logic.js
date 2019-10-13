const FrogGame = function() {
  let _frogs = []
  let level = 1
  let time = 2
  let frogCounter = 0
  let running = false

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

  const startGame = function() {
    frogGame.time = 2
    frogGame.level = 1
    frogGame.getFrogs().splice(0)
    frogGame.addFrog()
  }

  const upLevel = function() {
    frogGame.level += 1
    frogGame.time = frogGame.level * 2
    for (let i = 0; i < frogGame.level; i++) {
      frogGame.addFrog()
    }
  }

  const gameOver = function() {
    alert("Time's up!")
    frogGame.getFrogs().splice(0)
  }

  return {
    addFrog,
    removeFrog,
    getFrogs,
    time,
    level,
    startGame,
    upLevel,
    gameOver
  }
}
