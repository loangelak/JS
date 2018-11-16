//Get two integers from the user. Then, display a message if the first integer is:
//less than, equal to, or greater than the second integer.

function compare(a,b){
  if(a===b){
    console.log(a + " is equal to " +b); 
  }  
  if (a < b) {
    console.log(a + " is less than " + b); 
  }
  if(a > b) {
    console.log(a + " is greater than " + b); 
  }
}
