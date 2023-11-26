const url = "https://mocki.io/v1/5358c6a4-322a-43e4-a69e-7954aedf4a77";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0])
    entertainmetCards(data);
  } catch (x) {
    console.log(x);
  }
};

getData(url);

const entertainmetCards = (data) => {


  // console.log(data.users[rand1].image);
  let img1 = document.getElementById("img1");
  img1.src = data[0].image;
  let card1 = document.querySelector(".card1");
  document.querySelector("#card1").textContent = data[0].name 
  card1.addEventListener("click", () => {
    console.log("link working");
    window.location.href = `pvr.html`;
  });
  img1.style.backgroundColor = "blue";
  let img2 = document.getElementById("img2");
  img2.src =  data[1].image;
  img2.style.backgroundColor = "blue";
  let card2 = document.querySelector(".card2");
  document.querySelector("#card2").textContent = data[1].name 
  card2.addEventListener("click", () => {
    console.log("link working");
    window.location.href = `funtura.html`;
  });
};

const openNewpage = (data) => {
  window.location.href = `funtura.html`
}
