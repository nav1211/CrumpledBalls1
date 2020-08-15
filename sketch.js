
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,bucket1,bucket2,bucket3;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,650);
	ground1 = new Ground(400,685,800,30);
	bucket1 = new Bucket(650,650,150,20);
	bucket2 = new Bucket(690,650,20,100);
	bucket3 = new Bucket(605,650,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //displaying the bodies
  paper1.display();
  ground1.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}

}

