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
    card.classList.add('card', 'pop-out', 'col-sm-12');
    card.style.height = '450px';
    card.style.width = '300px';
    card.style.marginLeft = '25px';

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

const sessionUser:string | null = localStorage.getItem('userCache');

if(sessionUser == null){
  console.log("inside userCache");
  const dropdownContainer = document.getElementById("dropdownContainer") as HTMLDivElement;
  dropdownContainer.style.display = 'none';
  
}
else{
const dropdownToggle = document.getElementById("dropdownToggle") as HTMLDivElement;
dropdownToggle.style.display = 'block';
dropdownToggle.textContent = sessionUser;
console.log(sessionUser);
}
  
  document.addEventListener("DOMContentLoaded", () => {
    const dropdownContainer = document.getElementById("dropdownContainer") as HTMLDivElement;
    const dropdownToggle = document.getElementById("dropdownToggle") as HTMLSpanElement;
    let dropdownMenu: HTMLDivElement | null = null; // Track the dropdown menu
  
    // Create a function to handle the click event
    function handleDropdownClick() {
      // If the dropdown menu exists, remove it and return
      if (dropdownMenu) {
        dropdownContainer.removeChild(dropdownMenu);
        dropdownMenu = null;
        return;
      }
  
      // Create the dropdown menu 
      dropdownMenu = document.createElement("div");
      dropdownMenu.classList.add("dropdown-menu", "show");
  
      // Create the logout option
      const logoutOption = document.createElement("a");
      logoutOption.classList.add("dropdown-item");
      logoutOption.href = "#";
      logoutOption.textContent = "Logout";
      logoutOption.addEventListener("click", () => {
        // Handle the logout logic here
        // alert("Logout clicked!");
        $('#logoutConfirmationModal').modal('show');
      });
      
      // Add click event listener to confirm logout button in the modal
      document.getElementById('confirmLogoutBtn')?.addEventListener('click', function () {
        // Handle the logout logic here
        // Redirect to home.html
        // Replace "yourCookieName" with the actual name of your cookie
        document.cookie = "sessionUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.removeItem('userCache');
        console.log("cookie removed : " + document.cookie);
        window.location.href = '../../pages/shopPage/shopPageLogin.html';
      });
      // Append the logout option to the dropdown menu
      dropdownMenu.appendChild(logoutOption);
  
      // Append the dropdown menu to the container
      dropdownContainer.appendChild(dropdownMenu);
    }
  
    // Add the click event listener to the container
    dropdownToggle.addEventListener("click", handleDropdownClick);
  });
  

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