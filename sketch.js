var ghost,ghostImg;
var door,doorImg;
var climber,climberImg;
var tower,towerImg;
var sppokySound;
var doorsGroup,climbersGroup,invisibleBlockGroup;
var gamestate= "play"

function preload (){
  
  ghostImg = loadAnimation("ghost-standing.png");
  climberImg = loadImage("climber.png");
  doorImg = loadImage("door.png");
  towerImg = loadImage("tower.png");
  
  
  spookySound=loadSound("spooky.wav");
  
  
  
  
  
  
}

function setup(){
 createCanvas(1000,1000);
  
  spookySound.loop();
  
  tower = createSprite(500,500,1000,1000);
  tower.addImage(towerImg);
  tower.velocityY=1;
  tower.scale=1.7;
  
  ghost = createSprite(500,500);
  ghost.addAnimation("ghostRunner",ghostImg);
  ghost.scale=0.3;
  
  
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
  
   
}

function draw(){
  background(0);

  

 if(gamestate === "play"){
   
 
  if (keyDown("space")){
      
      ghost.velocityY=-3;
      
      }
  ghost.velocityY=ghost.velocityY+0.5;
     if(tower.y>400){
     tower.y=200;
     } 
  if (keyDown("RIGHT_ARROW")){
      
      ghost.x=ghost.x+3;
      
      }
  if (keyDown("LEFT_ARROW")){
      
      ghost.x=ghost.x-3;
      
      }
  if (climbersGroup.isTouching(ghost)){
    
    ghost.velocityY=0;
  }
  
  if (invisibleBlockGroup.isTouching(ghost)|| ghost.y>1000){
 gamestate="end"
    ghost.destroy();
    tower.destroy();
    doorsGroup.destroyEach();
    climbersGroup.destroyEach();
    invisibleBlockGroup.destroyEach();
  }

   
      spawnDoor();
 }
       if(gamestate==="end"){
         fill("red");
       text("GAME OVER",500,500);
     }
  
  

  
  
  
  
  
  
  
  
  

 drawSprites(); 
}
function spawnDoor(){
  
 if(frameCount%240 === 0) {
   

  door = createSprite(500,200);
  door.addImage("door",doorImg);
  door.lifetime=600;
   door.velocityY=1;
  door.x=Math.round(random (350,700));
  console.log(door.x);
   door.depth=ghost.depth;
   ghost.depth=ghost.depth+1;
   climber = createSprite(500,250);
  climber.addImage("climber",climberImg);
  climber.lifetime=600;
   climber.velocityY=1;
  climber.x=door.x;
   
   var invisibleBlock = createSprite(200,270);
   invisibleBlock.x=door.x;
   invisibleBlock.velocityY=1;
   invisibleBlock.width=climber.width;
   invisibleBlock.height=2;
   invisibleBlock.debug=true;
   
   doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
   
 } 
  
  
  
  
  
  
}


























