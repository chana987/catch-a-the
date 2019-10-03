const frogGame = FrogGame()
const renderer = Renderer()

frogGame.addFrog()
frogGame.addFrog()
frogGame.addFrog()
frogGame.addFrog()

renderer.renderGame(frogGame.getFrogs(), frogGame.level, frogGame.time)
