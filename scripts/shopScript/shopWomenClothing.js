
let url = 'https://fakestoreapi.com/products/';
const getData = async(url)=>{
const response = await fetch(url);
const data = await response.json();
console.log(data);
womensClothingData = data.filter((womensClothing)=>{
    if(womensClothing.category == 'women\'s clothing'){
       return womensClothing
    }
});
console.log(womensClothingData);
womensClothingData.map((womensClothing)=>{
    const womensClothingSection = document.querySelector('.womens-clothing');
    const womensClothingCard = createWomensClothingCard(womensClothing);
    womensClothingSection.appendChild(womensClothingCard);
})

}

getData(url);

const createWomensClothingCard = (womensClothing) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const womensClothingImage = document.createElement('div');
    womensClothingImage.classList.add('womens-clothing-image');
    const image = document.createElement('img');
    image.src = womensClothing.image;
    const womensClothingDetails = document.createElement('div');
    womensClothingDetails.classList.add('womens-clothing-details');
    const titleh2 = document.createElement('h2');
    titleh2.textContent = womensClothing.title;
    const pricep = document.createElement('p');
    pricep.textContent = "$"+ womensClothing.price;
    const categoryh4 = document.createElement('h4');
    categoryh4.textContent = womensClothing.category;

    card.appendChild(womensClothingImage);
    womensClothingImage.appendChild(image);
    womensClothingDetails.appendChild(titleh2);
    womensClothingDetails.appendChild(pricep);
    womensClothingDetails.appendChild(categoryh4);
    card.appendChild(womensClothingDetails);
    card.addEventListener('click',()=>{
        addEventAndRedirect(womensClothing);
    });
    return card;
}

const addEventAndRedirect =(womensClothing)=>{
    window.location.href = `shopIndividual.html?id=${womensClothing.id}&category=${womensClothing.category}`;
}