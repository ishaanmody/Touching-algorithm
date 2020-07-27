var m;
var s;


function setup() {
  createCanvas(800,400);
 s= createSprite(400, 200, 50, 50);
 m=createSprite(800,200,50,50);
s.shapeColor="green";
m.shapeColor="green";

}

function draw() {
  background("#C0C0C0");  

 m.x=mouseX;
 m.y=mouseY;

if (m.x-s.x<m.width/2+s.width/2&&s.x-m.x<m.width/2+s.width/2&&s.y-m.y<m.height/2+s.height/2&&m.y-s.y<m.height/2+s.height/2){
m.shapeColor="red";
s.shapeColor="red";

}
else{
  s.shapeColor="green";
  m.shapeColor="green";
}

  drawSprites();
}