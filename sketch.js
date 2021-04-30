var shlok;
var ballista,bombard,tarpump,stormcaller,rocketlauncher,flamer;
var ballImg,bombImg,tarImg,stormImg,rocketImg,flameImg;
var bubblies,blavy,magikmons,windy,bobby,blob,biggy,wond;
var bubImg,blImg,magicImg,windImg,bobImg,bigImg,wImg;
var star,starImg,star2;
var level,level1,levcel2,level3,level4,levelbutton1,levelbutton2;
var lb1,lb2,lb3,lb4;
var gameState = "enter";
var wall,path;
var flag,flagImg;

function preload() {

  shlok = loadImage("kingrugni.jfif");
  ballImg = loadImage("ballista.jpg");
  bombImg = loadImage("bombard.jpg");
  tarImg = loadImage("tarpump.jpg");
  stormImg = loadImage("stormcaller.jpg");
  rocketImg = loadImage("rocketlauncher.jpg");
  flameImg = loadImage("flamer.jpg");
  starImg = loadImage("star2.png");
  levelbutton1 = loadImage("levelbuttonf.jpg");
  levelbutton2 = loadImage("bluelevelbutton.png");
  wall = loadImage("wall,tree.png");
  path = loadImage("path.png");
  bubImg  =loadImage("monster1.png");
  flagImg = loadImage("flag.png");
}

function setup() {
  createCanvas(1200,730);
  ballista = createSprite(205,150,50,50);
  ballista.addImage(ballImg);
  ballista.scale = 0.75;

  bombard = createSprite(125,170,50,50);
  bombard.addImage(bombImg);
  bombard.scale = 0.75;

  tarpump = createSprite(-221,330,50,50);
  tarpump.addImage(tarImg);
  tarpump.scale = 0.9;

  stormcaller = createSprite(27,333,50,50);
  stormcaller.addImage(stormImg);
  stormcaller.scale = 0.8;

  rocketlauncher = createSprite(100,230,50,50);
  rocketlauncher.addImage(rocketImg);
  rocketlauncher.scale = 0.8;

  flamer = createSprite(335,255,50,50);
  flamer.addImage(flameImg);
  flamer.scale = 0.75;

  star2 = createSprite(125,45,20,20);
  star2.addImage(starImg);
  star2.scale = 0.1;

  level1 = createSprite(445,600,20,20);
  level1.addImage(levelbutton1);
  level1.scale = 0.1;

  level2 = createSprite(545,600,20,20);
  level2.addImage(levelbutton2);
  level2.scale = 1;

  level3 = createSprite(645,600,20,20);
  level3.addImage(levelbutton1);
  level3.scale = 0.1;

  level4 = createSprite(745,600,20,20);
  level4.addImage(levelbutton2);
  level4.scale = 1;

  level = 0;
  star = 3;

  lb1 = createSprite(445,600,30,30);
  lb1.visible = false;
  lb2 = createSprite(545,600,30,30);
  lb2.visible = false;
  lb3 = createSprite(645,600,30,30);
  lb3.visible = false;
  lb4 = createSprite(745,600,30,30);
  lb4.visible = false;

  
  d1 = createSprite(10,330,10,500);
  d1.shapeColor = "gold";
  d2 = createSprite(145,330,10,500);
  d2.shapeColor = "gold";
  d3 = createSprite(280,330,10,500);
  d3.shapeColor = "gold";
  d4 = createSprite(145,85,270,10);
  d4.shapeColor  = "black";
  d5 = createSprite(145,220,270,10);
  d5.shapeColor = "black";
  d6 = createSprite(145,400,270,10);
  d6.shapeColor = "black";
  d7 = createSprite(145,580,270,10);
  d7.shapeColor = "black";

  path2 = createSprite(200,365,100,100);
  path2.addImage(path);
  path2.scale = 100
  path2.visible = false;

 
  
}


function draw() {
  background(shlok);
  
  drawSprites();
  if(gameState === "enter") {
  textSize(15);
  textFont("algerian");
  fill("black");
  stroke("black");
  strokeWeight(0.5);
  text("BALLISTA  [0]",23,200);
  text("BOMBARD  [3]",159,200);
  text("TAR PUMP  [9]",23,370);
  text("STORM CALLER  [18]",165,370,100);
  text("ROCKET LAUNCHER  [21]",40,520,50,100);
  text("FLAMER  [24]",160,547);
  textSize(20);
  text(star,150,50);
  path2.visible = false;
}
  
  

  if(mousePressedOver(lb1)) {
    level = 1;
    gameState = "l1";
  }

  if(mousePressedOver(lb2)) {
    level = 2;
    gameState = "l2";
  }

  if(mousePressedOver(lb3)) {
    level = 3;
    gameState = "l3";
  }

  if(mousePressedOver(lb4)) {
    level = 4;
    gameState = "l4";
  }

  if(gameState==="l1") {
    
   
    spawnBubblies(300);
    hide();
    

    for(var i = 0;i<1200;i = i+200) {
      image(wall,i,0,200,200);
      image(wall,i,530,200,200);
   }
      
      createFlag(350,430);
      createFlag(450,430);
      createFlag(550,430);
      createFlag(650,430);
      createFlag(750,430);

      if(mousePressedOver(flag)) {

        if(star == 3) {
          ballista.x = 340
          ballista.y = 430;
          ballista.visible = true;
        }
      }
    }

    if(gameState === "l2") {
      hide();
      
      spawnBubblies(180);
      spawnBubblies(365);
      spawnBubblies(565);
      
      path2.visible = true;
      for(var i = 0;i<1200;i = i+100) {
        image(wall,i,0,100,100);
        image(wall,i,630,100,100);
       }

       for(var i =0;i<1200;i++) {
        image(wall,i,230,1,100);
        image(wall,i,430,1,100);
        }

       
        image(flagImg,200,230,35,50);
        image(flagImg,400,230,35,50);
        image(flagImg,600,230,35,50);
        image(flagImg,800,230,35,50);
        image(flagImg,1000,230,35,50);
        image(flagImg,200,430,35,50);
        image(flagImg,400,430,35,50);
        image(flagImg,600,430,35,50);
        image(flagImg,800,430,35,50);
        image(flagImg,1000,430,35,50);
    }

    if(gameState === "l3") {
      hide();
      path2.visible = true;
      
    }

    if(gameState === "l4") {
      hide();
      path2.visible = true;
    }

    
       
       }
       
      



function hide() {
  
  d1.visible = false;
  d2.visible = false;
  d3. visible = false;
  d4.visible = false;
  d5.visible = false;
  d6.visible = false;
  d7.visible = false;
  star2.visible = false;
  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  ballista.visible = false;
  bombard.visible = false;
  tarpump.visible = false;
  stormcaller.visible = false;
  rocketlauncher.visible = false;
  flamer.visible = false;
}

function spawnBubblies(y) {
  if(frameCount%40 === 0) {
    bubblies = createSprite(0,y,20,20);
    bubblies.velocityX = 3;
    bubblies.addImage(bubImg);
    bubblies.lifetime = 400;
    
  }
}

function createFlag(x,y) {
  flag = createSprite(x,y,20,20);
  flag.addImage(flagImg);
  flag.scale = 1.2;

  if(mousePressedOver(flag)) {
    ballista.visible = true;
    ballista.x = flag.x - 10;
    ballista.y = flag.y;
    ballista.scale = 0.4;

  }
}