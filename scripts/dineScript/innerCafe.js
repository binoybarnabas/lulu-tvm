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

//Function to open review form
function openForm() {
  document.querySelector(".review-form").style.display = "block";
  document.querySelector(".web-content1").style.filter = "blur(10px)";
  document.querySelector(".web-content2").style.filter = "blur(10px)";
  document.querySelector(".web-content3").style.filter = "blur(10px)";
}

//Function to close review form
function closeForm() {
  document.querySelector(".review-form").style.display = "none";
  document.querySelector(".web-content1").style.filter = "blur(0px)";
  document.querySelector(".web-content2").style.filter = "blur(0px)";
  document.querySelector(".web-content3").style.filter = "blur(0px)";
}

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

//Function for form validation
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
    alert(
      "The rating field cannot be empty...!\n\nEnter your rating between 1 and 5."
    );
  } else if (rating < 1 || rating > 5) {
    alert("Enter your rating between 1 and 5.");
  } else if (!review) {
    alert("The review field cannot be empty...!.");
  } else {
    console.log(name,mail,rating,review);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "barnabasbinoy@gmail.com",
      Password: "B7BBD446ED67704F39A59923E19B5D88AEEE",
      To: "barnabasbinoy@gmail.com",
      From: "barnabasbinoy@gmail.com",
      Subject: `review by ${name}`,
      Body: `${review}. rating given is ${rating}`,
  })
      .then(function (message) {
          alert("mail sent successfully" + message)
      });
    //alert("you review is send successfully");
    document.querySelector(".review-form").style.display = "none";
  }
}

//Posting data in excel form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxf1ip126JqhJLXlKnKz3Hcrhk10KfW-Dv_gvpQj_4lUkDmX0brLqMcSJPGHhACUoAF/exec";

const form = document.querySelector("#form");

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
