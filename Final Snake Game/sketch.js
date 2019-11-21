//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var gameState = 1;
var buttonStart;
var x = 0;
var startButton, replayButton;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);
  //frameRate(10);
  loadObjects();
//  makeButtons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  snake.run();
  food.run();
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    gameMode();
  }else if(gameState === 3){
    endGame();
  }//else if(gameState === 4){
    //instructions();
  //}
}

//function startGame() {
  //clear();
  //background(5, 5, 5);
  //textSize(90);
  //fill(255, 255, 255);
  //text('The Snake Game', 30, 200);
  //buttonStart.run();
  //if(mouseIsPressed) {
    //if(mouseX > 450 &&
    //mouseX < 300 &&
    //mouseY > 450 &&
    //mouseY < 300){
      //gameState = 2;
    //}
  //}
//}

//function gameMode() {
  //clear();
  //background(5, 5, 5);
  //loadSnakes(1);
  //for(var i = 0; i < snake.length; i++) {
    //snake[i].run();
  //}
//}

function makeButtons(){
  startButton = new Button(300, 300, 'START');
  replayButton = new Button(100, 100, 'REPLAY');
}

function startGame(){
  background(0, 0, 0);
  clear();
  fill(0);
  makeButtons();
  startButton.run();
  fill(255, 105, 180);
  textSize(75);
  text('SKINNY SNAKE', 150, 150);
  textSize(15);
  text('Welcome to Skinny Snake! The snake is the pink square. Try to eat the red food by moving the snake ', 60, 200);
  text('with the arrow keys. Everytime you eat the food, your snake will grow a little bit. But NOT ', 60, 225);
  text('too much because it is a SKINNY SNAKE! If the snake goes off the screen the game will end. Good luck!', 60, 250)
  text('Make sure your snake does not get tangled in itself. (It will if you move up and down or left and right too fast).', 60, 275);
  if(mouseIsPressed &&
    mouseX > 300 &&
    mouseX < 450 &&
    mouseY > 300 &&
    mouseY < 450){
      gameState = 2;
    }
}

function gameMode(){
  fill(0);
  //checkTangled();
}

function endGame(){
  clear();
  fill(0);
  replayButton.run();
  rect(100, 500, 600, 200);
  fill(255);
  textSize(50);
  text("GAME OVER", 250, 600);
  if(mouseIsPressed &&
    mouseX > 100 &&
    mouseX < 250 &&
    mouseY > 100 &&
    mouseY < 250){
      console.log('hi');
      snake.body = [];
      snake.head.x = 100;
      snake.head.y = 100;
      snake.vel = createVector(0, 0);
      //remove();
      keyCode = CONTROL;
      gameState = 1;
      startGame(); //idk why this is not working
    }
}

function loadObjects() {
    snake = new Snake(20, 20, 15, 15);
    food = new Food(random(100, 700), random(100, 700));

}

//function checkTangled(){
  //if(snake.tangled() === true){
    //gameState = 3;
  //}
//}

//function makeButtons() {
  //buttonStart = new Button(350, 350, 'START GAME');
//}
