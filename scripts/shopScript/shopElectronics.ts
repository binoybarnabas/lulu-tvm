const url: string = 'https://fakestoreapi.com/products/category/electronics';
const cardsPerRow: number = 3;

interface Electronic {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
}

const getData = async (url: string): Promise<void> => {
    const response = await fetch(url);
    const data: Electronic[] = await response.json();

    const electronicSection: HTMLElement | null = document.querySelector('.electronics');
    let currentRow: HTMLDivElement | undefined;

    data.forEach((electronic, index) => {
        if (index % cardsPerRow === 0) {
            // Start a new row
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            if (electronicSection) {
                electronicSection.appendChild(currentRow);
            }
        }

        const electronicCard = createElectronicCard(electronic);
        if (currentRow) {
            currentRow.appendChild(electronicCard);
        }
    });
};

getData(url);

const createElectronicCard = (electronic: Electronic): HTMLDivElement => {
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
    image.src = electronic.image;

    const cardBody: HTMLDivElement = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle: HTMLHeadingElement = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = electronic.title;

    const cardText: HTMLParagraphElement = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = electronic.category;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const ulListGroup: HTMLUListElement = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');

    const liListItem: HTMLLIElement = document.createElement('li');
    liListItem.classList.add('list-group-item');
    liListItem.textContent = "$" + electronic.price;

    ulListGroup.appendChild(liListItem);

    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(ulListGroup);

    card.addEventListener('click', () => {
        addEventAndRedirect(electronic);
    });

    return card;
};

const addEventAndRedirect = (electronic: Electronic): void => {
    window.location.href = `shopIndividual.html?id=${electronic.id}&category=${electronic.category}`;
};




// let url = 'https://fakestoreapi.com/products/category/electronics';
// let cardsPerRow = 3;

// const getData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();

//     const electronicSection = document.querySelector('.electronics');
//     let currentRow;

//     data.forEach((electronic, index) => {
//         if (index % cardsPerRow === 0) {
//             // Start a new row
//             currentRow = document.createElement('div');
//             currentRow.classList.add('row');
//             electronicSection.appendChild(currentRow);
//         }

//         const electronicCard = createElectronicCard(electronic);
//         currentRow.appendChild(electronicCard);
//     });
// };

// getData(url);

// const createElectronicCard = (electronic) => {
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
//     image.src = electronic.image;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const cardTitle = document.createElement('h5');
//     cardTitle.classList.add('card-title');
//     cardTitle.textContent = electronic.title;

//     const cardText = document.createElement('p');
//     cardText.classList.add('card-text');
//     cardText.textContent = electronic.category;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);

//     const ulListGroup = document.createElement('ul');
//     ulListGroup.classList.add('list-group');
//     ulListGroup.classList.add('list-group-flush');

//     const liListItem = document.createElement('li');
//     liListItem.classList.add('list-group-item');
//     liListItem.textContent = "$" + electronic.price;

//     ulListGroup.appendChild(liListItem);

//     card.appendChild(image);
//     card.appendChild(cardBody);
//     card.appendChild(ulListGroup);

//     card.addEventListener('click', () => {
//         addEventAndRedirect(electronic);
//     });

//     return card;
// };

// const addEventAndRedirect = (electronic) => {
//     window.location.href = `shopIndividual.html?id=${electronic.id}&category=${electronic.category}`;
// };



// const createElectronicCard = (electronic) =>{
//     const card = document.createElement('div');
//     card.classList.add('card');
    
//     const productImage = document.createElement('div');
//     productImage.classList.add('product-image');
//     const image = document.createElement('img');
//     image.src = electronic.image;
//     const productDetails = document.createElement('div');
//     productDetails.classList.add('product-details');
//     const titleh2 = document.createElement('h2');
//     titleh2.textContent = electronic.title;
//     const pricep = document.createElement('p');
//     pricep.textContent = "$"+ electronic.price;
//     const categoryh4 = document.createElement('h4');
//     categoryh4.textContent = electronic.category;


//     card.appendChild(productImage);
//     productImage.appendChild(image);
//     productDetails.appendChild(titleh2);
//     productDetails.appendChild(pricep);
//     productDetails.appendChild(categoryh4);
//     card.appendChild(productDetails);
//     card.addEventListener('click',()=>{
//         addEventAndRedirect(electronic);
//     });

//     return card;
// }