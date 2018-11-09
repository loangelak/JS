// create function to find the first not repeated character
// 'abacddbec' => 'e'

function findFirstNotRepeatedChar(str) {
  var string = str.split("");
  var result = "";
  var counter = 0; 
  for(var i = 0; i < str.length; i++) {
    counter = 0; 
    for(var j = 0; j < str.length; j++) {
      if(string[i] === string[j]) {
        counter++; 
      }
    }
    if(counter < 2) {
      result = string[i]; 
      break;
    }
  }
  return result; 
}

findFirstNotRepeatedChar('abdjfkdlwke4ijfidjskdfjkdjskla');
