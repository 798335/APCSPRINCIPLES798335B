//  Gabby Melamed
// 	Lab 1209 Red Ball Sort
//  This is a comment
//  The setup function function is called once when your program begins

var balls = [];//global variable

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 182, 193);
  loadBalls(20);//loads 20 balls
  frameRate(4);//slows down the animation
  for(var i = 0; i < balls.length; i++){
    balls[i].render();
  }//displays balls on screen
}

function draw() {
  bubbleSort();//sorts the balls from darkest red to lightest red
}

function loadBalls(num) { //prepares the balls to show up
  for(var i = 0; i < num; i++){
    var xpos = 100 + 30 * i;
    var red = random(0, 255);
    balls[i] = new Ball(xpos, 300, color(red, 0, 0), red);
  }
}

function update(){
  for(var i = 0; i < balls.length; i++){ //displays balls unsorted
    balls[i].set(i);
  }
  background(255, 182, 193);
  for(var i = 0; i < balls.length; i++){ //resets background and displays sorted balls
    balls[i].run();//makes the balls show up
  }
}

function bubbleSort(){ //sorts balls by comparing two ball shades
    for(var j = 0; j < balls.length - 1; j++){
      if(balls[j].shade > balls[j + 1].shade){
        swap(balls, j, j + 1);//swaps balls
        update();
        }
    }
}

function swap(list, a, b) {//swaps two values in array
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
