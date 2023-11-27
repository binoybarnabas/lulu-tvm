// import Cookies from "cookies";

let url = 'https://fakestoreapi.com/users'

const login = async()=>{
    const response = await fetch(url);
    const loginData = await response.json();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // console.log(typeof(userName)+" "+ typeof(password));
    console.log(loginData);
    const loginUser = loginData.find((userData) => {
        return userData.username === userName && userData.password === password;
    });

    if (loginUser) {
        // Set a session cookie
        setSessionCookie(userName)
        // Redirect to shop.html or perform other actions for successful login
        window.location.href = 'shop.html';
      
    }
    else{
        document.getElementById('error').innerHTML = 'invalid username or password!!!';
    }
}

const setSessionCookie = (userName) => {
    // Set a cookie with the user's name as the session information
    document.cookie = `sessionUser=${encodeURIComponent(userName)}; path=/`;
    const sessionUser= getCookie('sessionUser');
    localStorage.setItem('userCache',`${sessionUser}`);
    console.log("cookie started : " + document.cookie);
};

const getCookie = (cookieName) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
};
  