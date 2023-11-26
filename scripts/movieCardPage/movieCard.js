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

// document.addEventListener("DOMContentLoaded", function () {
//   // const form = document.getElementById("contact-form");
//   // if (form) {
//   //   form.addEventListener("submit", async (e) => {
//   //     e.preventDefault();
//   //     try {
//   //       const formData = new FormData(form);
//   //       console.log(formData);
//   //       const response = await fetch(
//   //         "https://script.google.com/macros/s/AKfycbzMwZwLFDDSWszjKfGglXzyqljx9f9RR51qpPecKb6lPyscpTCpM8ythButhtfil-Pp/exec",
//   //         {
//   //           method: "POST",
//   //           body: formData,
//   //         }
//   //       );
//   //       if (response.ok) {
//   //         alert("Thank you! Your form is submitted successfully.");
//   //         // window.location.reload();
//   //       } else {
//   //         console.error(
//   //           "Error! Server response:",
//   //           response.status,
//   //           response.statusText
//   //         );
//   //       }
//   //     } catch (error) {
//   //       console.error("Error!", error.message);
//   //     }
//   //   });
//   // } else {
//   //   console.error("Form element not found");
//   // }
// });

// comment section

document.addEventListener("DOMContentLoaded", function () {
  //

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

  //
  const apiKey = "AIzaSyB707vyZZowzYL0VqeLfa91uwwS_3NY6cg";
  const spreadsheetId = "1XwXgUR1sq12NFfHRskJv8-ADmAlGLJnuGf9cfEbUpPI";
  const sheetName = "Sheet1";

  async function fetchDataFromAPI() {
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      data.values.slice(1).forEach((row) => {
        globalThis.mainComment = document.createElement("div");

        mainComment.classList.add("item", "mainComment");

        const comment = document.createElement("div");
        comment.style.margin = "10px";

        const name = document.createElement("h4");
        const email = document.createElement("p");
        const message = document.createElement("p");
        const rate = document.createElement("div");

        message.classList.add("text-center", "message");
        email.classList.add("text-end");

        const rate1 = document.createElement("span");
        const rate2 = document.createElement("span");
        const rate3 = document.createElement("span");
        const rate4 = document.createElement("span");
        const rate5 = document.createElement("span");

        rate1.classList.add("fa", "fa-star");
        rate2.classList.add("fa", "fa-star");
        rate3.classList.add("fa", "fa-star");
        rate4.classList.add("fa", "fa-star");
        rate5.classList.add("fa", "fa-star");

        name.textContent = row[0];

        console.log(name.textContent);
        email.textContent = row[1];
        message.textContent = ' " ' + row[2] + ' " ';

        let rateCount = 1;
        while (rateCount <= row[3]) {
          switch (rateCount) {
            case 1:
              rate1.classList.add("commentRate");
              break;
            case 2:
              rate2.classList.add("commentRate");
              break;
            case 3:
              rate3.classList.add("commentRate");
              break;
            case 4:
              rate4.classList.add("commentRate");
              break;
            case 5:
              rate5.classList.add("commentRate");
              break;
          }
          rateCount++;
        }

        rate.appendChild(rate1);
        rate.appendChild(rate2);
        rate.appendChild(rate3);
        rate.appendChild(rate4);
        rate.appendChild(rate5);

        comment.appendChild(rate);
        comment.appendChild(name);
        comment.appendChild(message);
        comment.appendChild(email);

        mainComment.appendChild(comment);
        // Initialize Owl Carousel
        const owl = $(".owl-carousel").owlCarousel({
          items: 3, // Set the number of items you want to display initially
          loop: true,
          margin: 10,
        });

        owl.trigger("add.owl.carousel", [mainComment]);

        // Update the carousel
        owl.trigger("refresh.owl.carousel");
      });

      return { data };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  const data = fetchDataFromAPI();
});
