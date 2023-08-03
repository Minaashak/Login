// signin

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var valid = document.getElementById("valid");
var signinBtn = document.getElementById("signinBtn");
var aboutUsers = [];

if (localStorage.getItem("users") != null) {
    aboutUsers = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  user = {
    name: nameInput.value,
    email: emailInput.value,
    pass: passInput.value,
  };

  if (
    nameInput.value == "" ||
    emailInput.value == " " ||
    passInput.value == ""
  ) {
    valid.innerHTML = "All Input is Requiard";
    valid.classList.add("text-danger");
    valid.classList.remove("text-success");
  }
    else if(mailChick()){
    valid.innerHTML="This mail Not Valid";
    valid.classList.add("text-danger");
    valid.classList.remove("text-success");
  }
   else {
    aboutUsers.unshift(user);
    localStorage.setItem("users" , JSON.stringify(aboutUsers));
    valid.innerHTML= "Success"
    valid.classList.remove('text-danger');
    valid.classList.add("text-success");
  }

}

function mailChick(){
    for(var i = 0 ; i< aboutUsers.length ; i++ ){
        if(emailInput.value== aboutUsers[i].email ){
            return true;
        }
    }
    return false;
}
if(signinBtn != null){
    signinBtn.addEventListener("click", signUp);
    
}


// login

var logMail = document.getElementById("logMail");
var logPass = document.getElementById("logPass");
var signinError = document.getElementById("signinError");
var btnLogin = document.getElementById("btnLogin");

function chick(){
    if( logMail.value == "" || logPass.value == ""){
        signinError.innerHTML='All Inputs is Required';
        signinError.classList.add("text-danger");
    }else if(userChick() == false){
      signinError.innerHTML= "Incorrect Email or Password";
      signinError.classList.add("text-danger");
    }else{
      btnLogin.href='home.html'
    }
}
function userChick(){
  for(var j =0; j< aboutUsers.length; j++){
    if(logMail.value == aboutUsers[j].email & logPass.value == aboutUsers[j].pass){
      localStorage.setItem('userName', JSON.stringify(aboutUsers[j].name) )
      return true;
    }
  }
  return false;
}

if(btnLogin != null){
    btnLogin.addEventListener('click' , chick);
}



// home

var welcome = document.getElementById("welcome");

if(welcome != null){
  var userNameW = JSON.parse(localStorage.getItem("userName"));
  welcome.innerHTML = `Welcome ${userNameW}`;
}


