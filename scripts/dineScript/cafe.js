var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetching data from API
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://mocki.io/v1/18245941-6357-40b5-8523-03dcff8fca99");
            console.log(response);
            const data = yield response.json();
            console.log(data);
            data.map((userData) => {
                const showData = document.querySelector(".cafe-section");
                showData.classList.add("cafe-section");
                const cafeCard = createCafeCards(userData);
                showData.appendChild(cafeCard);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
getData();
// Creating elements dynamically and adding styles
const createCafeCards = (userData) => {
    const cafeCards = document.createElement("div");
    cafeCards.classList.add("cafe-cards");
    const cafeImage = document.createElement("img");
    cafeImage.classList.add("cafe-image");
    const cafeName = document.createElement("p");
    cafeName.classList.add("cafe-name");
    // Storing values into the elements
    cafeImage.src = userData.logo;
    cafeName.textContent = userData.name;
    // Appending elements to the parent elements
    cafeCards.appendChild(cafeImage);
    cafeCards.appendChild(cafeName);
    // Eventlistener to go to a new page for the corresponding ID
    cafeCards.addEventListener("click", () => {
        openNewPage(userData);
    });
    return cafeCards;
};
// Eventlistener function
const openNewPage = (userData) => {
    window.location.href = `innerCafe.html?id=${userData.id}`;
};
// // Fetching data from API
// async function getData() {
//   try {
//     const response = await fetch(
//       "https://mocki.io/v1/18245941-6357-40b5-8523-03dcff8fca99"
//     );
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//     data.map((userData) => {
//       showData = document.querySelector(".cafe-section");
//       showData.classList.add("cafe-section");
//       const cafeCard = createCafeCards(userData);
//       showData.appendChild(cafeCard);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();
// // Creating elements dynamically and adding styles
// const createCafeCards = (userData) => {
//   const cafeCards = document.createElement("div");
//   cafeCards.classList.add("cafe-cards");
//   const cafeImage = document.createElement("img");
//   cafeImage.classList.add("cafe-image");
//   const cafeName = document.createElement("p");
//   cafeName.classList.add("cafe-name");
//   // Storing values into the elements
//   cafeImage.src = userData.logo;
//   cafeName.textContent = userData.name;
//   // Appending elements to the parent elements
//   cafeCards.appendChild(cafeImage);
//   cafeCards.appendChild(cafeName);
//   // Eventlistener to go to new page for the corresponding ID
//   cafeCards.addEventListener("click", () => {
//     openNewPage(userData);
//   });
//   return cafeCards;
// };
// // Eventlistener function
// const openNewPage = (userData) => {
//   window.location.href = `innerCafe.html?id=${userData.id}`;
// };
