

async function getData() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/a21bfee4-47a8-4198-ba2d-873286142db7"
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      data.map((userData) => {
        showData = document.querySelector(".cards");
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
    courtImage.src = userData.url;
    courtName.textContent = userData.title;
  
    // Appending elements to the parent elements
    courtCards.appendChild(courtImage);
    courtCards.appendChild(courtName);
  
    // Eventlistener to go to new page for the corresponding ID
    courtCards.addEventListener("click", () => {
      openNewPage(userData);
    });
  
    return courtCards;
  };