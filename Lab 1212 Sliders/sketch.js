//  GTest
// Lab 1212 Sliders
var ships = []; //declares array
var planet, sliderText, sliderVelocity, sliderAttraction, sliderNumberofShips; //declares the planet
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(10);//prepares the planet and ship(s)
  sliderText = createP('Velocity slider');//puts text above slider
  sliderText.position(100, 370);
  sliderVelocity = createSlider(1, 10, 1);//creates all of the sliders
  sliderVelocity.position(100, 400);//sets the position of the sliders
  sliderText = createP('Attraction slider');
  sliderText.position(100, 410);
  sliderAttraction = createSlider(1, 10, 1);
  sliderAttraction.position(100, 450);
}


function draw() {
  background(5, 5, 5, 25); //makes the background less transparent
  runObjects();//calls the run objects function
}

function loadObjects(x){
  planet = new Planet(100, 100, random (-2,2), random(-2, 2), 1); //creates a planet
  for(var i = 0; i < x; i++){//creates the ship(s)
    ships[i] = new Ship(100, 200, random(-5,5), random(-5,5), i + 3);
  }
}

function runObjects(){
  planet.run();//makes the planet appear
  for(var i = 0; i < ships.length; i++){//makes the ship(s) appear
    ships[i].run();
}
}
