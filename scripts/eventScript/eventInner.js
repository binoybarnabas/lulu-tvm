const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get('id'));
console.log(typeof(id));
let filteredData;
let url = 'https://dummyjson.com/users';

const dataProcess = async(url,id)=>{
try{
let response = await fetch(url);
let data = await response.json();
const newData = data.users.filter((userData)=>{
    if(userData.id == id){
           return userData;   
    }
}
);


document.getElementById('img').src = newData[0].image;
document.getElementById('h4').innerHTML = newData[0].domain;
document.getElementById('h1').innerHTML = newData[0].domain;
document.getElementById('h2').innerHTML = "About the event";
document.getElementById('p').innerHTML = newData[0].age;
document.getElementById('h3').innerHTML = "Date : " + newData[0].birthDate;

// filteredData = newData;
// document.getElementById('fname').value = filteredData[0].firstName;
// document.getElementById('pnumber').value = filteredData[0].phone;
// document.getElementById('email').value = filteredData[0].email;
// document.getElementById('coverletter').value = filteredData[0].address.address;
// document.getElementById('date').value = filteredData[0].birthDate;
// document.getElementById('subject').value = filteredData[0].maidenName;
// console.log(filteredData);
}
catch(e){   
    console.log(e); 
}
}

dataProcess(url,id);

