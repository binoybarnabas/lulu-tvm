var swipere = new Swiper(".mySwiper", {
  cssMode: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 30,
  slidersPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// event card

// Fetch data from the API

const request = fetch("https://dummyjson.com/users/");
const eventSectionDesc = document.querySelector(".eventSectionDesc");

// Create a swiperParams object to store the swiper settings
const swiperParams = {
  slidesPerView: 3, // Number of slides per view
  // slidersPerView: "auto",
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 70, // Space between slides in px
  loop: true, // Enable loop mode
  navigation: {
    nextEl: ".event-swiper-button-next",
    prevEl: ".event-swiper-button-prev",
  },
  cssMode: true,
};

// Initialize the swiper instance with the swiperParams object
const swiper = new Swiper(".swiper-container", swiperParams);

request
  .then((response) => response.json())
  .then((data) => {
    data.users.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("swiper-slide"); // Add swiper-slide class to the div element
      const div1 = document.createElement("div");
      div1.classList.add("eventSectionDescSub1-div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      const button = document.createElement("button");
      const i = document.createElement("i");
      i.classList.add("fa-solid", "fa-book", "eventCardI");
      const span = document.createElement("span");
      const div2 = document.createElement("div");
      div2.classList.add("eventSectionDescSub2");
      img.src = element.image; // Replace with the actual data property for image URL
      h3.textContent = element.firstName + " " + element.lastName; // Replace with the actual data property for the specialist's name
      span.textContent = " JOIN EVENT"; // Replace with the actual data property for the specialist's description
      // Append the elements to the swiper-slide div
      div1.appendChild(img);
      div.appendChild(div1);
      button.appendChild(i);
      button.appendChild(span);
      a.appendChild(button);
      div2.appendChild(h3);
      div2.appendChild(a);
      div.appendChild(div2);
      // Append the swiper-slide div to the eventSectionDesc element
      eventSectionDesc.appendChild(div);

      button.addEventListener("click", () => {
        window.location.href = `eventInner.html?id=${element.id}`;
        console.log("hello event" + element.id);
      });

      // Update the swiper layout after adding new slides
      swiper.update();
    });
  })
  .catch((error) => console.log(error.message));
