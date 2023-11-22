var person = {
  firstname: null,
  email: null,
  subject: null,
  textArea: null,
};

let url =
  "https://script.google.com/macros/s/AKfycbwq25rzqXqiqlijZoZhOzen8JA86IAsc7uc12wh9ZI23qERYuBBrCv3o3pdYGO5v5Xjkw/exec";
// const getData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();

//   console.log(response.status);
//   fetch(url, {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: myJson,
//   });

//   console.log(myJson);
// };

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwq25rzqXqiqlijZoZhOzen8JA86IAsc7uc12wh9ZI23qERYuBBrCv3o3pdYGO5v5Xjkw/exec";

const form = document.forms["contact-form"];

console.log(new FormData(form));

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Your form submission logic here
      try {
        const formData = new FormData(form);
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwq25rzqXqiqlijZoZhOzen8JA86IAsc7uc12wh9ZI23qERYuBBrCv3o3pdYGO5v5Xjkw/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          alert("Thank you! Your form is submitted successfully.");
          // Optionally, you can reload the page after successful submission
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

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) =>
//       alert("Thank you! your form is submitted successfully.")
//     )
//     // .then(() => {
//     //   window.location.reload();
//     // }
//     // )
//     .catch((error) => console.error("Error!", error.message));
// });

// const contactUs = () => {
//   console.log(document.getElementById("name").value);
//   person.firstname = document.getElementById("name").value;
//   console.log(document.getElementById("email").value);
//   person.email = document.getElementById("email").value;
//   console.log(document.getElementById("subject").value);
//   person.subject = document.getElementById("subject").value;
//   console.log(document.getElementById("text_area").value);
//   person.textArea = document.getElementById("text_area").value;

//   //   console.log(person);
//   globalThis.myJson = JSON.stringify(person);

//   getData();
// };
// setTimeout(() => {
//     console.log(person);

// }, 5000);
