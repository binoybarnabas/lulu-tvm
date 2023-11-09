const url = 'https://dummyjson.com/users';

const getData = async (url) => {
    try{
        const response = await fetch(url);
        //console.log(response);
        const data = await response.json();
        console.log(data);
        data.users.slice(0,28).map((userData) => {
            showData = document.querySelector('.court-section');
            showData.classList.add("court-section");
            const courtData = createCourtData(userData);
            showData.appendChild(courtData);
        })
    }
    catch(error){
        console.log(error);
    }
}

getData(url);

const createCourtData = (userData) => {

const courtCards = document.createElement('div');
courtCards.classList.add('court-cards');
const courtImage = document.createElement('img');
courtImage.classList.add('court-image');
const courtName = document.createElement('p');
courtName.classList.add('court-name');

courtImage.src = userData.image;
courtName.textContent = userData.company.name ;

courtCards.appendChild(courtImage);
courtCards.appendChild(courtName);

courtCards.addEventListener('click',() => {
    openNewPage(userData);
    console.log("hello event");
    })
    
return courtCards;
}

const openNewPage = (userData)=>{
    window.location.href = `innerCafe.html?id=${userData.id}`;
}