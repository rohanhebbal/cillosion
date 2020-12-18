var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600,200,100,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  //sum of half widths = 25 + 50 = 75
}

function draw() {
  background(255,255,255); 

  console.log("difference in y positions: ", movingRect.y-fixedRect.y);
  console.log("sum of half height: ",fixedRect.width/2 + movingRect.width/2);

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 
     && fixedRect.y-movingRect.y  < fixedRect.height/2 + movingRect.height/2
     && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2){
     movingRect.shapeColor = "red";
     fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  drawSprites();
}