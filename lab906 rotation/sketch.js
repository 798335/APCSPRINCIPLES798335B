//  Gabrielle Melamed
// 09/03
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []; //declares array
var mainBall; //declares the main ball
var mainBall2;
//var mainBall2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadObjects(200);

}


function draw() {
  background(5, 5, 5, 25); //makes the background less transparent
  runObjects();
}

function loadObjects(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-2,2), random(-2, 2), 1); //add main ball
  mainBall2 = new Ball(random(width/2), random(height/2), random (-2,2), random(-2, 2), 1); //add 2nd main ball
  //mainBall2 = new Ball(random(width/2), random(height/2), random (-2,2), random(-2, 2), 1); //add 2nd main ball
  for(var i = 0; i < x; i++){
    ships[i] = new Ship(random(width), random(height), random(-5,5), random(-5,5), i + 3);
  }
}

function runObjects(){
  mainBall.run();
  mainBall2.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
}
}
