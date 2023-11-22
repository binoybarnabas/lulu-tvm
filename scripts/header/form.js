var person = {
  firstname: null,
  email: null,
  subject: null,
  textArea: null,
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwq25rzqXqiqlijZoZhOzen8JA86IAsc7uc12wh9ZI23qERYuBBrCv3o3pdYGO5v5Xjkw/exec";

const form = document.forms["contact-form"];

console.log(new FormData(form));

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

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
          window.location.reload();
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
