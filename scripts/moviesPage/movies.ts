
import {UserData,MovieData} from "../moviesPage/moviesType"

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
    throw error;
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

  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div2.classList.add("card-body", "text-center", "opacity-0", "position-absolute", "top-50", "translate-middle-y");
  div2.classList.add("h-100","w-100");

  div1.style.display = "flex";
div1.style.alignItems = "center";

div1.addEventListener('mouseover', () => {
  div2.classList.add("opacity-75");
  // div2.classList.add("show");
});

div1.addEventListener('mouseout', () => {
  div2.classList.add("opacity-0");
  div2.classList.remove("opacity-75");
  // div2.classList.remove("show");
});

  div2.style.backgroundColor="rgba(0, 0, 0, 0.95)";
  div3.style.marginTop="90%";
  div3.classList.add("card-text-opacity");
  div3.style.fontFamily='Roboto', "sans-serif";
  

  const movieName = document.createElement("h5");
  movieName.classList.add("card-title");
  
  const directorTitle = document.createElement("p");
  directorTitle.classList.add("card-text");

  img.src = movieData.posterURL;
  movieName.textContent =movieData.title;

  directorTitle.textContent = userData.firstName + " " + userData.lastName;

  div3.appendChild(movieName);
  div3.appendChild(directorTitle);

  div2.appendChild(div3);

 div1.appendChild(img);
 div1.appendChild(div2);
  div.appendChild(div1);

  div.addEventListener("click", () => {
    openNewPage(userData);
    console.log("hello event");
  });
  return div;
};

const openNewPage = (userData: UserData): void => {
  window.location.href = `movieCard.html?id=${userData.id}`;
};
