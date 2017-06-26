module.exports = {
  generatePassword : generatePassword
};

function generatePassword(level, size){
  var passString = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&+-/*{}[]()%<>:;";

  return generatePass(passString,size);
  }
}

function generateLevel1Pass(passLevel1,size){
  var password = "";

  if(){

  }
  else if(){

  }
  else if(){

  }
  else{
    
  }
  for(var i = 0; i < size; i++){
    password += passLevel1.charAt(Math.floor(Math.random() * passLevel1.length));
  }
  return password;
}
