
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dwall1, Dwall2, Dwall3
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(50, 300)
	ground = new Ground(600, 680, 1200, 40)
	ground2 = new Ground(590, 610, 20, 100)
	ground3 = new Ground(710, 610, 20, 100)
	Dwall1 = createSprite(650, 650, 100, 20)
	Dwall1.shapeColor = "red"
	Dwall2 = createSprite(590, 610, 20, 100)
	Dwall2.shapeColor = "red"
	Dwall3 = createSprite(710, 610, 20, 100)
	Dwall3.shapeColor = "red"
	groundSee = createSprite(600, 680, 1200, 40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(circle.body, circle.body.position,{x:30,y:-30})
	}
}



