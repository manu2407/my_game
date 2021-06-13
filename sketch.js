
//const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var player,player_img,cop,cop_img,box_img, coins , coins_ing;
var wall1 , HP=100;
var world,engine;
var gameState="level1",level2,END;
var cop5,cop6 ,cop7,cop8;
var gameOver,gameOver_img;
var bg = "png/bg1.png";
var winSound, swordSound , gameOver_Sound;

function preload (){
  player_img=loadImage("png/player.png");
  cop_img=loadImage("png/bot.png");
  box_img=loadImage("png/box.png");
  coins_ing=loadImage("png/coin.png")
  gameOver_img=loadImage("png/gameOver.png")
  winSound = loadSound("sound/winSound.wav");
 swordSound = loadSound("sound/swordSound.wav")
 bg = loadImage("png/bg2.png");
 gameOver_Sound= loadSound("sound/gameOver_Sound.mp3")
}
function setup() {
  createCanvas(2000,1200);
    
    engine = Engine.create();
    world = engine.world;

 player=createSprite(150,900, 50, 50);
 player.addImage(player_img);
 player.scale=0.5;

 cop=createSprite(500,290,20,20);
 cop.addImage(cop_img);
 cop.scale=0.27;

 coins=createSprite(500,200,20,20);
 coins.addImage(coins_ing);
 coins.scale=0.23

 cop2=createSprite(900,250,20,20);
 cop2.addImage(cop_img);
 cop2.scale=0.27;

 cop3=createSprite(1100,600,20,20);
 cop3.addImage(cop_img);
 cop3.scale=0.27
 
 cop4=createSprite(200,290,20,20);
 cop4.addImage(cop_img);
 cop4.scale=0.27;

wall1=createSprite(100,600,40,800);
wall2=createSprite(600,1000,600,40);
wall3= createSprite(690,700,1200,40);
wall4 = createSprite (300,200,40,600);
wall5 = createSprite(600,1000,1000,40);
wall6 = createSprite(620,200,40,600);
wall7 =createSprite (980,480,700,40);
wall8 = createSprite (1000,140,40,380);
wall1.shapeColor="0";
wall2.shapeColor="0";
wall3.shapeColor="0";
wall4.shapeColor="0";
wall5.shapeColor="0";
wall6.shapeColor="0";
wall7.shapeColor="0";
wall8.shapeColor="0";


cop5 = createSprite(-100,920,40,40);
    cop5.addImage(cop_img);
    cop5. scale=0.27;
    cop6 = createSprite(-300,170,40,40);
    cop6.addImage(cop_img);
    cop6.scale=0.27;
    cop7=createSprite(-340,-50,40,40);
    cop7.addImage(cop_img);
    cop7.scale=0.27;
    cop8=createSprite(-360,-500,100,100);
    cop8.addImage(cop_img);
    cop8.scale=1;

    cop5.visible = false;
    cop6.visible = false;
    cop7.visible = false;
    cop8.visible = false;

    coins2=createSprite(10,-50,20,20);
    coins2.addImage(coins_ing);
    coins2.scale=0.27;
    coins2.visible = false;
    box1=createSprite(30,120,100,100);
    box1.addImage(box_img);
    box1.scale=0.5;
    box1.visible = false;
    box2=createSprite(30,720,100,100);
    box2.addImage(box_img);
    box2.scale=0.5;
    box2.visible = false;
    box3=createSprite(-170,700,100,100);
    box3.addImage(box_img);
    box3.scale=0.5;
    box3.visible = false;
    box4=createSprite(-500,10,100,100);
    box4.addImage(box_img);
    box4.scale=0.5;
    box4.visible = false;

    gameOver=createSprite(player.x,player.y, 200, 200);

    gameOver.addImage(gameOver_img);
   gameOver.visible = false;
}

