var backgroundimg;
var missileimg;
var missile,soldierimg,soldier;
var wallW,wallE,wallN,wallS;
var bhoom,bhoomimg;
var gs = "play"
function preload(){
  backgroundimg = loadImage("background.jpg")
  missileimg = loadImage("missile.png")
  soldierimg = loadImage("soldier.gif")
  bhoomimg = loadImage("bhoom.png")
  
}


function setup() {
  createCanvas(displayWidth,700);
  missile =  createSprite(400, 50, 50, 50);
  missile.addImage(missileimg)
  missile.scale = 0.2
  soldier = createSprite(400,600,50,50)
  soldier.addImage(soldierimg)
  soldier.scale= 0.5
  wallW= createSprite(10,10,10,1500)
  wallW.visible = false
  wallE= createSprite(1500,10,10,1500)
  wallE.visible = false
  wallN= createSprite(10,10,3000,10)
  wallN.visible = false
  //bhoom= createSprite()
  wallS= createSprite(10,700,3000,10)
  soldier.velocityX = -20;
  

 
}

function draw() {
  background(backgroundimg);
  
  if(gs ==="play"){

  
 // missile.bounceOff (wallE);
  if(missile.isTouching(wallE)){
    missile.velocityX = 0;
  }
  if(wallE.isTouching(missile)){
    missile.velocityX = 0;
  } 
  //missile.bounceOff (wallW);
  if(missile.isTouching(wallW)){
    missile.velocityX = 0;
  }
  if(wallW.isTouching(missile)){
    missile.velocityX = 0;
  } 
   soldier.bounceOff (wallE);
  if(soldier.isTouching(wallE)){
    soldier.velocityX = 8;
  }
  if(wallE.isTouching(soldier)){
    soldier.velocityX = 8;
  } 
  soldier.bounceOff (wallE);
  if(soldier.isTouching(wallE)){
    soldier.velocityX = 8;
  }
  if(wallE.isTouching(soldier)){
    soldier.velocityX = 8;
  } 
  soldier.bounceOff (wallW);
  if(soldier.isTouching(wallW)){
    soldier.velocityX = -8;
  }
 
    
  if(missile.isTouching(wallN)){
    missile.velocityY = 0;
    
  }
  if(wallN.isTouching(missile)){
    missile.velocityY = 0;
  } 
  //  missile.bounceOff (wallE);
  if(missile.isTouching(wallS)){
      bhoom = createSprite(10,10,10,10)

  }
  if(keyDown("left")){
    missile.velocityX = -4
  }
  if(keyDown("right")){
    missile.velocityX = 4
  }
  if(keyDown("down")){
    missile.velocityY = 10
  }
  if(keyDown("up")){
    missile.velocityY = -15
  }
  if (missile.isTouching(soldier)){
    bhoom = createSprite(soldier.x,soldier.y,10,10)
    bhoom.addImage(bhoomimg)
    soldier.destroy()
    gs = "end";
  }
  if(keyDown("A")){
    soldier.velocityX = -10
  }
  if(keyDown("D")){
    soldier.velocityX = 10
  }

}
if(keyDown("space")){
  gs = "play"
}
 
  
  drawSprites();
}
