const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,gameState="onSling";
var box1, box2, box3,box4,box5,box6,box7,box8;
var hero,monster,rope,ground,backgroundImg,bg,win,playSound,sound;

function preload() {
  //sound=loadSound("win.wav")
    
  rand=Math.round(random(0,1));
  console.log(rand)
  switch(rand){
  case 1: bg = loadImage("gamingbackground2.png");
  break;
  case 0: bg = loadImage("gamingbackground1.jpg");
  break;
  }//getBg()
}

function setup() {
  wW=windowWidth-100;
  wH=windowHeight-200
  createCanvas(wW, wH);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground((wW-800)/2, wH-200, wW-800, 20);

  hero = new Hero(200,wW-100,250);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(wW-900,wH-350,300);

  box1 = new Box(700, wH-500);
  box2 = new Box(600, wH-300);
  box3 = new Box(600, wH-300);
  box4 = new Box(600, wH-300);
  box5 = new Box(600, wH-300);
  box6 = new Box(750, wH-300);
  box7 = new Box(750, wH-300);
  box8 = new Box(750, wH-300);
  

}

function draw() {
 // if (backgroundImg){
  background(bg);
//}  else background("gamingbackground2.png");
  Engine.update(engine);
  textSize(20)
  text("try lowering your page zoom if sprites collide",wW-400,wH-100)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  hero.display();
  rope.display();
  monster.display();
 // while(monster.body.position.y>ground.body.position.y){
  //  sound.play()
  //}
   if (monster.body.position.y>ground.body.position.y){
    textSize(100)
    fill("red")
    stroke(3)
    text("You Saved The Day!",300,wH/2)
   //**if (win){}
   //else 
   
   //playSound()
  }
}
function mouseDragged(){
  if (gameState=="onSling"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  rope.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(hero.body, {x: 300, y: wH-100});
      rope.attach(hero.body);
     gameState="onSling"
  }
}

//async function getBg(){
//  var response = await fetch("https://worldclockapi.com/");
 //   var responseJSON = await response.json();

  //  var datetime = responseJSON.datetime;
  //  var hour = datetime.slice(11,13);
 //   console.log(hour)
//if(hour>=0600 && hour<=1900){
//bg = "gamingbackground1.jpg";
//}
 //   else{
//bg = "gamingbackground2.png";
 ///   }

//backgroundImg = loadImage(bg);}
