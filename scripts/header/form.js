document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    var data = new Date();
    document.getElementById('date').value = Date();

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData(form);
          console.log(formData);
          console.log(data);
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwq25rzqXqiqlijZoZhOzen8JA86IAsc7uc12wh9ZI23qERYuBBrCv3o3pdYGO5v5Xjkw/exec",
          {
            method: "POST",
              body: formData, data
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
