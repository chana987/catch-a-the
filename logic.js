const Game = function() {
  let _creatures = []
  let level = 1
  let time = 2
  let creatureCounter = 0

  const addCreature = function() {
    creatureCounter += 1
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
    let creature = {
      location: generateLocation(),
      color: generateColor(),
      id: creatureCounter
    }
    // add to array
    _creatures.push(creature)
  }

  const removeCreature = function(creatureID) {
    // remove Creature from array
    const id = _creatures.findIndex(i => i.id === creatureID)
    _creatures.splice(id, 1)
  }

  const getCreatures = function() {
    return _creatures
  }

  const startGame = function() {
    game.time = 2
    game.level = 1
    game.getCreatures().splice(0)
    game.addCreature()
  }

  const upLevel = function() {
    game.level += 1
    game.time = game.level * 2
    for (let i = 0; i < game.level; i++) {
      game.addCreature()
    }
  }

  const gameOver = function() {
    alert("Time's up!")
    game.getCreatures().splice(0)
  }

  return {
    addCreature,
    removeCreature,
    getCreatures,
    time,
    level,
    startGame,
    upLevel,
    gameOver
  }
}
