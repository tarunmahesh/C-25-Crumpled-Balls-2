
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground
var dustbin1, dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boxPosition=width/2+200
	boxY=610;


	boxleftSprite=createSprite(boxPosition+55, boxY, 10,50);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+200, boxY, 10,50 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+30, 100,10);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+25, 100,10 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxrightSprite=createSprite(boxPosition+145 , boxY, 10,50);
	boxrightSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+180 , boxY, 10,50 , {isStatic:true} );
	World.add(world, boxRightBody);

	ground = new Ground(400,650,800,10)
	paper = new Paper(10,625,35)
	dustbin1 = new Dustbin(655,610,10,50)
	dustbin2 = new Dustbin(700,635,100,10)
	dustbin3 = new Dustbin(780,610,10,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper.display()
	ground.display()
	dustbin1.display()
	dustbin2.display()
	dustbin3.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100,y:-120})
	}
}



