// create a function that generates a string id (specified length) of random characters 

function makeId(length) {
  var id = " "; 
  var idGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < length; i ++) {
    id += idGen.charAt(Math.floor(Math.random() * idGen.length)); 
  }
  return id; 
}

makeId(4); 
