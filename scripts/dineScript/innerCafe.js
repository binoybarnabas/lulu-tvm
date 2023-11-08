const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get('id'));
console.log(typeof(id));
let filteredData;
let url = 'https://dummyjson.com/users';

const dataProcess = async(url,id)=>{
try{
let response = await fetch(url);
let data = await response.json();
console.log(data);
const newData = data.users.filter((userData)=>{
    if(userData.id == id){
        return userData;   
    }
}
);

showData = document.querySelector('.inner-cafe');
const innerCafe = createInnerCafe(newData);
showData.appendChild(innerCafe);

}
catch(e){   
    console.log(e); 
}
}

dataProcess(url,id);

const createInnerCafe = (newData) => {
    document.querySelector(".cafe-name").textContent = newData[0].company.name;
    document.querySelector("#cafe-logo").src = newData[0].image;
    document.querySelector(".name").textContent = newData[0].company.name;
    document.querySelector(".tele-no").innerHTML = newData[0].phone;
    document.querySelector(".email").innerHTML = newData[0].email;
    document.querySelector("#address").innerHTML = "Address : " + newData[0].address.address;
    document.querySelector("#website").innerHTML = "Website : " + newData[0].image;
    
    return cafeInfo;
    }