const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var score= 0;  
var bg     
var backgroundImg;

function preload(){
  getBackgroundImg();
}
function setup() {
  var canvas= createCanvas(1000,800);
 
  engine= Engine.create();
  world = engine.world;
 

  ground = new Ground(400,780,1500,30)
  ground2= new Ground(750,340,275,20);
  ground3= new Ground(420,580,300,20);
  polygon= new Polygon(100,400,50,50);
  slingshot= new SlingShot(polygon.body,{x:100, y:400});

  //Boxes 1
  box1 = new Box(530,560,50,40);
  box2 = new Box(475,560,50,40);
  box3 = new Box(420, 560,50,40);
  box4 = new Box(365,560,50,40);
  box5 = new Box(310,560,50,40);
  box6 = new Box(500,513,50,40);
  box7 = new Box(445,513,50,40);
  box8 = new Box(390,513,50,40);
  box9 = new Box(335,513,50,40);
  box10= new Box(480,444,50,40);
  box11= new Box(425,444,50,40);
  box12= new Box(370,444,50,40);
  box13= new Box(450,409,50,40);
  box14= new Box(395,409,50,40);
  box15= new Box(423,363,50,40);
//Boxes 2
  box16= new Box(836,326,50,40);
  box17= new Box(780,326,50,40);
  box18= new Box(724,326,50,40);
  box19= new Box(668,326,50,40);
  box20= new Box(808,283,50,40);
  box21= new Box(753,283,50,40);
  box22= new Box(698,283,50,40);
  box23= new Box(775,243,50,40);
  box24= new Box(720,243,50,40);
  box25= new Box(748,200,50,40);
}

function draw() {
   if(backgroundImg)
    background(backgroundImg);
  //background(0);
   
    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY); 
    textSize(20);
    text("Shoot the Polygon towards the boxes",360,70);
    text("SCORE : "+score,370,90);

 Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();
  polygon.display();
  slingshot.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function score(){
  if (this.visiblity<0 && this.visiblity>-105){
    score++;
  }
}

function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImg(){
  var response=await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJSON = await response.json();
  //console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=19){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg2.jpg";
  }

 backgroundImg = loadImage(bg);
 console.log(backgroundImg);
}