module.exports = {
  generatePassword : generatePassword
};

function generatePassword(level, size){

passLevel5 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&+-/*{}[]()%<>:;";

  switch(level){
    case 1 : return generateLevel1Pass(passLevel1,size);
    case 2 : return generateLevel2Pass(passLevel2,size);
    case 3 : return generateLevel3Pass(passLevel3,size);
    case 4 : return generateLevel4Pass(passLevel4,size);
    case 5 : return generateLevel5Pass(passLevel5,size);
  }
}

function generateLevel1Pass(passLevel1,size){
  var password = "";

  for(var i = 0; i < size; i++){
    password += passLevel1.charAt(Math.floor(Math.random() * passLevel1.length));
  }
  return password;
}


function generateLevel2Pass(passLevel2,size){
  var password = "";

  for(var i = 0; i < size; i++){
    password += passLevel2.charAt(Math.floor(Math.random() * passLevel2.length));
  }
  return password;
}


function generateLevel3Pass(passLevel3,size){
  var password = "";

  for(var i = 0; i < size; i++){
    password += passLevel3.charAt(Math.floor(Math.random() * passLevel3.length));
  }
  return password;
}


function generateLevel4Pass(passLevel4,size){
  var password = "";

  for(var i = 0; i < size; i++){
    password += passLevel4.charAt(Math.floor(Math.random() * passLevel4.length));
  }
  return password;
}


function generateLevel5Pass(passLevel5,size){
  var password = "";

  for(var i = 0; i < size; i++){
    password += passLevel5.charAt(Math.floor(Math.random() * passLevel5.length));
  }
  return password;
}
