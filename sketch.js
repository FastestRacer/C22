// Renaming the Modules of  Matter.js library -- NameSpacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// declaring variables to hold engine and other objects in the simulation
var engine,world;

var ground,ball;



function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  
  // Renaming the world that is created automatically when an engine is created
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  console.log(ground);

  var ball_options= {
    restitution: 2
  }
  












  ball= Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);


  console.log(ball);



}
function draw()
{
  background("lightblue");

  Engine.update(engine);

  // console.log(ground.position.x);
  // console.log(ground.position.y);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  



  
}
