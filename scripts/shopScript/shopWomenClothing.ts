const url: string = 'https://fakestoreapi.com/products/';
const cardsPerRow: number = 3;

interface WomenClothing {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
}

const getData = async (url: string): Promise<void> => {
    const response = await fetch(url);
    const data: WomenClothing[] = await response.json();
    console.log(data);

    const womensClothingSection: HTMLElement | null = document.querySelector('.womens-clothing');
    let currentRow: HTMLDivElement | undefined;

    const womensClothingData: WomenClothing[] = data.filter((womensClothing) => {
        if (womensClothing.category === 'women\'s clothing') {
            return womensClothing;
        }
    });

    womensClothingData.forEach((womenClothing, index) => {
        if (index % cardsPerRow === 0) {
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            if (womensClothingSection) {
                womensClothingSection.appendChild(currentRow);
            }
        }

        const womenClothingCard = createWomenClothingCard(womenClothing);
        if (currentRow) {
            currentRow.appendChild(womenClothingCard);
        }
    });

    console.log(womensClothingData);
};

getData(url);

const createWomenClothingCard = (womenClothing: WomenClothing): HTMLDivElement => {
    const card: HTMLDivElement = document.createElement('div');
    card.classList.add('card', 'pop-out', 'col-lg-4', 'col-sm-12');
    card.style.height = '450px';
    card.style.width = '300px';
    card.style.margin = '25px';

    const image: HTMLImageElement = document.createElement('img');
    image.classList.add('img-fluid', 'card-img-top');
    image.style.height = '200px';

    image.style.objectFit = 'contain';
    image.src = womenClothing.image;

    const cardBody: HTMLDivElement = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle: HTMLHeadingElement = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = womenClothing.title;

    const cardText: HTMLParagraphElement = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = womenClothing.category;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const ulListGroup: HTMLUListElement = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');

    const liListItem: HTMLLIElement = document.createElement('li');
    liListItem.classList.add('list-group-item');
    liListItem.textContent = "$" + womenClothing.price;

    ulListGroup.appendChild(liListItem);

    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(ulListGroup);

    card.addEventListener('click', () => {
        addEventAndRedirect(womenClothing);
    });

    return card;
};

const addEventAndRedirect = (womenClothing: WomenClothing): void => {
    window.location.href = `shopIndividual.html?id=${womenClothing.id}&category=${womenClothing.category}`;
};



// let url = 'https://fakestoreapi.com/products/';
// let cardsPerRow = 3;
// const getData = async(url)=>{
// const response = await fetch(url);
// const data = await response.json();
// console.log(data);

// const womensClothingSection = document.querySelector('.womens-clothing');
// let currentRow;

// womensClothingData = data.filter((womensClothing)=>{
//     if(womensClothing.category == 'women\'s clothing'){
//        return womensClothing
//     }
// });

// womensClothingData.forEach((womenClothing, index) => {
//     if (index % cardsPerRow === 0) {
        
//         currentRow = document.createElement('div');
//         currentRow.classList.add('row');
//         womensClothingSection.appendChild(currentRow);
//     }

//     const womenClothingCard = createWomenClothingCard(womenClothing);
//     currentRow.appendChild(womenClothingCard);
// });

// console.log(womenClothingData);


// };

// getData(url);

// const createWomenClothingCard = (womenClothing) => {
//     const card = document.createElement('div');
//     card.classList.add('card','pop-out','col-lg-4','col-sm-12');
//     card.style.height = '450px'; 
//     card.style.width = '300px';
//     card.style.margin = '25px';

//     const image = document.createElement('img');    
//     image.classList.add('img-fluid','card-img-top');
//     image.style.height = '200px';

//     image.style.objectFit = 'contain';
//     image.src = womenClothing.image;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const cardTitle = document.createElement('h5');
//     cardTitle.classList.add('card-title');
//     cardTitle.textContent = womenClothing.title;

//     const cardText = document.createElement('p');
//     cardText.classList.add('card-text');
//     cardText.textContent = womenClothing.category;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);

//     const ulListGroup = document.createElement('ul');
//     ulListGroup.classList.add('list-group');
//     ulListGroup.classList.add('list-group-flush');

//     const liListItem = document.createElement('li');
//     liListItem.classList.add('list-group-item');
//     liListItem.textContent = "$" + womenClothing.price;

//     ulListGroup.appendChild(liListItem);

//     card.appendChild(image);
//     card.appendChild(cardBody);
//     card.appendChild(ulListGroup);

//     card.addEventListener('click', () => {
//         addEventAndRedirect(womenClothing);
//     });

//     return card;
// };

// const addEventAndRedirect = (womenClothing) => {
//     window.location.href = `shopIndividual.html?id=${womenClothing.id}&category=${womenClothing.category}`;
// };




// let url = 'https://fakestoreapi.com/products/';
// const getData = async(url)=>{
// const response = await fetch(url);
// const data = await response.json();
// console.log(data);
// womensClothingData = data.filter((womensClothing)=>{
//     if(womensClothing.category == 'women\'s clothing'){
//        return womensClothing
//     }
// });
// console.log(womensClothingData);
// womensClothingData.map((womensClothing)=>{
//     const womensClothingSection = document.querySelector('.womens-clothing');
//     const womensClothingCard = createWomensClothingCard(womensClothing);
//     womensClothingSection.appendChild(womensClothingCard);
// })

// }

// getData(url);

// const createWomensClothingCard = (womensClothing) =>{
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const womensClothingImage = document.createElement('div');
//     womensClothingImage.classList.add('womens-clothing-image');
//     const image = document.createElement('img');
//     image.src = womensClothing.image;
//     const womensClothingDetails = document.createElement('div');
//     womensClothingDetails.classList.add('womens-clothing-details');
//     const titleh2 = document.createElement('h2');
//     titleh2.textContent = womensClothing.title;
//     const pricep = document.createElement('p');
//     pricep.textContent = "$"+ womensClothing.price;
//     const categoryh4 = document.createElement('h4');
//     categoryh4.textContent = womensClothing.category;

//     card.appendChild(womensClothingImage);
//     womensClothingImage.appendChild(image);
//     womensClothingDetails.appendChild(titleh2);
//     womensClothingDetails.appendChild(pricep);
//     womensClothingDetails.appendChild(categoryh4);
//     card.appendChild(womensClothingDetails);
//     card.addEventListener('click',()=>{
//         addEventAndRedirect(womensClothing);
//     });
//     return card;
// }

// const addEventAndRedirect =(womensClothing)=>{
//     window.location.href = `shopIndividual.html?id=${womensClothing.id}&category=${womensClothing.category}`;
// }