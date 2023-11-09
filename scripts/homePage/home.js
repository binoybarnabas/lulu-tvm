var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 30,
  slidersPerView: "auto",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// event card

// Fetch data from the API

// const request = fetch("https://dummyjson.com/users/");

// const eventSectionDescription = document.querySelector(".eventSectionDesc");

// request
//   .then((response) => response.json())
//   .then((data) => {
//     data.users.forEach((element) => {
//       const div1 = document.createElement("div");
//       div1.classList.add("eventSectionDescSub1", "swiper-slide");

//       console.log("hello");
//       const div2 = document.createElement("div");
//       div2.classList.add("eventSectionDescSub1-div");

//       const div3 = document.createElement("div");
//       div3.classList.add("eventSectionDescSub2");

//       const h3 = document.createElement("h3");
//       const a = document.createElement("a");

//       const button = document.createElement("button");

//       const i = document.createElement("i");
//       i.classList.add("fa-solid", "fa-book");

//       const span = document.createElement("span");
//       span.textContent = "JOIN EVENT";

//       button.appendChild(i);
//       button.appendChild(span);
//       a.appendChild(button);
//       div3.appendChild(h3);
//       div3.appendChild(a);
//       div1.appendChild(div2);
//       div1.appendChild(div3);
//       eventSectionDescription.appendChild(div1);
//     });
//   })
//   .catch((error) => console.log(error.message));

// // event swiper

// var swiper = new Swiper(".event-mySwiper", {
//   pagination: ".swiper-pagination",
//   direction: "horizontal",
//   slidesPerView: 3,
//   paginationClickable: true,
//   spaceBetween: 30,
//   mousewheelControl: true,
//   parallax: true,
//   speed: 600,
//   autoplay: {
//     delay: 5000,
//   },

//   loop: true,
// });

// Fetch data from the API

const request = fetch("https://dummyjson.com/users/");

const specialistImgSet = document.querySelector(".eventSectionDesc");

request
  .then((response) => response.json())
  .then((data) => {
    data.users.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("eventSectionDescSub1");

      const div1 = document.createElement("div");
      div1.classList.add("eventSectionDescSub1-div");

      const img = document.createElement("img");
      const h3 = document.createElement("h3");

      const a = document.createElement("a");
      const button = document.createElement("button");

      const i = document.createElement("i");
      i.classList.add("fa-solid", "fa-book");
      const span = document.createElement("span");

      const div2 = document.createElement("div");
      div2.classList.add("eventSectionDescSub2");

      img.src = element.image; // Replace with the actual data property for image URL
      console.log(element.firstName);
      console.log(element.lastName);

      h3.textContent = element.firstName + " " + element.lastName; // Replace with the actual data property for the specialist's name
      span.textContent = "  JOIN EVENT"; // Replace with the actual data property for the specialist's description

      // Append the elements to the specialist-img-set div
      div1.appendChild(img);
      div.appendChild(div1);

      button.appendChild(i);
      button.appendChild(span);

      a.appendChild(button);
      div2.appendChild(h3);
      div2.appendChild(a);
      div.appendChild(div2);
      specialistImgSet.appendChild(div);
    });
  })
  .catch((error) => console.log(error.message));
