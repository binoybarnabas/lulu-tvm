
let url = 'https://fakestoreapi.com/products/';
const getData = async(url)=>{
const response = await fetch(url);
const data = await response.json();
console.log(data);
// console.log(data);
mensClothingData = data.filter((mensClothing)=>{
    if(mensClothing.category == 'men\'s clothing'){
       return mensClothing
    }
});
// console.log(mensClothingData);
mensClothingData.map((mensClothing)=>{
    const mensClothingSection = document.querySelector('.mens-clothing');
    const mensClothingCard = createMensClothingCard(mensClothing);
    mensClothingSection.appendChild(mensClothingCard);
})

}

getData(url);

const createMensClothingCard = (mensClothing) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const mensClothingImage = document.createElement('div');
    mensClothingImage.classList.add('mens-clothing-image');
    const image = document.createElement('img');
    image.src = mensClothing.image;
    const mensClothingDetails = document.createElement('div');
    mensClothingDetails.classList.add('mens-clothing-details');
    const titleh2 = document.createElement('h2');
    titleh2.textContent = mensClothing.title;
    const pricep = document.createElement('p');
    pricep.textContent = "$"+ mensClothing.price;
    const categoryh4 = document.createElement('h4');
    categoryh4.textContent = mensClothing.category;


    card.appendChild(mensClothingImage);
    mensClothingImage.appendChild(image);
    mensClothingDetails.appendChild(titleh2);
    mensClothingDetails.appendChild(pricep);
    mensClothingDetails.appendChild(categoryh4);
    card.appendChild(mensClothingDetails);
    card.addEventListener('click',()=>{
        addEventAndRedirect(mensClothing);
    });

    return card;
}

const addEventAndRedirect =(mensClothing)=>{
    window.location.href = `shopIndividual.html?id=${mensClothing.id}&category=${mensClothing.category}`;
}