// const url: string = "https://dummyjson.com/users";
// const movieApiUrl: string = "https://api.sampleapis.com/movies/family";

import {UserData,MovieData} from "../moviesPage/moviesType"



// type UserData = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   maidenName: string;
//   userAgent: string;
//   birthDate: string;
//   image:string;
// };

// type MovieData = {
//   id: number;
//   title: string;
//   posterURL: string;
// };

// Async function fetching data from an API
async function fetchDataFromAPI(): Promise<any> {
  const apiUrl = "https://dummyjson.com/users";
  const apiMovieUrl = "https://api.sampleapis.com/movies/family";

  try {
    const response = await fetch(apiUrl);
    const responseMovie = await fetch(apiMovieUrl);

    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (!responseMovie.ok) {
      throw new Error(`HTTP error! Status: ${responseMovie.status}`);
    }
    
    const data = await response.json();
    const movieData = await responseMovie.json();
    // const movieData: MovieData[] = await movieDataResponse.json();
    return { data, movieData };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

async function processAPIData() {
  try {
    const { data, movieData } = await fetchDataFromAPI();
    console.log('API Data:', data);
    console.log('Movie Data:', movieData);


    data.users.map((userData:any,index:number) => {
      const movieCards = document.querySelector(".movie-cardss") as HTMLElement;
      const cardData = createCardData(userData,movieData[index]);
      console.log(userData);
      // console.log(movieData[index]);
      movieCards.appendChild(cardData);
    });


  } catch (error) {
    console.error('Error processing API data:', error);
  }
}

processAPIData();


const createCardData = (userData: UserData,movieData: MovieData): HTMLElement => {
  const div = document.createElement("div");
  div.classList.add("col");

  const div1 = document.createElement("div");
  div1.classList.add("card","h-100");

  div1.style.marginLeft="0px";
  div1.style.marginLeft="0px";



  const img = document.createElement("img");
  img.classList.add("card-img-top","h-100");

  // img.style.marginTop = "10px";

  const div2 = document.createElement("div");
  div2.classList.add("card-body","text-center");

  const movieName = document.createElement("h5");
  movieName.classList.add("card-title");
  
  const directorTitle = document.createElement("p");
  directorTitle.classList.add("card-text");

  // directorTitle.style.alignContent="center";

  img.src = movieData.posterURL;
  movieName.textContent =movieData.title;

  directorTitle.textContent = userData.firstName + " " + userData.lastName;



 div2.appendChild(movieName);
 div2.appendChild(directorTitle);

 div1.appendChild(img);
 div1.appendChild(div2);
  div.appendChild(div1);

  // const div1 = document.createElement("div");
  // div1.classList.add("movie-cards-img");
  // const img = document.createElement("img");
  // // img.src = userData.image;
  // img.src = movieData.posterURL;

  // const div2 = document.createElement("div");
  // div2.classList.add("movie-cards-desc");
  // const movieName = document.createElement("h2");
  // const directorTitle = document.createElement("strong");
  // const director = document.createElement("span");
  // const castTitle = document.createElement("strong");
  // const cast = document.createElement("span");
  // const synopsisTitle = document.createElement("strong");
  // const synopsis = document.createElement("span");
  // const releaseDateTitle = document.createElement("strong");
  // const releaseDate = document.createElement("span");

  // const br1 = document.createElement("br");
  // const br2 = document.createElement("br");
  // const br3 = document.createElement("br");

  // movieName.textContent =movieData.title;
  // directorTitle.innerHTML = "DIRECTOR : ";
  // director.textContent = userData.firstName + " " + userData.lastName + userData.id;
  // castTitle.innerHTML = "CAST : ";
  // cast.textContent = userData.maidenName;
  // synopsisTitle.textContent = "SYNOPSIS : ";
  // synopsis.textContent = userData.userAgent;
  // releaseDateTitle.textContent = "RELEASE DATE : ";
  // releaseDate.textContent = userData.birthDate;

  // div1.appendChild(img);

  // div2.appendChild(movieName);
  // div2.appendChild(directorTitle);
  // div2.appendChild(director);
  // div2.appendChild(br1);
  // div2.appendChild(castTitle);
  // div2.appendChild(cast);
  // div2.appendChild(br2);
  // div2.appendChild(synopsisTitle);
  // div2.appendChild(synopsis);
  // div2.appendChild(br3);
  // div2.appendChild(releaseDateTitle);
  // div2.appendChild(releaseDate);

  // div.appendChild(div1);
  // div.appendChild(div2);

  div.addEventListener("click", () => {
    openNewPage(userData);
    console.log("hello event");
  });
  return div;
};

const openNewPage = (userData: UserData): void => {
  window.location.href = `movieCard.html?id=${userData.id}`;
};
