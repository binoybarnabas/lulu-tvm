
let url = 'https://fakestoreapi.com/products/category/electronics'
const getData = async(url)=>{
const response = await fetch(url);
const data = await response.json();
// console.log(data);
data.map((electronic)=>{
const electronicSection = document.querySelector('.electronics');
const electronicCard = createElectronicCard(electronic);
electronicSection.appendChild(electronicCard);
});

}

getData(url);

const createElectronicCard = (electronic) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    const image = document.createElement('img');
    image.src = electronic.image;
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    const titleh2 = document.createElement('h2');
    titleh2.textContent = electronic.title;
    const pricep = document.createElement('p');
    pricep.textContent = "$"+ electronic.price;
    const categoryh4 = document.createElement('h4');
    categoryh4.textContent = electronic.category;


    card.appendChild(productImage);
    productImage.appendChild(image);
    productDetails.appendChild(titleh2);
    productDetails.appendChild(pricep);
    productDetails.appendChild(categoryh4);
    card.appendChild(productDetails);
    card.addEventListener('click',()=>{
        addEventAndRedirect(electronic);
    });

    return card;
}

const addEventAndRedirect =(electronic)=>{
    window.location.href = `shopIndividual.html?id=${electronic.id}&category=${electronic.category}`;
}