//  Gabby Melamed
// 	12/09/19
class Ball {

  //constructs values to pass into the balls

  constructor(x, y, clr, red){
   this.loc = createVector(x, y);
   this.clr = clr;
   this.shade = red;
  }

  run(){
    this.render();
  }//runs render

  render(){
    fill(this.clr);
    ellipse (this.loc.x, this.loc.y, 26, 26);
  }//creates the ball

  set(i){
    this.loc.x = 100 + 30 * i;
  }//sets ball at specific x-values

}//  +++++++++++++++++++++++++++++++++++  End Ball Class
