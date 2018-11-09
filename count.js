// create function to get the number of occurences of each letter in specified string

function count(str) {
  let string = str.split("").sort().join(""); 
  let counter = 1; 
  for(var i = 0; i < str.length; i++) {
    if(string[i] === string[i + 1]) {
      counter++; 
    } else { 
      console.log(string[i] + ' ' + counter); 
      counter = 1; 
    }
  }
}


count("thequickbrownfoxjumpsoverthelazydog");
