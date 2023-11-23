let fullName,userName,email,password,phoneNumber,passwordConfirm,getGender;
url = 'https://fakestoreapi.com/users';
let checker = -1;
const signUp =()=>{
fullName = document.getElementById('fname').value;
userName = document.getElementById('username').value;
email = document.getElementById('email').value;
phoneNumber = document.getElementById('phno').value;
password = document.getElementById('password').value;
passwordConfirm = document.getElementById('password-confirm').value;
getGender = document.signUpData.gender.value;
console.log(getGender,fullName,userName,email,phoneNumber,password,passwordConfirm);
const data = {fullName,userName,email,phoneNumber,getGender,password,passwordConfirm};
sendData(data,url);
}   


const scriptURL = "https://script.google.com/macros/s/AKfycbwC4hs2h_GXHeAlZoMMkZeWX4i_b-xE0mWFIrgN8MP3nCsYu8h4scI7AwciKA63TQsfBA/exec";
 
  const form = document.forms["signUpData"];
   
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });


const sendData = async (data,url)=>{
    const response = await fetch(url,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const dataResponse = await response.json();
    console.log(response);
    // console.log(data);
    let getValidatedCheck = validateData();
    console.log(getValidatedCheck);

    if(response.ok === true && getValidatedCheck == 6){
        window.location.href = 'shopPageLogin.html';
        window.alert("successfully signed up...");
    }
}

const validateData = ()=>{
    if(fullName === ''){
        const fullNameField = document.getElementById('fname');
        fullNameField.classList.add('error-field');
        fullNameField.placeholder = 'full name cannot be empty';
    }
    else
    ++checker;


   if(userName.length<8){
    if(userName === ''){
        const userNameField = document.getElementById('username');
        userNameField.classList.add('error-field');
        userNameField.placeholder =  'username cannot be empty';
    }
    else{
        const userNameField = document.getElementById('username');
        userNameField.classList.add('error-field');
        userNameField.value = '';
        userNameField.placeholder =  'length should be 8';
    }
    }
    else
    ++checker

    let phone  = phoneNumber.toString();
    // console.log(typeof(phone))
    // console.log(phone.length);

    if(phone.length<10){
        const phoneField = document.getElementById('phno');
        if(phoneNumber === ''){
            phoneField.classList.add('error-field');
            phoneField.placeholder =  'phone cannot be empty';
        }
        else{
            phoneField.classList.add('error-field');
            phoneField.value='';
            phoneField.placeholder =  'invalid phone number';
        }
    }
    else
    ++checker

    if(email === ''){
        const emailField = document.getElementById('email');
        emailField.classList.add('error-field');
        emailField.placeholder =  'email cannot be empty';
    }
    else
    ++checker
    
    if(password.length<8){
        const passwordField = document.getElementById('password');
        if(password === ''){
            passwordField.classList.add('error-field');
            passwordField.placeholder = 'enter the password';
        }
        else{
            passwordField.classList.add('error-field');
            passwordField.value='';
            passwordField.placeholder =  'length should be 8 in minimum';
        }
    }
    else
    ++checker

    if(passwordConfirm.length<8){
        const passwordConfirmField = document.getElementById('password-confirm');
        if(passwordConfirm === ''){
            passwordConfirmField.classList.add('error-field');
            passwordConfirmField.placeholder = 'enter the password to confirm';
        }
        else{
            passwordConfirmField.classList.add('error-field');
            passwordConfirmField.value='';
            passwordConfirmField.placeholder =  'length should be 8 in minimum';
        }
    }
    else
    ++checker;
      
 
    if(password != passwordConfirm){
        const passwordField = document.getElementById('password');
        const passwordConfirmField = document.getElementById('password-confirm');
        passwordField.classList.add('error-field');
        passwordField.value='';
        passwordConfirmField.classList.add('error-field');
        passwordConfirmField.value='';
        passwordField.placeholder =  'password not matching';
        passwordConfirmField.placeholder =  'password not matching';
    }
    else
    ++checker;
    return checker;
}


