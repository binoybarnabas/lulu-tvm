const url: string = 'https://fakestoreapi.com/products/';
const cardsPerRow: number = 3;

interface MenClothing {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
}

const getData = async (url: string): Promise<void> => {
    const response = await fetch(url);
    const data: MenClothing[] = await response.json();

    console.log(data);

    const menClothingSection: HTMLElement | null = document.querySelector('.mens-clothing');
    let currentRow: HTMLDivElement | undefined;

    const mensClothingData: MenClothing[] = data.filter((mensClothing) => {
        if (mensClothing.category === 'men\'s clothing') {
            return mensClothing;
        }
    });

    mensClothingData.forEach((menClothing, index) => {
        if (index % cardsPerRow === 0) {
            // Start a new row
            currentRow = document.createElement('div');
            currentRow.classList.add('row');
            if (menClothingSection) {
                menClothingSection.appendChild(currentRow);
            }
        }

        const menClothingCard = createMenClothingCard(menClothing);
        if (currentRow) {
            currentRow.appendChild(menClothingCard);
        }
    });
};

getData(url);

const createMenClothingCard = (menClothing: MenClothing): HTMLDivElement => {
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
    image.src = menClothing.image;

    const cardBody: HTMLDivElement = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle: HTMLHeadingElement = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = menClothing.title;

    const cardText: HTMLParagraphElement = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = menClothing.category;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const ulListGroup: HTMLUListElement = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');

    const liListItem: HTMLLIElement = document.createElement('li');
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

const addEventAndRedirect = (menClothing: MenClothing): void => {
    window.location.href = `shopIndividual.html?id=${menClothing.id}&category=${menClothing.category}`;
};


const getCookie = (cookieName:string) => {
    const cookies = document.cookie.split(';');
  
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
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

// const menClothingSection = document.querySelector('.mens-clothing');
// let currentRow;
// // console.log(data);
// mensClothingData = data.filter((mensClothing)=>{
//     if(mensClothing.category == 'men\'s clothing'){
//        return mensClothing
//     }
// });

// mensClothingData.forEach((menClothing, index) => {
//     if (index % cardsPerRow === 0) {
//         // Start a new row
//         currentRow = document.createElement('div');
//         currentRow.classList.add('row');
//         menClothingSection.appendChild(currentRow);
//     }

//     const menClothingCard = createMenClothingCard(menClothing);
//     currentRow.appendChild(menClothingCard);
// });

// };

// getData(url);

// const createMenClothingCard = (menClothing) => {
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
//     image.src = menClothing.image;

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const cardTitle = document.createElement('h5');
//     cardTitle.classList.add('card-title');
//     cardTitle.textContent = menClothing.title;

//     const cardText = document.createElement('p');
//     cardText.classList.add('card-text');
//     cardText.textContent = menClothing.category;

//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardText);

//     const ulListGroup = document.createElement('ul');
//     ulListGroup.classList.add('list-group');
//     ulListGroup.classList.add('list-group-flush');

//     const liListItem = document.createElement('li');
//     liListItem.classList.add('list-group-item');
//     liListItem.textContent = "$" + menClothing.price;

//     ulListGroup.appendChild(liListItem);

//     card.appendChild(image);
//     card.appendChild(cardBody);
//     card.appendChild(ulListGroup);

//     card.addEventListener('click', () => {
//         addEventAndRedirect(menClothing);
//     });

//     return card;
// };

// const addEventAndRedirect = (menClothing) => {
//     window.location.href = `shopIndividual.html?id=${menClothing.id}&category=${menClothing.category}`;
// };



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