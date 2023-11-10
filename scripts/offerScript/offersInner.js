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
document.getElementById('h2').innerHTML = newData[0].company.department;
document.getElementById('h3').innerHTML = newData[0].birthDate;
document.getElementById('p').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";


}
catch(e){   
    console.log(e); 
}
}

dataProcess(url,id);

// let urlPost = 'https://dummyjson.com/users/add';

//posting

// const postData = async () =>{
//     console.log(filteredData);
    
//     let data = filteredData;
//     let response = await fetch(urlPost,{
//         method:'post',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(data)
//     })
//     console.log(response);

//     let dataNew =await response.json();
//     console.log(data);
//     console.log(response);
//     console.log(dataNew);
// }