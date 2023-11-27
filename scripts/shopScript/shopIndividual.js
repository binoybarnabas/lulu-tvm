let url = 'https://fakestoreapi.com/products/'
const urlParam = new URLSearchParams(window.location.search);
const id = Number(urlParam.get('id'));
const category = urlParam.get('category');
// console.log(id);
// console.log(category);


const dataProcess = async (url,id)=>{
    try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //console.log(typeof(data[0].id));
    const newData = data.filter((productData)=>{
        if(productData.id == id){
               return productData;   
        }
    }
    );
    const shopIndividualSection = document.querySelector('.shop-individual');
    const shopItem = createShopCard(newData[0]);
    shopIndividualSection.appendChild(shopItem);

    }
    catch(e){
        console.log(e);
    }
}

dataProcess(url,id);

const createShopCard = (item) => {
    // Create card using Bootstrap classes
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'shadow','col-sm-5');
    card.style.overflow = 'hidden';
    // Product image section
    const productImage = document.createElement('div');
    productImage.classList.add('product-image','img-fluid');
    const image = document.createElement('img');
    image.src = item.image;
    image.classList.add('card-img-top', 'img-fluid'); // Added 'img-fluid' for responsive images
    productImage.appendChild(image);

    // Product details section
    const productDetails = document.createElement('div');
    productDetails.classList.add('card-body');

    // Title
    const titleh2 = document.createElement('h2');
    titleh2.classList.add('card-title');
    titleh2.textContent = item.title;

    // Rating
    const rating = document.createElement('span');
    rating.classList.add('card-text');
    rating.textContent = "Rating: " + item.rating.rate + " (" + item.rating.count + ")";

    // Price
    const pricep = document.createElement('p');
    pricep.classList.add('card-text', 'font-weight-bold');
    pricep.textContent = "$" + item.price;

    // Category
    const categoryh4 = document.createElement('h4');
    categoryh4.classList.add('card-subtitle', 'mb-2', 'text-muted');
    categoryh4.textContent = item.category;

    // Description
    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = item.description;

    // Append elements to the card
    productDetails.appendChild(titleh2);
    productDetails.appendChild(rating);
    productDetails.appendChild(pricep);
    productDetails.appendChild(categoryh4);
    productDetails.appendChild(description);
    card.appendChild(productImage);
    card.appendChild(productDetails);

    return card;
}

const sessionUser= localStorage.getItem('userCache');

if(sessionUser == null){
  console.log("inside userCache");
  const dropdownContainer = document.getElementById("dropdownContainer");
  dropdownContainer.style.display = 'none';
  
}
else{
const dropdownToggle = document.getElementById("dropdownToggle");
dropdownToggle.style.display = 'block';
dropdownToggle.textContent = sessionUser;
console.log(sessionUser);
}

document.addEventListener("DOMContentLoaded", function () {
    var dropdownContainer = document.getElementById("dropdownContainer");
    var dropdownToggle = document.getElementById("dropdownToggle");
    var dropdownMenu = null; // Track the dropdown menu
  
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
      var logoutOption = document.createElement("a");
      logoutOption.classList.add("dropdown-item");
      logoutOption.href = "#";
      logoutOption.textContent = "Logout";
      logoutOption.addEventListener("click", function () {
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
  




// let url = 'https://fakestoreapi.com/products/'
// const urlParam = new URLSearchParams(window.location.search);
// const id = Number(urlParam.get('id'));
// const category = urlParam.get('category');
// // console.log(id);
// // console.log(category);


// const dataProcess = async (url,id)=>{
//     try{
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
//     //console.log(typeof(data[0].id));
//     const newData = data.filter((productData)=>{
//         if(productData.id == id){
//                return productData;   
//         }
//     }
//     );
//     const shopIndividualSection = document.querySelector('.shop-individual');
//     const shopItem = createShopCard(newData[0]);
//     shopIndividualSection.appendChild(shopItem);

//     }
//     catch(e){
//         console.log(e);
//     }
// }

// dataProcess(url,id);

// const createShopCard = (item) =>{
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const productImage = document.createElement('div');
//     productImage.classList.add('product-image');
//     const image = document.createElement('img');
//     image.src = item.image;
//     const productDetails = document.createElement('div');
//     productDetails.classList.add('product-details');
//     const titleh2 = document.createElement('h2');
//     titleh2.textContent = item.title;
//     const rating = document.createElement('span');
//     rating.textContent = "Rating : "+ item.rating.rate + " (" +item.rating.count
//     + ")";
//     const pricep = document.createElement('p');
//     pricep.textContent = "$"+ item.price;
//     const categoryh4 = document.createElement('h4');
//     categoryh4.textContent = item.category;
//     const description = document.createElement('p');
//     description.textContent = item.description;

//     card.appendChild(productImage);
//     productImage.appendChild(image);
//     productDetails.appendChild(titleh2);
//     productDetails.appendChild(rating);
//     productDetails.appendChild(pricep);
//     productDetails.appendChild(categoryh4);
//     productDetails.appendChild(description);
//     card.appendChild(productDetails);

//     return card;
// }