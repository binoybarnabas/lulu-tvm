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
var url = 'https://fakestoreapi.com/products/';
var cardsPerRow = 3;
var getData = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var response, data, menClothingSection, currentRow;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                menClothingSection = document.querySelector('.mens-clothing');
                // console.log(data);
                mensClothingData = data.filter(function (mensClothing) {
                    if (mensClothing.category == 'men\'s clothing') {
                        return mensClothing;
                    }
                });
                mensClothingData.forEach(function (menClothing, index) {
                    if (index % cardsPerRow === 0) {
                        // Start a new row
                        currentRow = document.createElement('div');
                        currentRow.classList.add('row');
                        menClothingSection.appendChild(currentRow);
                    }
                    var menClothingCard = createMenClothingCard(menClothing);
                    currentRow.appendChild(menClothingCard);
                });
                return [2 /*return*/];
        }
    });
}); };
getData(url);
var createMenClothingCard = function (menClothing) {
    var card = document.createElement('div');
    card.classList.add('card', 'pop-out', 'col-lg-4', 'col-sm-12');
    card.style.height = '450px';
    card.style.width = '300px';
    card.style.margin = '25px';
    var image = document.createElement('img');
    image.classList.add('img-fluid', 'card-img-top');
    image.style.height = '200px';
    // Use object-fit to control the aspect ratio of the image
    image.style.objectFit = 'contain';
    image.src = menClothing.image;
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = menClothing.title;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = menClothing.category;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    var ulListGroup = document.createElement('ul');
    ulListGroup.classList.add('list-group');
    ulListGroup.classList.add('list-group-flush');
    var liListItem = document.createElement('li');
    liListItem.classList.add('list-group-item');
    liListItem.textContent = "$" + menClothing.price;
    ulListGroup.appendChild(liListItem);
    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(ulListGroup);
    card.addEventListener('click', function () {
        addEventAndRedirect(menClothing);
    });
    return card;
};
var addEventAndRedirect = function (menClothing) {
    window.location.href = "shopIndividual.html?id=".concat(menClothing.id, "&category=").concat(menClothing.category);
};
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
