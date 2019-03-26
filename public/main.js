
document.getElementById("buttonAccount").addEventListener('click',formShow)
function formShow(){
    document.getElementById("sesionInit").style.display="none";
    document.getElementById("createAccount").style.display="block";
}

document.getElementById("buttonBack").addEventListener('click',formBack)
function formBack(){
    document.getElementById("sesionInit").style.display="block";
    document.getElementById("createAccount").style.display="none";
}

document.getElementById("buttonLogin").addEventListener('click',login)
function login(){
    console.log("login");
    let email=document.getElementById("usersLogin").value;
    let password=document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ...
      });
      
}