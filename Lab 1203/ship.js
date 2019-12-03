class Ship {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.id = id;
   this.acc = createVector(0,0);
   this.angle = 0;
   this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;

    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.x = -this.vel.x;

    }
    if(this.loc.y > height){
      this.vel.x = -this.vel.x;

    }
  }

update(){
  this.angle = this.acc.heading() + PI/2;
  this.vel.add(this.acc);
  this.vel.limit(2);
  this.loc.add(this.vel);
  var distToPlanet;
  distToPlanet = this.loc.dist(planet.loc);



   if(distToPlanet < 250){
     //add attraction to the ball
     this.acc = p5.Vector.sub(planet.loc, this.loc);
     this.acc.normalize();
     this.acc.mult(0.1);
     planet.x = random(100, 700);
     planet.y = random(100, 700);
   }

}

render(){
  fill(this.clr);

  //this.angle + 0.1;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5, 8, 5, 8, 0, -8);
  pop();
}

}
