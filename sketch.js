var cube1
var cube2
var cube3




function setup() {
  createCanvas(800,400);

cube1=createSprite(60,200,30,30)
cube1.shapeColor="white"
cube1.debug=true
cube1.velocityX=3

cube2=createSprite(60,100,30,30)
cube2.shapeColor="green"
cube2.debug=true
cube2.velocityX=3

cube3=createSprite(60,300,30,30)
cube3.shapeColor="blue"
cube3.debug=true
cube3.velocityX=3

wall1=createSprite(600,200,20,50)
wall1.shapeColor="cyan"
wall1.debug=true

wall2=createSprite(600,100,20,50)
wall2.shapeColor="red"
wall2.debug=true

wall3=createSprite(600,300,20,50)
wall3.shapeColor="lightpink"
wall3.debug=true








}

function draw() {
  background("black")
  drawSprites();

if(cube1.isTouching(wall1)){
  cube1.velocityX=0
  wall1.shapeColor="brown"
}

if(cube2.isTouching(wall2)){
  cube2.velocityX=0
  wall2.shapeColor="yellow"
}

if(cube3.isTouching(wall3)){
  cube3.velocityX=0
  wall3.shapeColor="purple"
}





}