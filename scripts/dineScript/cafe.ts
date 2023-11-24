// Fetching data from API
async function getData(): Promise<void> {
  try {
    const response = await fetch(
      "https://mocki.io/v1/18245941-6357-40b5-8523-03dcff8fca99"
    );
    console.log(response);
 
    const data = await response.json();
    console.log(data);
 
    data.map((userData: UserData) => {
      const showData = document.querySelector(".cafe-section") as HTMLElement;
      showData.classList.add("cafe-section");
 
      const cafeCard = createCafeCards(userData);
      showData.appendChild(cafeCard);
    });
  } catch (error) {
    console.log(error);
  }
}
 
// Define the structure of user data
interface UserData {
  logo: string;
  name: string;
  id: string; // Adjust the type accordingly
}
 
getData();
 
// Creating elements dynamically and adding styles
const createCafeCards = (userData: UserData): HTMLDivElement => {
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
const openNewPage = (userData: UserData): void => {
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
