const Engine = Matter.Engine; //namespace
var abEngine, abWorld;
var ground;

function setup(){
  createCanvas(400, 400);

  abEngine = Engine.create(); //abengine is created
  abWorld = abEngine.world; //abWorld is abEngine's world

  var goptions = {
    isStatic: true
  }
  ground = Matter.Bodies.rectangle(200, 350, 400, 40, goptions); //gound body is created
 // Matter.Body.setStatic(ground, true);
  Matter.World.add(abWorld, ground); //ground is added to the abworld
 // console.log(ground);

}

function draw(){
  background("black");

  Matter.Engine.update(abEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 40);

}