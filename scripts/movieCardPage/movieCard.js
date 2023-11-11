const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get("id"));
console.log(typeof id);
let filteredData;
let url = "https://dummyjson.com/users";

const dataProcess = async (url, id) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    const newData = data.users.filter((userData) => {
      if (userData.id == id) {
        console.log(userData);
        return userData;
      }
    });

    const movieCard = document.querySelector(".movieCard-wrapper");
    const quickNavMovieCard = document.querySelector(".quick-nav-movieCard");

    const movieCardHeading = document.createElement("div");
    movieCardHeading.classList.add("movieCardHeading");

    const movieCardDetail = document.createElement("div");
    movieCardDetail.classList.add("movieCardDetail");

    const movieCardDesc = document.createElement("div");
    movieCardDesc.classList.add("movieCardDesc");

    const movieCardImg = document.createElement("div");
    movieCardImg.classList.add("movieCardImg");

    const directorTitle = document.createElement("strong");
    const director = document.createElement("span");
    const castTitle = document.createElement("strong");
    const cast = document.createElement("span");
    const synopsisTitle = document.createElement("strong");
    const synopsis = document.createElement("span");
    const releaseDateTitle = document.createElement("strong");
    const releaseDate = document.createElement("span");

    quickNavMovieCard.textContent = newData[0].company.name;

    const movieCardImage = document.createElement("img");
    movieCardImage.src = newData[0].image;

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");

    movieCardHeading.textContent = newData[0].company.name;
    directorTitle.innerHTML = "DIRECTOR : ";
    director.textContent = newData[0].firstName + " " + newData[0].lastName;
    castTitle.innerHTML = "CAST : ";
    cast.textContent = newData[0].maidenName;
    synopsisTitle.textContent = "SYNOPSIS : ";
    synopsis.textContent = newData[0].userAgent;
    releaseDateTitle.textContent = "RELEASE DATE : ";
    releaseDate.textContent = newData[0].birthDate;

    movieCardDesc.appendChild(directorTitle);
    movieCardDesc.appendChild(director);
    movieCardDesc.appendChild(br1);
    movieCardDesc.appendChild(castTitle);
    movieCardDesc.appendChild(cast);
    movieCardDesc.appendChild(br2);
    movieCardDesc.appendChild(synopsisTitle);
    movieCardDesc.appendChild(synopsis);
    movieCardDesc.appendChild(br3);
    movieCardDesc.appendChild(releaseDateTitle);
    movieCardDesc.appendChild(releaseDate);

    movieCardImg.appendChild(movieCardImage);

    movieCardDetail.appendChild(movieCardDesc);
    movieCardDetail.appendChild(movieCardImg);

    movieCard.appendChild(movieCardHeading);
    movieCard.appendChild(movieCardDetail);
  } catch (e) {
    console.log(e);
  }
};

dataProcess(url, id);
