// Searching the url to get parameter ID
const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get('id'));
console.log(typeof(id));
let url = 'https://dummyjson.com/users';

// fetching data of the particular ID
const dataProcess = async(url,id)=>{
try{
let response = await fetch(url);
const data = await response.json();
console.log(data);
const newData = data.users.filter((userData)=>{
    if(userData.id == id){
        return userData;   
    }
});
createInnerCourt(newData);
similarCards(data);
}
catch(e){   
    console.log(e); 
}
}

// Calling the async function
dataProcess(url,id);

// Setting values to the html elements
const createInnerCourt = (newData) => {
    document.querySelector(".court-name").textContent = newData[0].company.name;
    document.querySelector("#court-logo").src = newData[0].image;
    document.querySelector(".name").textContent = newData[0].company.name;
    document.querySelector(".tele-no").innerHTML = newData[0].phone;
    document.querySelector(".email").innerHTML = newData[0].email;
    document.querySelector(".court-description").textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae corrupti quam soluta ipsum consequuntur. Tenetur at consequatur labore ad numquam eveniet accusantium reprehenderit nostrum aperiam consequuntur, quis illo corporis?";
    document.querySelector("#address").innerHTML = "Address : " + newData[0].address.address;
    document.querySelector("#website").innerHTML = "Website : " + newData[0].image;
}

// Generating similar stores
const similarCards =(data)=>{
    for (let i=1; i<4; i++){
        const randomIndex = Math.floor((Math.random() * 12)+1);
        document.querySelector(`#similar${i}`).src = data.users[randomIndex].image;
        document.querySelector(`#similar${i}`).addEventListener("click",( )=>{
            window.location.href=`innerCafe.html?id=${randomIndex+1}`;
        });
    }
}


 


