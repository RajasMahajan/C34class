
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(350,650,600,30,{isStatic:true});
	World.add(world,ground);
	ball=new Ball(300,160);
	box1=new Box(600,200);
	box3=new Box(600,200);
	box4=new Box(600,200);
	box2=new Box(600,200);
	box5=new Box(600,200);
	box6=new Box(520,200);
	box7=new Box(520,200);
	box8=new Box(520,200);
	box9=new Box(520,200);
	box10=new Box(520,200);
	rope1=new Rope(ball.body,{x:300,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,30);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  rope1.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

