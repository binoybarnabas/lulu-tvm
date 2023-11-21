var person = {
  firstname: null,
  email: null,
  subject: null,
  textArea: null,
};

let url =
  "https://script.google.com/macros/s/AKfycbwq25rzqXqiqlijZoZhOzen8JA86IAsc7uc12wh9ZI23qERYuBBrCv3o3pdYGO5v5Xjkw/exec";
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(response.status);
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: myJson,
  });

  console.log(myJson);
};

const contactUs = () => {
  console.log(document.getElementById("name").value);
  person.firstname = document.getElementById("name").value;
  console.log(document.getElementById("email").value);
  person.email = document.getElementById("email").value;
  console.log(document.getElementById("subject").value);
  person.subject = document.getElementById("subject").value;
  console.log(document.getElementById("text_area").value);
  person.textArea = document.getElementById("text_area").value;

  //   console.log(person);
  globalThis.myJson = JSON.stringify(person);

  getData();
};
// setTimeout(() => {
//     console.log(person);

// }, 5000);
