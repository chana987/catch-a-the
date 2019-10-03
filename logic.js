const FrogGame = function() {
  let _frogs = []
  let level = 0
  let time = 1
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
      } while ((height - (y * height / 100)) < y)
      do {
        x = Math.ceil(Math.random() * 100)
      } while ((width - (x * width / 100)) < y)
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
  const upLevel = function() {
    frogs = []
    level += 1
    time += 1
    // add frogs acoording to level
    for (let i = 0; i < level; i++) {
      addFrog()
    }
  }
  const getFrogs = function() {
    return _frogs
  }
  return {
    addFrog: addFrog,
    removeFrog: removeFrog,
    upLevel: upLevel,
    getFrogs: getFrogs,
    time: time,
    level: level
  }
}
