const Engine=Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var block1, sling;
var particles=[];
var particle
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0
var gameState="start" 



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
 
 
     for (var j = 75; j <=width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,75));
     }
 
     for (var j = 50; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,175));
     }
 
      for (var j = 75; j <=width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,275));
     }
 
      for (var j = 50; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,375));
     }
 
     
 
     
 }
  






function draw() {
  background(0);
  textSize(25) 
  text("Score : "+score,20,40);
   fill("white");
    textSize(25)
     text(" 500 ", 5, 500);
      text(" 500 ", 80, 500); 
      text(" 500 ", 160, 500);
       text(" 500 ", 240, 500);
        text(" 100 ", 320, 500); 
        text(" 100 ", 400, 500);
         text(" 100 ", 480, 500);
          text(" 200 ", 560, 500);
           text(" 200 ", 640, 500  )
           text("200",720,500)
  Engine.update(engine)
 
  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
    
    plinkos[i].display();
    
  
  }
  if(particle!=null)
  { particle.display(); 
    if (particle.body.position.y>760)
    { if (particle.body.position.x < 300) { 
      score=score+500;
       particle=null; 
      if ( count>= 5) gameState ="end";
     }
      else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
         score = score + 100;
          particle=null;
           if ( count>= 5) gameState ="end";
           } 
           else if (particle.body.position.x < 900 && particle.body.position.x > 601 ){
              score = score + 200;
               particle=null;
                if ( count>= 5) gameState ="end"; } } }



  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
}
function mousePressed(){
if(gameState!=="end"){

  particle= new Particle(mouseX,10,10,10)
}
}
