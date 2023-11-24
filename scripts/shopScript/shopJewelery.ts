const url: string = 'https://fakestoreapi.com/products/category/jewelery';
const cardsPerRow: number = 3;

interface Jewelery {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
}

const getData = async (url: string): Promise<void> => {
    const response = await fetch(url);
    const data: Jewelery[] = await response.json();

    const jewelerySection: HTMLElement | null = document.querySelector('.jewelery');
    let currentRow: HTMLDivElement | undefined;

    data.forEach((jewelery, index) => {
        if (index % cardsPerRow === 0) {
            // Start a new row
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            if (jewelerySection) {
                jewelerySection.appendChild(currentRow);
            }
        }

        const jeweleryCard = createJeweleryCard(jewelery);
        if (currentRow) {
            currentRow.appendChild(jeweleryCard);
        }
    });
};

getData(url);

const createJeweleryCard = (jewelery: Jewelery): HTMLDivElement => {
    const card: HTMLDivElement = document.createElement('div');
    card.classList.add('card', 'pop-out', 'col-lg-4', 'col-sm-12');
    card.style.height = '450px';
    card.style.width = '300px';
    card.style.margin = '25px';

    const image: HTMLImageElement = document.createElement('img');
    image.classList.add('img-fluid', 'card-img-top');
    image.style.height = '200px';
    // Use object-fit to control the aspect ratio of the image
    image.style.objectFit = 'contain';
    image.src = jewelery.image;

    const cardBody: HTMLDivElement = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle: HTMLHeadingElement = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = jewelery.title;

    const cardText: HTMLParagraphElement = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = jewelery.category;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const ulListGroup: HTMLUListElement = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');

    const liListItem: HTMLLIElement = document.createElement('li');
    liListItem.classList.add('list-group-item');
    liListItem.textContent = "$" + jewelery.price;

    ulListGroup.appendChild(liListItem);

    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(ulListGroup);

    card.addEventListener('click', () => {
        addEventAndRedirect(jewelery);
    });

    return card;
};

const addEventAndRedirect = (jewelery: Jewelery): void => {
    window.location.href = `shopIndividual.html?id=${jewelery.id}&category=${jewelery.category}`;
};



// let url = 'https://fakestoreapi.com/products/category/jewelery';
// let cardsPerRow = 3;

// const getData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();

//     const jewelerySection = document.querySelector('.jewelery');
//     let currentRow;

//     data.forEach((jewelery, index) => {
//         if (index % cardsPerRow === 0) {
//             // Start a new row
//             currentRow = document.createElement('div');
//             currentRow.classList.add('row');
//             jewelerySection.appendChild(currentRow);
//         }

//         const jeweleryCard = createJeweleryCard(jewelery);
//         currentRow.appendChild(jeweleryCard);
//     });
// };

// getData(url);

// const createJeweleryCard = (jewelery) => {
//     const card = document.createElement('div');
//     card.classList.add('card','pop-out','col-lg-4','col-sm-12');
//     card.style.height = '450px'; 
//     card.style.width = '300px';
//     card.style.margin = '25px';

//     const image = document.createElement('img');    
//     image.classList.add('img-fluid','card-img-top');
//     image.style.height = '200px';
//     // Use object-fit to control the aspect ratio of the image
//     image.style.objectFit = 'contain';
//     image.src = jewelery.image;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const cardTitle = document.createElement('h5');
//     cardTitle.classList.add('card-title');
//     cardTitle.textContent = jewelery.title;

//     const cardText = document.createElement('p');
//     cardText.classList.add('card-text');
//     cardText.textContent = jewelery.category;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);

//     const ulListGroup = document.createElement('ul');
//     ulListGroup.classList.add('list-group');
//     ulListGroup.classList.add('list-group-flush');

//     const liListItem = document.createElement('li');
//     liListItem.classList.add('list-group-item');
//     liListItem.textContent = "$" + jewelery.price;

//     ulListGroup.appendChild(liListItem);

//     card.appendChild(image);
//     card.appendChild(cardBody);
//     card.appendChild(ulListGroup);

//     card.addEventListener('click', () => {
//         addEventAndRedirect(jewelery);
//     });

//     return card;
// };

// const addEventAndRedirect = (jewelery) => {
//     window.location.href = `shopIndividual.html?id=${jewelery.id}&category=${jewelery.category}`;
// };






// let url = 'https://fakestoreapi.com/products/category/jewelery';
// const getData = async(url)=>{
// const response = await fetch(url);
// const data = await response.json();

// // console.log(data);
// data.map((jewelery)=>{
// const jewelerySection = document.querySelector('.jewelery');
// const jeweleryCard = createJeweleryCard(jewelery);
// jewelerySection.appendChild(jeweleryCard);
// });

// }

// getData(url);

// const createJeweleryCard = (jewelery) =>{
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const jeweleryImage = document.createElement('div');
//     jeweleryImage.classList.add('jewelery-image');
//     const image = document.createElement('img');
//     image.src = jewelery.image;
//     const jeweleryDetails = document.createElement('div');
//     jeweleryDetails.classList.add('jewelery-details');
//     const titleh2 = document.createElement('h2');
//     titleh2.textContent = jewelery.title;
//     const pricep = document.createElement('p');
//     pricep.textContent = "$"+ jewelery.price;
//     const categoryh4 = document.createElement('h4');
//     categoryh4.textContent = jewelery.category;


//     card.appendChild(jeweleryImage);
//     jeweleryImage.appendChild(image);
//     jeweleryDetails.appendChild(titleh2);
//     jeweleryDetails.appendChild(pricep);
//     jeweleryDetails.appendChild(categoryh4);
//     card.appendChild(jeweleryDetails);
//     card.addEventListener('click',()=>{
//         addEventAndRedirect(jewelery);

//     });

//     return card;
// }

// const addEventAndRedirect =(jewelery)=>{
//     console.log(jewelery);
//     window.location.href = `shopIndividual.html?id=${jewelery.id}&category=${jewelery.category}`;
// }