
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground
var dustbin, dustbinImage

function preload()
{
	dustbinImage = loadImage("green-recycle-bin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boxPosition=width/2+200
	boxY=610;


	boxleftSprite=createSprite(boxPosition+55, boxY, 10,150);
	boxleftSprite.shapeColor=color(0);

	boxLeftBody = Bodies.rectangle(boxPosition+55, boxY, 10,150 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+25, 100,10);
	boxBase.shapeColor=color(0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+25, 100,10 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxrightSprite=createSprite(boxPosition+145 , boxY, 10,150);
	boxrightSprite.shapeColor=color(0);

	boxRightBody = Bodies.rectangle(boxPosition+145 , boxY, 10,150 , {isStatic:true} );
	World.add(world, boxRightBody);

	ground = new Ground(400,650,800,10)
	paper = new Paper(10,625,15)
	dustbin = createSprite(700,615,10,10)	
	dustbin.addImage(dustbinImage)
	dustbin.scale = 0.25

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
  ground.display()


 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:40,y:-40})
	}
}



