//  Gabby Melamed
// 	Snake Game
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var gameState = 1;
var buttonStart;
var x = 0;
var startButton, replayButton;
var score = 0;//declaring global variables
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(114, 100, 100);//canvas set up
  loadObjects();//calls the loadObjects function
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  snake.run();
  food.run();//makes snake and food appear
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    gameMode();
  }else if(gameState === 3){
    endGame();
  }//declares which gameState numbers are which game screen
}


function makeButtons(){
  startButton = new Button(300, 300, 'START');
  replayButton = new Button(100, 100, 'REPLAY');
}//creates start and replay button

function startGame(){
  background(0, 0, 0);
  clear();
  fill(0);
  makeButtons();//calls makeButton
  startButton.run();//makes the start button appear
  fill(255, 105, 180);
  textSize(75);
  text('SKINNY SNAKE', 150, 150);
  textSize(15);
  text('Welcome to Skinny Snake! The snake is the pink square. Try to eat the red food by moving the snake ', 60, 200);
  text('with the arrow keys. Everytime you eat the food, your snake will grow a little bit. But NOT ', 60, 225);
  text('too much because it is a SKINNY SNAKE! If the snake goes off the screen the game will end. Good luck!', 60, 250)
  text('Make sure your snake does not get tangled in itself. (It will if you move up and down or left and right too fast).', 60, 275);//directions and game title appear
  if(mouseIsPressed &&
    mouseX > 300 &&
    mouseX < 450 &&
    mouseY > 300 &&
    mouseY < 450){
      gameState = 2;
    }//when the start button is pressed, the game state change to gameState 2
}// start game state

function gameMode(){
  fill(0);//fills the canvas
  //snake and food appear because they are called in draw
}//game state where you play the game

function endGame(){
  clear();
  fill(0);//clears and refills the screen
  replayButton.run();//makes replay button appear
  rect(100, 500, 600, 200);
  fill(255);
  textSize(50);
  text("GAME OVER", 250, 600);//displays GAME OVER
  text("Your score is:" + score, 215, 650);//displays score
  if(mouseIsPressed &&
    mouseX > 100 &&
    mouseX < 250 &&
    mouseY > 100 &&
    mouseY < 250){
      snake.body = [];
      snake.head.x = 100;
      snake.head.y = 100;
      snake.vel = createVector(0, 0);
      keyCode = CONTROL;
      gameState = 1;
      startGame();
    }//when the replay button is pressed, all snake properties are reset and gameState is set back to 1
}//last game state

function loadObjects() {
    snake = new Snake(20, 20, 15, 15);
    food = new Food(random(100, 700), random(100, 700));
}//creates food and snake objects
