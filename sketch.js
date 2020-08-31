var bullet,wall;
var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)
thickness=random(22,3)

	bullet=createSprite(50, 200, 50,50);   


	bullet.shapeColor=color(255);


  
  	wall=createSprite(1500,200,thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  bullet.velocityX = speed;
  if(collided(bullet,wall))
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(deformation<10)
	{
		wall.shapeColor=color(0,255,0);
	}

	 
  }  
  
  drawSprites();
}

  function collided(ob1,ob2){
bulletRightEdge=ob1.x+ob1.width;
wallLeftEdge=ob2.x;
if(bulletRightEdge<=wallLeftEdge){
return true
}
return false;
}
  
 

