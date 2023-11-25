// Fetching data from API
async function getData() {
  try {
    const response = await fetch(
      "https://mocki.io/v1/6dbcec7e-124d-458a-9e28-4b3bba8c6091"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    data.map((userData) => {
      showData = document.querySelector(".court-section");
      showData.classList.add("court-section");
      const courtCard = createCourtCards(userData);
      showData.appendChild(courtCard);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();

// Creating elements dynamically and adding styles
const createCourtCards = (userData) => {
  const courtCards = document.createElement("div");
  courtCards.classList.add("court-cards");
  const courtImage = document.createElement("img");
  courtImage.classList.add("court-image");
  const courtName = document.createElement("p");
  courtName.classList.add("court-name");

  // Storing values into the elements
  courtImage.src = userData.logo;
  courtName.textContent = userData.name;

  // Appending elements to the parent elements
  courtCards.appendChild(courtImage);
  courtCards.appendChild(courtName);

  // Eventlistener to go to new page for the corresponding ID
  courtCards.addEventListener("click", () => {
    openNewPage(userData);
  });

  return courtCards;
};

// Eventlistener function
const openNewPage = (userData) => {
  window.location.href = `innerCourt.html?id=${userData.id}`;
};
