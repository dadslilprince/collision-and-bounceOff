var movingRect,fixedRect;
var gameObject1;
var gameObject2,gameObject3;



function setup() {
  createCanvas(800,400);

  movingRect =createSprite(400,200,70,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect = createSprite(400,250,50,70);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
  
  gameObject1=createSprite(150,300,60,60);
  gameObject1.shapeColor="white";
  
  gameObject2=createSprite(50,50,30,30);
  gameObject2.shapeColor="white";
  
  gameObject3=createSprite(750,50,30,30);
  gameObject3.shapeColor="magenta";

  gameObject2.velocityX=3;
  
  gameObject3.velocityX=-3;
}

function draw() {
  background("slategrey");  

  movingRect.y= mouseY;
  movingRect.x=mouseX;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);

 if( isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="purple";
  fixedRect.shapeColor="purple";
 } else {
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
 }

 if(isTouching(gameObject1,movingRect)){
   gameObject1.shapeColor="yellow";
   movingRect.shapeColor="yellow"

 }else{
  gameObject1.shapeColor="black";
  movingRect.shapeColor="orange"
 }
 bounceOff(gameObject2,gameObject3);

  drawSprites();
}

