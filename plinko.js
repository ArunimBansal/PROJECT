class Plinko{
    constructor(x, y) {
      var options = {
        'density':0.3,
        'friction': 1.5,
        'restitution':0.5,
        isStatic:true,
      };
      this.body = Bodies.circle(x, y,5, options);
      this.r=5;
       World.add(world, this.body);
    
    };
  display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle)
      ellipseMode(RADIUS)
      ellipse(0,0,this.r)
     pop();
    };
  

  }