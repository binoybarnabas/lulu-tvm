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
    img1.addEventListener("click", () => {
        window.location.href = `funtura.html`
    })
    img1.style.backgroundColor = "blue";
    let img2 = document.getElementById("img2");
    img2.src = data.users[rand2].image;
    img2.style.backgroundColor = "blue";
}