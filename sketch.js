const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var montaña;
var fondo;
var slingshoot;
var log6;
function preload(){
    fondo=loadImage("sprites/haloween2.jpg"); 
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    montaña = new Ground(100,350,250,300)

    box1 = new Box(750,320,70,70);
    box2 = new Box(970,320,70,70);
    pig1 = new Pig(860, 350);
    log1 = new Log(860,260,300, PI/2);

    box3 = new Box(750,240,70,70);
    box4 = new Box(970,240,70,70);
    pig3 = new Pig(860, 220);

    log3 =  new Log(860,180,300, PI/2);

    box5 = new Box(860,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    log6 = new Log(150,300,90,PI/2);
    slingshoot = new Slingshoot(bird.body,{ x: 200, y: 100 });
}

function draw(){
    background(fondo);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    montaña.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
     
    bird.display();
    log6.display();
    slingshoot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    slingshoot.fly();
}