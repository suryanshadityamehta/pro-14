var ballon1, balloon2, balloon3, balloon4, balloon2Image, balloon1Image, balloon3Image, balloon4Image, background1, num, bow, bowImage, arrow, arrowImage;



function preload(){
 
 backgroundImage = loadImage("background0.png");
 balloon1Image = loadImage("blue_balloon0.png");
 balloon2Image = loadImage("red_balloon0.png");
 balloon3Image = loadImage("pink_balloon0.png");
 balloon4Image = loadImage("green_balloon0.png");

 bow1Image = loadImage("bow0.png");
  
 arrowImage = loadImage("arrow0.png");
  
}

function setup() {
  
  createCanvas(400, 400);
  
  background1 = createSprite(300, 200, 300, 300);
  background1.addImage("background", backgroundImage);
  background1.scale = 1.5;
  background1.x = background1.width /2;
  background1.velocityX = -4;
                        
  for(num = 55; num<350; num = num+70){
  balloon1 = createSprite(50, num, 10, 10);
  balloon1.addImage("balloon", balloon1Image);
  balloon1.scale = 0.1;
  }
  
  for(num = 100; num<330; num = num+70){
  balloon2 = createSprite(120, num, 10, 10);
  balloon2.addImage("balloon", balloon2Image);
  balloon2.scale = 0.085;
  }
  
  for(num = 145; num<300; num = num+70){
  balloon3 = createSprite(190, num, 10, 10);
  balloon3.addImage("balloon", balloon3Image);
  balloon3.scale = 1.1;
  }
  
  for(num = 190; num<280; num = num+70){
  balloon4 = createSprite(250, num, 10, 10);
  balloon4.addImage("balloon", balloon4Image);
  balloon4.scale = 0.08;
  }
  
  bow = createSprite(380, 200, 10, 10);
  bow.addImage("bow", bow1Image);
  bow.scale = 1.5;
  
  
  
}

function draw() {

  background(150);
  
  if (keyDown("space")){
    arrow = createSprite(390, 200, 10, 10);
    arrow.addImage("arrow", arrowImage);
    arrow.scale = 0.25; 
    arrow.velocityX = -3;
    arrow.y  = bow.y;
  }
  if (background1.x < 100) {
  background1.x = background1.width/2 ;
}
  
  bow.y = mouseY;
  
  drawSprites();
  
  
  fill("black");
  textSize(20);
  text ("Press Space to Serve", 110, 35);
  
}

