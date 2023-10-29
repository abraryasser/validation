function validate(){
var name = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmpassword").value;
var errorMessage = document.getElementById("errorMessage");


errorMessage.style.color="#fff";
errorMessage.style.padding="10px";
errorMessage.style.textAlign="center";
errorMessage.style.backgroundColor="red";
errorMessage.style.marginBottom="20px";



var text="";
if(name==""&& email==""&& password==""&&confirmPassword==""){
text= "please insert valid Data";
errorMessage.innerHTML=text;
return false;
}
else if(name.length<5||name.length>15){
    text="pleasae insert 5-15 charachter in userName";
    errorMessage.innerHTML=text;
    return false;
}
else if(email.indexof("@")==-1){
text="please enter valid email"
errorMessage.innerHTML=text;
return false;
}
else if(password.length<8){
    text="please enter atleast 8 charachter in password";
    errorMessage.innerHTML=text;
    return false;
}
else if(password!=confirmPassword){
    text="please match password";
    errorMessage.innerHTML=text;
    return false;
}else{
    return true;
}
}