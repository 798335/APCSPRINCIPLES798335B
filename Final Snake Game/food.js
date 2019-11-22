
class Food {
  constructor(x, y){
    this.food = createVector(x, y)
    this.w = 30;
    this.h = 30;
    this.clr = color(255, 0, 0);
  }//set parameters for food constructor

  run() {
    this.render();
    this.update();
  }//makes food functions run

  render() {
    fill(this.clr);
    rect(this.food.x, this.food.y, this.w, this.h);
  }//makes food appear

  update() {
    var i = 0;
//snake vs. food collision

    if(snake.head.x + 15 >= this.food.x &&
        snake.head.x <= this.food.x + this.w &&
        snake.head.y + 15 >= this.food.y &&
        snake.head.y <= this.food.y + this.h){
        this.food.x = random(100, 700);
        this.food.y = random(100, 700);//changes location of food when snake collides with it
        this.render();//renders the food in the new location
        snake.loadBody();//calls the snake load body function
        score++;//increases the score by 1
      }
    }

  }//food class
