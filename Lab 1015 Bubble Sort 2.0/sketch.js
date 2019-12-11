//  Gabby Melamed
// 	Lab 1015 Bubble Sort 2.0
//  This is a comment
//  The setup function function is called once when your program begins

var l = [];
function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    l.push(int(random(0, 10)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(10);
  console.log(l);
  for(var i = 0; i < l.length; i++){
    for(var j = 0; j < l.length; j++){
      if(l[j] > l[j + 1]){
        swap(l, j, j + 1);
        }
    }
  }
  console.log(l);
}


function swap(list, a, b) {
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
