// document.getElementById("postDataButton").addEventListener("click", postData);

// let fullName, phone, email, education, job;
// url = "https://mocki.io/v1/f940fb9c-57a4-4207-9ca9-8b2bf05c313c";
// const book=()=> {
//   fullName = document.getElementById("fname").value;
//   phone = document.getElementById("phone").value;
//   email = document.getElementById("email").value;
//   education = document.getElementById("education").value;
//   job = document.getElementById("job").value;
//   console.log(fullName, phone, email, education, job);
//   const data = { fullName, phone, email, education, job };
//   sendData(data, url);
// }

// const sendData = async (data, url) => {
//   const response = await fetch(url, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   const dataResponse = await response.json();
//   console.log(response);

//   if (response.ok === true) {
//     window.location.href = "event.html";
//     window.alert("successfully booked.");
//   }
// };

const scriptURL = "https://script.google.com/macros/s/AKfycbxB85X5m1wM7bymjd_lIuuvhjTkLKMM9gFRyIXXNb0xMRjxZ1uQaVcJxyRHZgOAdMpFfg/exec";
 
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