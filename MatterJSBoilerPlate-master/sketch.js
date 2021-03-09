
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 body1.createSprites = 100, 20, 100, 20;
 body2.createSprites = 100, 20, 100, 20;
 body3.createSprites = 100, 20, 100, 20;
 body4.createSprites = 100, 20, 100, 20;
}

function setup() {
	createCanvas(200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine1, engine2, engine3, engine4);
    BaseAudioContext.createSprites = 300, 400, 10, 20;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



