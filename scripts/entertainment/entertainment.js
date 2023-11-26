const url = "https://dummyjson.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    entertainmetCards(data);
  } catch (x) {
    console.log(x);
  }
};

getData(url);

const entertainmetCards = (data) => {
  let rand1 = Math.floor(Math.random() * 9);
  let rand2 = Math.floor(Math.random() * 9);

  console.log(data.users[rand1].image);
  let img1 = document.getElementById("img1");
  img1.src = data.users[rand1].image;
  let card1 = document.querySelector(".card1");
  document.querySelector("#card1").textContent = data.users[rand1].company.name 
  card1.addEventListener("click", () => {
    // console.log("link working");
    window.location.href = `funtura.html?id=${data.users[rand1].id}`;
  });
  img1.style.backgroundColor = "blue";
  let img2 = document.getElementById("img2");
  img2.src = data.users[rand2].image;
  img2.style.backgroundColor = "blue";
  img2.src = data.users[rand2].image;
  let card2 = document.querySelector(".card2");
  document.querySelector("#card2").textContent = data.users[rand2].company.name 
  card2.addEventListener("click", () => {
    // console.log("link working");
    // console.log(rand2);
    window.location.href = `funtura.html?id=${data.users[rand2].id}`;
  });
};

// const openNewpage = (data) => {
//   window.location.href = `funtura.html`
// }
