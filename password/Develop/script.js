var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", start);


function displayPassword(thePassword){
  var passwordText = document.querySelector("#password");
  if (thePassword.length > 0){
    passwordText.value = thePassword;
  } else{
    passwordText.value = 'You did not choose enough options to generate a password';
  }
}

function start(){
  var pwdLengthStr = window.prompt('Please enter your password length between 8 and 128');
  var pwdLength = parseInt(pwdLengthStr);

  if (!isNaN(pwdLength)){
    if (pwdLength >=8 && pwdLength <=128){

      var wantNumeric = confirm("Would you like to add a numeric value?")

      var wantSpecial = confirm("Would you like to include special characters?")
    
      var wantLowercase = confirm("Would you like to include lowercase letters?")
    
      var wantUppercase = confirm("Would you like to include uppercase letters?")      

      var finalPassword = generatePassword(pwdLength, wantNumeric, wantSpecial, wantLowercase, wantUppercase);
      displayPassword(finalPassword);

    } else {
      alert('Please enter a number between 8 and 128');
      return;
    }
  } else {
    alert('Please enter a number between 8 and 128');
    return;

  }
};
  
function generatePassword(maxLength, wantNumeric, wantSpecial, wantLowercase, wantUppercase){

  const Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*;:(){}|"
  }

  var pwd = "";
  while (pwd.length < maxLength){

      if (wantUppercase == true){
        pwd += getRandomCharFromString(Allowed.Uppers); //pwd will have at least one upper
      }
    
      if (wantLowercase == true){
        pwd += getRandomCharFromString(Allowed.Lowers); //pwd will have at least one lower
      }
    
      if (wantNumeric == true){
        pwd += getRandomCharFromString(Allowed.Numbers); //pwd will have at least one number
      }
    
      if (wantSpecial == true){
        pwd += getRandomCharFromString(Allowed.Symbols);//pwd will have at least one symbolo
      }

      if (pwd.length == 0){
        return("");
      }
    }    
  return(pwd);
}

function getRandomCharFromString(str){
  return str.charAt(Math.floor(Math.random() * str.length))
}


//writePassword();

