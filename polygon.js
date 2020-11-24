class Bob {
    constructor(x, y,radius) {
      this.image=loadImage("sprites/paper.png")

      this.body=loadImage(polygon.polygon)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(100,100,150);
      ellipseMode(RADIUS);
      circle(0, 0,this.radius );
      pop();
    }
  };