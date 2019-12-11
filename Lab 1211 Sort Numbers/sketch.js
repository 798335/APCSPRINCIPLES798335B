//  Gabby Melamed
// 	Lab 1211 Sort Numbers
//  This is a comment
//  The setup function function is called once when your program begins

var list = [];
var temp;
var sum = 0;
function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    list.push(int(random(0, 100)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(11);//creates a list of 11 numbers
  console.log('unsorted list: ' + list);//displays unsorted list
  mySort();//sorts numbers
  console.log('sorted list: ' + list);
  var evenodd = list.length % 2;//checks if a number is even or odd
  var halflengtheven = 0.5 * list.length;
  var halflengthodd = (0.5 * list.length) - 0.5;
  var median = 0;
  if(evenodd === 0){//finds the median of a list of even numbers
    median = (list[halflengtheven] + list[halflengtheven - 1])/2
    console.log('median: ' + median);
    mean();//calls the function to find the mean
  }else{//finds the median of a list of odd numbers
    median = list[halflengthodd];
    console.log('median: ' + median)
    mean();//calls the function to find the mean
  }
}



function swap(list, a, b) {//swaps two variables
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function mySort(){//insertion sort that sorts list of numbers
  for(var i = 1; i < list.length; i++){
    for(var j = i; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
      }
    }
  }
}

function mean(){//finds the mean of the list
  for(var i = 0; i < list.length; i++){
    sum = sum + list[i];//adds all of the numbers in the list together
  }
  var average = sum/list.length;//divides the sum of the numbers by the length of the list
  console.log('average:' + average);//displays the average in the console
}
