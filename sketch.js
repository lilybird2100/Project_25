
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = new dustbin(850,310,100,PI/2); 
	wall2 = new dustbin(750, 310, 100, -PI/2);
	wall3 = new dustbin2(500, 385, 1000, 20);
	wall4 = new abc(800, 365, 125, 20);
	ball = new Paper(200, 100, 25); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  wall1.display(); 
  wall2.display(); 
  wall3.display();
  wall4.display();  
  ball.display(); 
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-120});
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-70,y:-70});
	}

}



