// create a function that accepts a string as a parameter and converts first letter of each word to uppercase
// the quick brown fox => The Quick Brown Fox

function titleCase(str){
  var arr = str.toLowerCase().split(" "); 
  for(var i = 0; i < str.length; i++){
    arr[i] += arr[i].charAt(0).toUpperCase() + arr[i].substring(1); 
  }
  return arr.join(" ");
}

titleCase("the quick brown fox")
