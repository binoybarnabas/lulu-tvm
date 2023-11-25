const urlParam = new URLSearchParams(window.location.search);

console.log(new URLSearchParams(window.location.search).get("id"));
const id = Number(urlParam.get("id"));
console.log(typeof id);
let filteredData;
let url = "https://dummyjson.com/users";
const movieApiUrl = "https://api.sampleapis.com/movies/family";

const dataProcess = async (url, id) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let movieResponse = await fetch(movieApiUrl);
    let movieData = await movieResponse.json();
    const newData = data.users.filter((userData) => {
      if (userData.id == id) {
        console.log(userData);
        return userData;
      }
    });

    const newMovieData = movieData.filter((movieData) => {
      if (movieData.id == id) {
        return movieData;
      }
    });

    const movieCard = document.querySelector(".movieCard-wrapper");
    const quickNavMovieCard = document.querySelector(".quick-nav-movieCard");

    quickNavMovieCard.textContent = newMovieData[0].title;

    const movieCardImage = document.querySelector(".movieCardImg-cover");
    movieCardImage.src = newMovieData[0].posterURL;

    const movieCardHeading = document.querySelector(".movieCardHeading");
    movieCardHeading.textContent = newMovieData[0].title;

    const director = document.querySelector(".director");
    director.textContent = newData[0].firstName + " " + newData[0].lastName;

    const cast = document.querySelector(".cast");
    cast.textContent = newData[0].maidenName;

    const synopsis = document.querySelector(".synopsis");
    synopsis.textContent = newData[0].userAgent;

    const releaseDate = document.querySelector(".releaseDate");
    releaseDate.textContent = newData[0].birthDate;
  } catch (e) {
    console.log(e);
  }
};

dataProcess(url, id);

const form = document.getElementById("contact-form");
// form.classList.add("opacity-0");
form.style.display = "none";

function openForm() {
  const form = document.getElementById("contact-form");
  form.style.display = "block";
}
function closeForm() {
  const form = document.getElementById("contact-form");
  form.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData(form);
        console.log(formData);
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzMwZwLFDDSWszjKfGglXzyqljx9f9RR51qpPecKb6lPyscpTCpM8ythButhtfil-Pp/exec",

          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          alert("Thank you! Your form is submitted successfully.");
          // window.location.reload();
        } else {
          console.error(
            "Error! Server response:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error!", error.message);
      }
    });
  } else {
    console.error("Form element not found");
  }
});
