let fullName,userName,email,password,phoneNumber,passwordConfirm,getGender;

const signUp = ()=>{
fullName = document.getElementById('fname').value;
userName = document.getElementById('username').value;
email = document.getElementById('email').value;
phoneNumber = document.getElementById('phno').value;
password = document.getElementById('password').value;
passwordConfirm = document.getElementById('passwordConfirm').value;
getGender = document.signUpData.gender.value;
console.log(getGender,fullName,userName,email,phoneNumber,password,passwordConfirm);


}

