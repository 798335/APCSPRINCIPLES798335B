class Snake {
  constructor(x, y, w, h) {
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    this.body = [];
    this.vel = createVector(0, 0);
  }//sets parameters for the snake constructor

  run() {
    this.renderhead();
    this.update();
    this.checkEdges();
    this.tangled();
  }//runs all snake class functions

  loadBody(){
        this.body.push(createVector(this.head.x + 15, this.head.y + 15));
      }//pushes a new item onto the snake body array

  renderhead() {
    fill(255, 97, 181);
    rect(this.head.x, this.head.y, this.w, this.h);
  }//makes snake head appear

  renderbody() {
    fill(255, 97, 181);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, this.w, this.h);
    }
  }//makes snake body appear

  update() {
    this.keyReleased();//calls the key released function

    for(var i = this.body.length - 1; i >= 0; i--){
      if (i === 0){
      this.body[i].x = this.head.x;
      this.body[i].y = this.head.y;//sets the 0 index of the body array to the position of the head when the snake moves
    }else if(i > 0){
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;//sets each body segment to replace the one in front of it when the snake moves
    }
    }
    this.head.add(this.vel);//adds velocity to the head of the snake
    this.renderbody();//makes body with segments appear
  }

  tangled(){
    //for loop that checks to see where each segment in the array is
    for(var i = 0; i < this.body.length; i++){
      if(this.head.x === this.body[i].x && this.head.y === this.body[i].y){
        gameState = 3;//sets game state to 3 if the snake head and body get tangled
      }
    }
  }

  keyReleased() {
  if(keyCode === UP_ARROW) {
    this.vel.x = 0;
    this.vel.y = -5;
  }
  if(keyCode === DOWN_ARROW) {
    this.vel.x = 0;
    this.vel.y = 5;
    }
  if(keyCode === LEFT_ARROW) {
    this.vel.x = -5;
    this.vel.y = 0;
  }
if(keyCode === RIGHT_ARROW) {
  this.vel.x = 5;
  this.vel.y = 0;
    }
  }//makes snake move when arrow keys are pressed

  checkEdges() {
    if(this.head.x > 800 ||
      this.head.x < 0 ||
      this.head.y > 800 ||
      this.head.y < 0){
        gameState = 3;
      }
  }//checks to see if the snake has gone off the screen
  //if it has, the game state will be set to 3 which is the end game state
}//snake class
