module.exports = {
  generatePassword : generatePassword
};

function generatePassword(level, size){
  var passString = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&+-/*{}[]()%<>:;";

  return generatePass(passString,size,level);
  }
}

function generatePassword(passString,size,level){
  var password = "";

  if(level == 1){
    passwordString = passString.substr(0,25);
  }
  else if(level == 2){
    passwordString = passString.substr(0,35);
  }
  else if(level == 3){
    passwordString = passString.substr(0,61);
  }
  else{
    passwordString = passString.substr(0,80);
  }
  for(var i = 0; i < size; i++){
    password += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
  }
  return password;
}
