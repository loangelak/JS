//Take a string and reverse it.
//"asdf" => "fdsa"

function reverseStr(str) {
  return str.split('').reverse().join('');
}

//es6
let reverseStr = str => str.split('').reverse().join(''); 
