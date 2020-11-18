
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 
  monkey=createSprite(80,355,20,20);
  monkey.addAnimation("running ",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,390,990,8);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}

function draw() {
background("white");
  if(ground.x<0){
     ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:",200,200);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivaltime,100,50)
  
  drawSprites();
  food();
  obstacle();
}

function food(){
  if(frameCount%80==0){
   var banana=createSprite(380,250,50,50);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(250,200));
    banana.lifetime=130;
    banana.velocityX=-3;
    //foodGroup.add(banana);
  }   
}

function obstacle(){
  if(frameCount%300==0){
    var obstacle=createSprite(380,350,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4; 
    obstacle.lifetime=100;
    //obstacleGroup.add(obstacle)
  }
}


