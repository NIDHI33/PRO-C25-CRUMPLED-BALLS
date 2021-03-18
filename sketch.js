
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1= new Paper (300,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("light blue");
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();



  
  textSize(30);
  text("Press UP_ARROW Key To Move Paper ball",40,100);

}
function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

	}
}

