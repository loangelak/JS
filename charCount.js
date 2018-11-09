// create function that accepts two arguments, a string and a letter and the function will count the numbers of occurrences of the specified letter within the string

function charCount(str, letter) {
  var count = 0; 
  for(var i = o; i < str.length; i++) {
    if(str.charAt(i) === letter) {
      count++; 
    }
  }
  return count; 
}

charCount("HannibalLechter", "e"); 
    
