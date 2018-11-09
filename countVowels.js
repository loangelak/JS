// create function that accepts a string as a parameter and counts the number of vowels within the string
// the quick brown fox => 5

function countVowels(str) {
  var vowels = "aeiouAEIOU";
  var counter = 0; 
  for(var i = 0; i < str.length; i++) {
    if(vowel.indexOf(str[i] !== -1) {
      counter++; 
    }
  }
  return counter; 
}

countVowels("peter piper picked a peck of pickled peppers");
