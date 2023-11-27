//Searching the url to get parameter ID

const urlParam = new URLSearchParams(window.location.search);

const id = Number(urlParam.get("id"));
console.log(typeof id);
let filteredData;
let url = "https://mocki.io/v1/f940fb9c-57a4-4207-9ca9-8b2bf05c313c";

//Fetching data of the particular ID
const dataProcess = async (url, id) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    const newData = data.filter((userData) => {
      if (userData.id == id) {
        return userData;
      }
    });

    //Displaying details
    document.getElementById("img").src = newData[0].url;
    document.getElementById("h4").innerHTML = newData[0].name;
    document.getElementById("h1").innerHTML = newData[0].name;
    document.getElementById("h2").innerHTML = "About the event";
    document.getElementById("p").innerHTML = newData[0].desc;
    document.getElementById("h3").innerHTML = "Date : " + newData[0].date;
  } catch (e) {
    console.log(e);
  }
};

dataProcess(url, id);
