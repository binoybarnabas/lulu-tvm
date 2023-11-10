let url = 'https://fakestoreapi.com/users'


const login = async()=>{

    const response = await fetch(url);
    const loginData = await response.json();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // console.log(typeof(userName)+" "+ typeof(password));
    console.log(loginData);
    loginUser = loginData.filter((userData) =>{
        if(userData.username == userName && userData.password == password){
            return userData;
        }
    })
    
    if(loginUser.length == 1){
        window.location.href=`shop.html`;
    }
    else{
        document.getElementById('error').innerHTML = 'invalid username or password!!!';
    }
    // console.log(loginUser);
}


