//Demonstrate how to pick a random element from a list

var array = [1,2,3];

function pickRandomElement(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

pickRandomElement(array); 
