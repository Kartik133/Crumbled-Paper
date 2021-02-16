
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj;
var groundObject;
var paper;
var world;

function preload() {
	dustbin_Img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(800,527,150,200);
	dustbin.addImage("dust",dustbin_Img);
	dustbin.scale = 0.8;
	
	groundObject = new ground(width/2,670,width,20);
	//dustbinObj = new dustbin(800,550,150,200);
	paper = new Paper(100,500,70,70);

	Engine.run(engine);
  }

function draw() {
  background(230);

  rectMode(CENTER);

  keyPressed();

  console.log(paper.body.position.x);

  groundObject.display();
  //dustbinObj.display();
  paper.display();

  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	  if(paper.body.position.x < 350) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:6,y:-17});  
	  }
		
	}
	
}