function draw() {
  background(bg); 

 textSize(20);
 fill("red");
  text("Hp: "+HP,player.x,player.y-40);
gameOver.x=player.x;
gameOver.y=player.y
  camera.x=player.x;
 camera.y=player.y;
if( keyDown (UP_ARROW) ){
 player.rotation=0;
  player.y=player.y-30;
 }
if(keyDown(DOWN_ARROW)){
player.rotation=180;
  player.y=player.y+30;
 }
if(keyDown(RIGHT_ARROW)){
  player.rotation=90;
player.x=player.x+30;
}
if(keyDown(LEFT_ARROW)){
player.rotation=-90;
  player.x=player.x-30;
}

if(gameState==="level1"){

player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(wall4);
player.bounceOff(wall5);
player.bounceOff(wall6);
player.bounceOff(wall7);
player.bounceOff(wall8);

if(player.isTouching(cop)){
cop.destroy();
HP=HP-15;
swordSound.play();
}
if(player.isTouching(cop4)){
  cop4.destroy();
  HP=HP-15;
  gameState="level2";
  swordSound.play();
  }
  if(player.isTouching(cop3)){
    cop3.destroy();
    HP=HP-15;
    swordSound.play();
    }
    if(player.isTouching(cop2)){
      cop2.destroy();
      HP=HP-15;
      swordSound.play();
      }

      if(player.isTouching(coins)){
        HP=100;
        coins.destroy();
        swordSound.play();
      }
   
 }
   if(gameState==="level2"){
  
    cop5.visible = true;cop6.visible = true;cop7.visible = true;cop8.visible = true;
    coins2.visible = true;
    box1.visible = true;box2.visible = true;box3.visible = true;box4.visible = true;
    wall9  = createSprite(-50,1000,700,40);
    wall10 = createSprite(-50,300, 40,700);
    wall11 = createSprite(-250,700,40,800);
    wall12 = createSprite(-10,10 , 800,40);
    wall13 = createSprite(-490,300,500,40);
    wall14 = createSprite(-590,10, 40,800);
    wall9.shapeColor="yellow";
    wall10.shapeColor="yellow";
    wall11.shapeColor="yellow";
    wall12.shapeColor="yellow";
    wall13.shapeColor="yellow";
    wall14.shapeColor="yellow";


    player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.bounceOff(wall3);
    player.bounceOff(wall4);
    player.bounceOff(wall5);
    player.bounceOff(wall6);
    player.bounceOff(wall7);
    player.bounceOff(wall8);
    player.bounceOff(wall9);
    player.bounceOff(wall11);
    player.bounceOff(wall10);
    player.bounceOff(wall12);
    player.bounceOff(wall13);
    player.bounceOff(wall14);

    if(player.isTouching(cop5)){
      cop5.destroy();
      HP=HP-20;
      swordSound.play();}
     if(player.isTouching(cop6)){
        cop6.destroy();
        HP=HP-20;
        swordSound.play();
        }
        if(player.isTouching(cop7)){
          cop7.destroy();
          HP=HP-20;
          swordSound.play();
          }
          if(player.isTouching(cop8)){
            cop8.destroy();
            swordSound.play();
           if(HP > 5)
           { winSound.play();}
            
            HP=HP-50;
            }
            if(player.isTouching(coins2)){
              swordSound.play();
              coins2.destroy();
              HP=HP+55;
              }
           
              if(player.isTouching(box1)){
                swordSound.play();
                box1.destroy();
                HP=HP-5;
                }
                if(player.isTouching(box2)){
                  swordSound.play();
                  box2.destroy();
                  HP=HP-5;
                  }
                  if(player.isTouching(box3)){
                    swordSound.play();
                    box3.destroy();
                    HP=HP-5;
                      }
                      if(player.isTouching(box4)){
                        swordSound.play();
                        box4.destroy();
                        HP=HP-5;
                        }

                        if(HP < 0){
                          gameState=END;
                        }
          }
          if(gameState===END){
            HP=0;
gameOver_Sound.play();
            gameOver.visible = true;
            text("Please press restart button in yory chorme to play again the game",player.x-200,player.y-200)
          }
            
            

       /*  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "png/bg1.png";
    }
    else{
        bg = "png/bg2.png";
    }
    backgroundImg = loadImage(bg);
  }*/
    
          
        
drawSprites();

}