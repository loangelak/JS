//Write a function that reverses numbers 
//x=32243 +> 34223

function reverseNum(num) {
  num = num.toString(); 
  return num.split("").reverse().join("");
}

reverseNum(32243); 
