class paperBall {
    constructor(x, y, radius) {
  var options = {
    restitution: 1,
    friction:0.5,
    density:1.2
}
this.body = Bodies.circle(x, y, radius, options);
this.body.radius = 15;
this.body = loadImage("sprites/paperball.png");

World.add(world, this.body);
}
display(){
fill("green");
ellipseMode(RADIUS);
ellipse(this.body.position.x, this.body.position.y, this.radius);
//this.body.display();
  }
}     