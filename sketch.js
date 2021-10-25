var backgroundImg;
var bat_left,bat_right;
var leftBatGroup,rightBatGroup;
var leftZ1Group,leftZ2Group,leftZ3Group;
var rightZ1Group,rightZ2Group,rightZ3Group;
var LZ2,LZ3;
var RZ2,RZ3;
var shooter,shooterImg;
var start,startImg;
var WAIT = 0;
var PLAY = 1;
var END = 2;
var gameState = WAIT;
var gun1, gun2, gun3;
var gun1Img, gun2Img, gun3Img;
var gun1Img2,gun2Img2,gun3Img2;

function preload(){
backgroundImg = loadImage("backGround.png");

bat_left = loadAnimation("BatFlying/left_bat(1).png","BatFlying/left_bat(2).png");
bat_right = loadAnimation("BatFlying/right_bat(1).png","BatFlying/right_bat(2).png");
startImg = loadImage("start.png");
shooterImg = loadImage("player.png");

LZ2 = loadAnimation("LZombie/L_zombie2.png","LZombie/L_zombie2.1.png");
LZ3 = loadAnimation("LZombie/L_zombie3.png","LZombie/L_zombie3.1.png","LZombie/L_zombie3.2.png");

RZ2 = loadAnimation("RZombie/R_zombie2.png","RZombie/R_zombie2.1.png");
RZ3 = loadAnimation("RZombie/R_zombie3.png","RZombie/R_zombie3.1.png","RZombie/R_zombie3.2.png");

gun1Img = loadImage("guns/gun image 1 (2).png");
gun1Img2 = loadImage("guns/gun image 1.png");
gun2Img = loadImage("guns/gun image 2 (2).png");
gun3Img = loadImage("guns/gun image 3 (2).png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

shooter = createSprite(width/2,750,75,150);
shooter.addImage(shooterImg);
shooter.scale=0.05;
shooter.visible =false;

start = createSprite(width/2,height/2,40,10);
start.addImage(startImg);

gun1 = createSprite(width/2 + 50, 715, 50,20);
gun1.addImage("rightside1", gun1Img);
gun1.addImage("leftside1", gun1Img2);
gun1.scale = 0.3;
gun1.visible = false;


leftBatGroup=new Group();
rightBatGroup = new Group();
leftZ1Group = new Group();
leftZ2Group = new Group();
leftZ3Group = new Group();

rightZ1Group = new Group();
rightZ2Group = new Group();
rightZ3Group = new Group();

}

function draw(){
   background("lightblue");

   fill("red");
   textSize(30);
   text("CITY FIGHTER", width/2-100, 200);

   if(mousePressedOver(start)){
      gameState = PLAY;
   }


if(gameState === PLAY){
   background(backgroundImg);

   shooter.visible=true;
   start.visible=false;
   gun1.visible = true;

   if(keyDown("LEFT_ARROW")){
      gun1.x = width/2 - 50;
      gun1.changeImage("leftside1");
   }
   
   if(keyDown("RIGHT_ARROW")){
      gun1.x = width/2 + 50;
      gun1.changeImage("rightside1");
   }
   
   spawnBats();
   spawnLeftZombie();
   spawnRightZombie();


}
drawSprites();
}

function spawnBats(){
    if(frameCount%200 === 0){
       var leftBat = createSprite(0,height-200,30,10);
       leftBat.y=Math.round(random(50,250));
       leftBat.addAnimation("flying",bat_left);
       leftBat.velocityX=3;

       leftBat.scale=0.2
       leftBatGroup.add(leftBat);
    }

    if(frameCount%150 === 0){
        var rightBat = createSprite(width-50,height-200,30,10);
        rightBat.y=Math.round(random(50,250));
        rightBat.addAnimation("flyingRight",bat_right);
        rightBat.velocityX=-3;
 
        rightBat.scale=0.2
        rightBatGroup.add(rightBat);
     }
    
}

function spawnLeftZombie(){


   if(frameCount%250 === 0){
      var leftZ2= createSprite(-50,height-200,30,10);
      leftZ2.y=Math.round(random(height-220,height-300));
      leftZ2.addAnimation("moving2",LZ2);
      leftZ2.velocityX=1.3;
      
      leftZ2.scale=0.5
      leftZ2Group.add(leftZ2);
   }
   
   if(frameCount%350 === 0){
      var leftZ3= createSprite(-50,height-200,30,10);
      leftZ3.y=Math.round(random(height-220,height-300));
      leftZ3.addAnimation("moving3",LZ3);
      leftZ3.velocityX=1;
      
      leftZ3.scale=0.5
      leftZ3Group.add(leftZ3);
   }

}

function spawnRightZombie(){
  // if(frameCount%150 === 0){
  //    var rightZ1= createSprite(width-50,height-200,30,10);
 //     rightZ1.y=Math.round(random(height-220,height-300));
  //    rightZ1.addAnimation("moving1",RZ1);
   //   rightZ1.velocityX=-2;

  //    rightZ1.scale=0.3
   //   rightZ1Group.add(rightZ1);
  // }

   if(frameCount%200 === 0){
      var rightZ2= createSprite(width-50,height-200,30,10);
      rightZ2.y=Math.round(random(height-220,height-300));
      rightZ2.addAnimation("moving2",RZ2);
      rightZ2.velocityX=-1.3;
      
      rightZ2.scale=0.5
      rightZ2Group.add(rightZ2);
   }
   
   if(frameCount%300 === 0){
      var rightZ3= createSprite(width-50,height-200,30,10);
      rightZ3.y=Math.round(random(height-220,height-300));
      rightZ3.addAnimation("moving3",RZ3);
      rightZ3.velocityX=-3;
      
      rightZ3.scale=0.5
      rightZ3Group.add(rightZ3);
   }
}


