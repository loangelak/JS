// write a function that returns a passed string with letters in alpha order
// x = webmaster  => abeemrstw

function alphaOrder(str){
  return str.split("").sort().join("");
}

alphaOrder("webmaster");
