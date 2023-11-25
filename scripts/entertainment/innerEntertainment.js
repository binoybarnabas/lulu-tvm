const id = Number(new URLSearchParams(window.location.search).get("id"));
console.log(id);
const url = "https://dummyjson.com/users";

const idSearch = async (url, id) => {
  try {
    let response = await fetch(url);
    let data = await response.json();

    const newData = data.users.filter((userData) => {
      if (userData.id == id) {
        console.log(userData);
        return userData;
      }
    });
    console.log(newData);
    let img = document.querySelector(".funtura img");
    img.src = newData[0].image;
  } catch (e) {
    console.log(e);
  }
};

idSearch(url, id);
