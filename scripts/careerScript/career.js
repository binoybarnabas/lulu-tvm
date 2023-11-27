const scriptURL =
  "https://script.google.com/macros/s/AKfycbxB85X5m1wM7bymjd_lIuuvhjTkLKMM9gFRyIXXNb0xMRjxZ1uQaVcJxyRHZgOAdMpFfg/exec";

const form = document.forms["booking"];

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
