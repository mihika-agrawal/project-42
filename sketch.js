const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
  Bodies = Matter.Bodies;

var batman,bwalking;
var lightning,l1;
var drops;

function preload(){
    bwalking = loadAnimation("images/walking_1.png", "images/walking_2.png", "images/walking_3.png","images/walking_4.png" ,"images/walking_5.png" ,"images/walking_6.png" ,"images/walking_7.png"
    ,"images/walking_8.png");
    l1= loadAnimation("images/1.png","images/2.png", "images/3.png", "images/4.png");
}

function setup(){
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world; 
   
   batman= createSprite(400,700,50,50);
   batman.addAnimation("walking",bwalking);
   batman.scale= 0.5;
   lightning= createSprite(400,100,50,50);
   lightning.addAnimation("light",l1);
   lightning.scale=0.5;

   var maxDrops=0;
   /*for(var i=0; i<maxDrops; i++ ){
     drops.push(new createDrop(random(0,400),random(0,200)));
   }*/
   if(maxDrops<100 && frameCount%5===0){
       drops= new Drop(random(0,800),random(0,400));
       maxDrops++;
   }
   
}

function draw(){
    background("black");
    Engine.update(engine); 

    drops.display();
    drops.update();
    drawSprites();  
}   

