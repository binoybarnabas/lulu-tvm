
const url = "https://mocki.io/v1/3f4629fa-d504-4c46-8514-3b490d9553e2";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.map((userData) => {
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
  offerImg.src = userData.url;
  h1.textContent = userData.name;
  h3.textContent = userData.offer;
  h2.textContent = userData.date;

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
