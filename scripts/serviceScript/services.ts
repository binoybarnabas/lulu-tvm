const url: string = "https://mocki.io/v1/507f2920-a1e6-4006-960c-af0c1a9fd2ac";

interface UserData {
  image: string;
  name: string;
  no: string;
  // Add other properties as needed based on your API response
}

const getData = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url);
    const data: UserData[] = await response.json();
    console.log(data);

    if (Array.isArray(data)) {
      data.forEach((userData) => {
        const showData = document.querySelector(".display");
        const serviceData = createServiceData(userData);
        if (showData) {
          showData.appendChild(serviceData);
        }
      });
    } else {
      console.log("Data is not an array:", data);
    }
  } catch (e) {
    console.log("Error fetching or parsing data:", e);
  }
};

getData(url);

const createServiceData = (userData: UserData): HTMLDivElement => {
  const serviceCards = document.createElement("div");
  serviceCards.classList.add("card");
  const serviceImg = document.createElement("img");
  const serviceDesc = document.createElement("div");
  serviceDesc.classList.add("desc");
  const icon1 = document.createElement("div");
  icon1.classList.add("icon");
  const phoneIcon = document.createElement("img");
  phoneIcon.classList.add("phone-icon");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  // Storing values into elements
  serviceImg.src = userData.url;
  h1.textContent = userData.name;
  h2.textContent = userData.no;
  p.textContent = userData.desc;
  phoneIcon.src = "/assets/serviceAssets/img/phone.png";

  // Appending element to parent elements
  icon1.appendChild(phoneIcon);
  icon1.appendChild(h2);
  serviceDesc.appendChild(h1);
  serviceDesc.appendChild(icon1);
  serviceDesc.appendChild(p);
  serviceCards.appendChild(serviceImg);
  serviceCards.appendChild(serviceDesc);

  return serviceCards;
};
