var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var url = 'https://fakestoreapi.com/products/category/electronics';
var cardsPerRow = 3;
var getData = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, electronicSection, currentRow;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                electronicSection = document.querySelector('.electronics');
                data.forEach(function (electronic, index) {
                    if (index % cardsPerRow === 0) {
                        // Start a new row
                        currentRow = document.createElement('div');
                        currentRow.classList.add('row');
                        if (electronicSection) {
                            electronicSection.appendChild(currentRow);
                        }
                    }
                    var electronicCard = createElectronicCard(electronic);
                    if (currentRow) {
                        currentRow.appendChild(electronicCard);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
getData(url);
var createElectronicCard = function (electronic) {
    var card = document.createElement('div');
    card.classList.add('card', 'pop-out', 'col-lg-6', 'col-sm-12');
    card.style.height = '450px';
    card.style.width = '300px';
    card.style.margin = '25px';
    var image = document.createElement('img');
    image.classList.add('img-fluid', 'card-img-top');
    image.style.height = '200px';
    // Use object-fit to control the aspect ratio of the image
    image.style.objectFit = 'contain';
    image.src = electronic.image;
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = electronic.title;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = electronic.category;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    var ulListGroup = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');
    var liListItem = document.createElement('li');
    liListItem.classList.add('list-group-item');
    liListItem.textContent = "$" + electronic.price;
    ulListGroup.appendChild(liListItem);
    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(ulListGroup);
    card.addEventListener('click', function () {
        addEventAndRedirect(electronic);
    });
    return card;
};
var addEventAndRedirect = function (electronic) {
    window.location.href = "shopIndividual.html?id=".concat(electronic.id, "&category=").concat(electronic.category);
};
var sessionUser = localStorage.getItem('userCache');
if (sessionUser == null) {
    console.log("inside userCache");
    var dropdownContainer = document.getElementById("dropdownContainer");
    dropdownContainer.style.display = 'none';
}
else {
    var dropdownToggle = document.getElementById("dropdownToggle");
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
        var _a;
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
        (_a = document.getElementById('confirmLogoutBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
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
