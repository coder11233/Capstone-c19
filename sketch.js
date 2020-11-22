var walll,walllImage;
var gho,ghoImage;
var stone,stoneImage;
var coin,coinImage;
var score=0;



function preload(){
walllImage=loadImage("walll.jpg");
ghoImage=loadImage("gho.png"); 
stoneImage=loadImage("stone.png"); 
coinImage=loadImage("coin.png");  
 spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
   spookySound.loop();
 walll=createSprite(300, 300);
 walll.addImage(walllImage); 
 walll.scale=0.7; 
 
  
 gho=createSprite(290, 500, 40, 40);
 gho.addImage(ghoImage); 
 gho.scale=0.4; 
  
  //coin=createSprite(290, 500, 40, 40);
 //coin.addImage(coinImage); 
 //coin.scale=0.65; 
  
  
  stoneGroup= new Group();
  coinGroup=new Group();
}

function draw() {
 background(0);
 
    
    
  walll.velocityY=1;
  
  if(walllImage.y<0){
  
    walllImage.y=walllImage.heigth/2;
    
  
  }
  if(walll.y > 500){
      walll.y = 400
    }
  
  
  if(keyDown("left_arrow")){
      gho.x = gho.x - 3;
    }
    
    if(keyDown("right_arrow")){
      gho.x = gho.x + 3;
    }
    
    if(keyDown("space")){
      gho.velocityY = -10;
    }
    gho.velocityY = gho.velocityY + 0.8;
  
  if(stoneGroup.isTouching(gho)){
     stoneGroup.destroyEach()
     score=score-1;
     
     }
  
    if(coinGroup.isTouching(gho)){
     coinGroup.destroyEach()
      score=score+1; 
     
     }
 
    spawnstone();
    spawncoin();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,430,50);
}


function spawnstone(){
if(frameCount % 150 === 0){
      var stone = createSprite(100,10);
     stone.x = Math.round(random(10,500));
     
     stone.velocityY=4;
     stone.scale=0.15;
     
      stoneGroup.add(stone);
  stone.addImage(stoneImage);
      stone.lifetime=250;
  
    }
}

function spawncoin(){
if(frameCount % 80 === 0){
      var coin = createSprite(100,10);
     coin.x = Math.round(random(0,500));
     
     coin.velocityY=4;
     coin.scale=0.18;
     
      coinGroup.add(coin);
  coin.addImage(coinImage);
      coin.lifetime=250;
  
    }
}