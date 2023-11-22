
let url = 'https://fakestoreapi.com/products/';
let cardsPerRow = 3;
const getData = async(url)=>{
const response = await fetch(url);
const data = await response.json();
console.log(data);

const menClothingSection = document.querySelector('.mens-clothing');
let currentRow;
// console.log(data);
mensClothingData = data.filter((mensClothing)=>{
    if(mensClothing.category == 'men\'s clothing'){
       return mensClothing
    }
});

mensClothingData.forEach((menClothing, index) => {
    if (index % cardsPerRow === 0) {
        // Start a new row
        currentRow = document.createElement('div');
        currentRow.classList.add('row');
        menClothingSection.appendChild(currentRow);
    }

    const menClothingCard = createMenClothingCard(menClothing);
    currentRow.appendChild(menClothingCard);
});

// console.log(mensClothingData);
// mensClothingData.map((mensClothing)=>{
//     const mensClothingSection = document.querySelector('.mens-clothing');
//     const mensClothingCard = createMensClothingCard(mensClothing);
//     mensClothingSection.appendChild(mensClothingCard);
// })

};

getData(url);

const createMenClothingCard = (menClothing) => {
    const card = document.createElement('div');
    card.classList.add('card','pop-out','col-lg-4','col-sm-12');
    card.style.height = '450px'; 
    card.style.width = '300px';
    card.style.margin = '25px';

    const image = document.createElement('img');    
    image.classList.add('img-fluid','card-img-top');
    image.style.height = '200px';
    // Use object-fit to control the aspect ratio of the image
    image.style.objectFit = 'contain';
    image.src = menClothing.image;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = menClothing.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = menClothing.category;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const ulListGroup = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');

    const liListItem = document.createElement('li');
    liListItem.classList.add('list-group-item');
    liListItem.textContent = "$" + menClothing.price;

    ulListGroup.appendChild(liListItem);

    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(ulListGroup);

    card.addEventListener('click', () => {
        addEventAndRedirect(menClothing);
    });

    return card;
};

const addEventAndRedirect = (menClothing) => {
    window.location.href = `shopIndividual.html?id=${menClothing.id}&category=${menClothing.category}`;
};



// const createMensClothingCard = (mensClothing) =>{
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const mensClothingImage = document.createElement('div');
//     mensClothingImage.classList.add('mens-clothing-image');
//     const image = document.createElement('img');
//     image.src = mensClothing.image;
//     const mensClothingDetails = document.createElement('div');
//     mensClothingDetails.classList.add('mens-clothing-details');
//     const titleh2 = document.createElement('h2');
//     titleh2.textContent = mensClothing.title;
//     const pricep = document.createElement('p');
//     pricep.textContent = "$"+ mensClothing.price;
//     const categoryh4 = document.createElement('h4');
//     categoryh4.textContent = mensClothing.category;


//     card.appendChild(mensClothingImage);
//     mensClothingImage.appendChild(image);
//     mensClothingDetails.appendChild(titleh2);
//     mensClothingDetails.appendChild(pricep);
//     mensClothingDetails.appendChild(categoryh4);
//     card.appendChild(mensClothingDetails);
//     card.addEventListener('click',()=>{
//         addEventAndRedirect(mensClothing);
//     });

//     return card;
// }

// const addEventAndRedirect =(mensClothing)=>{
//     window.location.href = `shopIndividual.html?id=${mensClothing.id}&category=${mensClothing.category}`;
// }