var retFixo, retMovendo

function setup() {
  createCanvas(1200, 800)
  retFixo = createSprite(600, 400, 50, 80)
  retFixo.shapeColor = 'green'
  retFixo.debug = true
  retFixo.velocityX = 2
  retMovendo = createSprite(400, 200, 80, 30)
  retMovendo.shapeColor = 'green'
  retMovendo.debug = true
}

function draw() {
  background(0, 0, 0)
  retMovendo.x = World.mouseX
  retMovendo.y = World.mouseY

  if (isTouching (retMovendo, retFixo)
  ) {
    retMovendo.shapeColor = 'yellow'
    retFixo.shapeColor = 'yellow'
  } else {
    retMovendo.shapeColor = 'blue'
    retFixo.shapeColor = 'blue'
  }
  bounceOff(retMovendo, retFixo)
  drawSprites()
}
