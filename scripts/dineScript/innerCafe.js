// Searching the url to get parameter ID
const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get("id"));
console.log(typeof id);
let url = "https://mocki.io/v1/18245941-6357-40b5-8523-03dcff8fca99";

// fetching data of the particular ID
const dataProcess = async (url, id) => {
  try {
    let response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const newData = data.filter((userData) => {
      if (userData.id == id) {
        return userData;
      }
    });
    createInnerCafe(newData);
    similarCards(data);
  } catch (e) {
    console.log(e);
  }
};

// Calling the async function
dataProcess(url, id);

// Setting values to the html elements
const createInnerCafe = (newData) => {
  document.querySelector(".cafe-name").textContent = newData[0].name;
  document.querySelector("#cafe-logo").src = newData[0].logo;
  document.querySelector(".name").textContent = newData[0].name;
  document.querySelector(".tele-no").innerHTML = newData[0].phn;
  document.querySelector(".email").innerHTML = newData[0].mail;
  document.querySelector("#cafe-image").src = newData[0].image;
  document.querySelector(".cafe-description").textContent = newData[0].about;
  document.querySelector("#address").innerHTML =
    "Address : " + newData[0].address;
  document.querySelector("#website").innerHTML =
    "Website : " + newData[0].website;
};

// Generating similar stores
const similarCards = (data) => {
  for (let i = 1; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * 12 + 1);
    document.querySelector(`#similar${i}`).src = data[randomIndex].logo;
    document.querySelector(`#similar${i}`).addEventListener("click", () => {
      window.location.href = `innerCafe.html?id=${randomIndex + 1}`;
    });
  }
};

function openForm() {
  document.querySelector(".review-form").style.display = "block";
  document.querySelector(".web-content1").style.filter = "blur(10px)";
  document.querySelector(".web-content2").style.filter = "blur(10px)";
  document.querySelector(".web-content3").style.filter = "blur(10px)";
}

function closeForm() {
  document.querySelector(".review-form").style.display = "none";
  document.querySelector(".web-content1").style.filter = "blur(0px)";
  document.querySelector(".web-content2").style.filter = "blur(0px)";
  document.querySelector(".web-content3").style.filter = "blur(0px)";
}

function validateForm() {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var rating = document.getElementById("rating").value;
  var review = document.getElementById("review").value;

  if (!name) {
    alert("The name field cannot be empty...!\n\nEnter a valid name.");
  } else if (!mail) {
    alert("The mail field cannot be empty...!\n\nEnter a valid mail id.");
  } else if (!rating) {
    alert("The rating field cannot be empty...!\n\nEnter your rating betwwen 1 and 5.");
  } else if (!review) {
    alert("The review field cannot be empty...!.");
  } else {
    document.querySelector(".review-form").style.display = "none";
  }
}

const scriptURL = "https://script.google.com/macros/s/AKfycbxf1ip126JqhJLXlKnKz3Hcrhk10KfW-Dv_gvpQj_4lUkDmX0brLqMcSJPGHhACUoAF/exec";
 
  const form = document.forms["review-form"];
   
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thank you! your form is submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  });

