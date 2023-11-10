// const u = "https://api.slingacademy.com/v1/sample-data/photos";

// const getDatas = async (url) => {
//   try {
//     const response = await fetch(url);
//     //console.log(response);
//     const data = await response.json();
//     console.log(data);
//     data.users.map((userData) => {
//       const movieCards = document.querySelector(".movie-cards");
//       const cardData = createCardData(userData);
//       movieCards.appendChild(cardData);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// getDatas(u);

const url = "https://dummyjson.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    console.log(data);
    data.users.map((userData) => {
      const movieCards = document.querySelector(".movie-cards");
      const cardData = createCardData(userData);
      movieCards.appendChild(cardData);
    });
  } catch (e) {
    console.log(e);
  }
};

getData(url);

const createCardData = (userData) => {
  const div = document.createElement("div");
  div.classList.add("movie-card");

  const div1 = document.createElement("div");
  div1.classList.add("movie-cards-img");
  const img = document.createElement("img");
  img.src = userData.image;

  const div2 = document.createElement("div");
  div2.classList.add("movie-cards-desc");
  const movieName = document.createElement("h2");
  const directorTitle = document.createElement("strong");
  const director = document.createElement("span");
  const castTitle = document.createElement("strong");
  const cast = document.createElement("span");
  const synopsisTitle = document.createElement("strong");
  const synopsis = document.createElement("span");
  const releaseDateTitle = document.createElement("strong");
  const releaseDate = document.createElement("span");

  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");

  movieName.textContent = userData.company.name;
  directorTitle.innerHTML = "DIRECTOR : ";
  director.textContent = userData.firstName + " " + userData.lastName;
  castTitle.innerHTML = "CAST : ";
  cast.textContent = userData.maidenName;
  synopsisTitle.textContent = "SYNOPSIS : ";
  synopsis.textContent = userData.userAgent;
  releaseDateTitle.textContent = "RELEASE DATE : ";
  releaseDate.textContent = userData.birthDate;

  div1.appendChild(img);

  div2.appendChild(movieName);
  div2.appendChild(directorTitle);
  div2.appendChild(director);
  div2.appendChild(br1);
  div2.appendChild(castTitle);
  div2.appendChild(cast);
  div2.appendChild(br2);
  div2.appendChild(synopsisTitle);
  div2.appendChild(synopsis);
  div2.appendChild(br3);
  div2.appendChild(releaseDateTitle);
  div2.appendChild(releaseDate);

  div.appendChild(div1);
  div.appendChild(div2);
  //   movieCards.appendChild(div);

  div.addEventListener("click", () => {
    openNewPage(userData);
    console.log("hello event");
  });
  return div;
};

const openNewPage = (userData) => {
  window.location.href = `movieCard.html?id=${userData.id}`;
};
