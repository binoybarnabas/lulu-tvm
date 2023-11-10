const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get('id'));
console.log(typeof(id));
let url = 'https://dummyjson.com/users';

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
createInnerCafe(newData);
similarCards(data);
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
    document.querySelector(".cafe-description").textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae corrupti quam soluta ipsum consequuntur. Tenetur at consequatur labore ad numquam eveniet accusantium reprehenderit nostrum aperiam consequuntur, quis illo corporis?";
    document.querySelector("#address").innerHTML = "Address : " + newData[0].address.address;
    document.querySelector("#website").innerHTML = "Website : " + newData[0].image;

    
    }


    const similarCards =(data)=>{
        for (let i=1; i<4; i++){
            const randomIndex = Math.floor((Math.random() * 12)+1);
            document.querySelector(`#similar${i}`).src = data.users[randomIndex].image;
            document.querySelector(`#similar${i}`)
            .addEventListener("click",( )=>{
                window.location.href=`innerCafe.html?id=${randomIndex+1}`;
            });
        }
    }


 


