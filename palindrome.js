// Write a function that checks whether a passed string is a palindrome or not
// Palindrome | reads the same backwards and forwards

function palindrome(str){
  var regEx = /[\W_]/g;
  var newStr = str.toLowerCase().replace(regEx, ''); 
  var reverseStr = newStr.split("").reverse().join("");
  return reverseStr === newStr; 
}

palindrome("A man, a plan, a canal. Panama") // true
