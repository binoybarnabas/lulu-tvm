
let url = 'https://fakestoreapi.com/products/category/jewelery';
const getData = async(url)=>{
const response = await fetch(url);
const data = await response.json();

// console.log(data);
data.map((jewelery)=>{
const jewelerySection = document.querySelector('.jewelery');
const jeweleryCard = createJeweleryCard(jewelery);
jewelerySection.appendChild(jeweleryCard);
});

}

getData(url);

const createJeweleryCard = (jewelery) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const jeweleryImage = document.createElement('div');
    jeweleryImage.classList.add('jewelery-image');
    const image = document.createElement('img');
    image.src = jewelery.image;
    const jeweleryDetails = document.createElement('div');
    jeweleryDetails.classList.add('jewelery-details');
    const titleh2 = document.createElement('h2');
    titleh2.textContent = jewelery.title;
    const pricep = document.createElement('p');
    pricep.textContent = "$"+ jewelery.price;
    const categoryh4 = document.createElement('h4');
    categoryh4.textContent = jewelery.category;


    card.appendChild(jeweleryImage);
    jeweleryImage.appendChild(image);
    jeweleryDetails.appendChild(titleh2);
    jeweleryDetails.appendChild(pricep);
    jeweleryDetails.appendChild(categoryh4);
    card.appendChild(jeweleryDetails);
    card.addEventListener('click',()=>{
        addEventAndRedirect();
    });

    return card;
}

const addEventAndRedirect =()=>{
    window.location.href = `shopJeweleryIndividual.html?`;
}