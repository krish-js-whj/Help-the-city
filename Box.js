class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, 140, 70, options);
    this.width = 130;
    this.height = 70;
    this.image=loadImage("magma.jpeg");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
  //  strokeWeight(4);
  //  stroke("black");
  //  fill("red");
   // rect(0, 0, this.width, this.height);
    image(this.image, (-70),(-35),this.width, this.height)
    pop();
  }
}