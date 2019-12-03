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
      this.loc.x = width; //when it hits side, warps to come out of other side
    }
    if(this.loc.x > width){
      this.loc.x = 0;

    }
    if(this.loc.y < 0){
      this.loc.y = height;//when it hits side, warps to come out of other side
    }
    if(this.loc.y > height){
      this.loc.y = 0;

    }
  }

update(){
  this.angle = this.acc.heading() + PI/2;
  this.vel.add(this.acc);
  this.vel.limit(2);
  this.loc.add(this.vel);
  var distToMainBall;
  var distToMainBall2;
  if(this.id > 2){
  distToMainBall = this.loc.dist(mainBall.loc);
  distToMainBall2 = this.loc.dist(mainBall2.loc);


   if(distToMainBall < 250){
     //add attraction to the ball
     this.acc = p5.Vector.sub(mainBall.loc, this.loc);
     this.acc.normalize();
     this.acc.mult(0.1);
   }

   if(distToMainBall2 < 150){
     // add repulsion to the ball
     this.acc = p5.Vector.sub(this.loc, mainBall2.loc);
     this.acc.normalize();
     this.acc.mult(0.5);
}
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
