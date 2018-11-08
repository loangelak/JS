// create a function that accepts a string as a parameter and finds the longest word within the string
//web development => development

function findLongestWord(str){
  var arr = str.split(" "); 
  var longestWord = arr[0]; 
  for(var i = 0; i < str.length; i++) {
    if(arr[i].length > longestWord.length) {
      longestWord = arr[i]
    }
  }
  return longestWord; 
}

findLongestWord("web development")
