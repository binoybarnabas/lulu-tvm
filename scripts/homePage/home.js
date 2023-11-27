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

const request = fetch(
  "https://mocki.io/v1/f940fb9c-57a4-4207-9ca9-8b2bf05c313c"
);
const eventSectionDesc = document.querySelector(".eventSectionDesc");

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

const swiper = new Swiper(".swiper-container", swiperParams);

request
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
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
      i.style.color = "#4582ff";

      const span = document.createElement("span");

      const div2 = document.createElement("div");
      div2.classList.add("eventSectionDescSub2");

      img.src = element.url;
      h3.textContent = element.name;
      span.textContent = " JOIN EVENT";

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
