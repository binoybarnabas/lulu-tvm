const url = 'https://dummyjson.com/users';

const getData = async (url) => {
    try{
        const response = await fetch(url);
        //console.log(response);
        const data = await response.json();
        console.log(data);
        data.users.slice(0,13).map((userData) => {
            showData = document.querySelector('.cafe-section');
            showData.classList.add("cafe-section");
            const cafeData = createCafeData(userData);
            showData.appendChild(cafeData);
        })
    }
    catch(error){
        console.log(error);
    }
}

getData(url);

const createCafeData = (userData) => {

const cafeCards = document.createElement('div');
cafeCards.classList.add('cafe-cards');
const cafeImage = document.createElement('img');
cafeImage.classList.add('cafe-image');
const cafeName = document.createElement('p');
cafeName.classList.add('cafe-name');

cafeImage.src = userData.image;
cafeName.textContent = userData.company.name ;

cafeCards.appendChild(cafeImage);
cafeCards.appendChild(cafeName);

cafeCards.addEventListener('click',() => {
    openNewPage(userData);
    console.log("hello event");
    })
    
return cafeCards;
}

const openNewPage = (userData)=>{
    window.location.href = `innerCafe.html?id=${userData.id}`;
}