// Fetching data from API

const url = "https://dummyjson.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.users.map((userData) => {
      showData = document.querySelector(".display");
      const offerData = createOfferData(userData);
      showData.appendChild(offerData);
    });
  } catch (e) {
    console.log(e);
  }
};

getData(url);

//Creating elements dynamically
const createOfferData = (userData) => {
  const offerCards = document.createElement("div");
  offerCards.classList.add("item");
  const offerImg = document.createElement("img");
  const h1 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h2 = document.createElement("h2");

  //Storing values into elements
  offerImg.src = userData.image;
  h1.textContent = userData.firstName;
  h3.textContent = userData.company.department;
  h2.textContent = userData.birthDate;

  //Appending element to parent elements
  offerCards.appendChild(offerImg);
  offerCards.appendChild(h1);
  offerCards.appendChild(h3);
  offerCards.appendChild(h2);

  //EventListener to go to new page for the required ID
  offerCards.addEventListener("click", () => {
    openNewPage(userData);
    console.log("hello event");
  });
  return offerCards;
};

const openNewPage = (userData) => {
  window.location.href = `offersInner.html?id=${userData.id}`;
};
